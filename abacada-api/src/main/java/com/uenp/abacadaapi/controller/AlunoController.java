package com.uenp.abacadaapi.controller;

import com.uenp.abacadaapi.controller.services.SequenceGeneratorService;
import com.uenp.abacadaapi.model.Aluno;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.uenp.abacadaapi.repository.AlunoRepository;
import java.util.List;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/aluno")
public class AlunoController {
    @Autowired
    private AlunoRepository alunoRepository;
    
    @Autowired
    private MongoTemplate mongoTemplate;
    
    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;
    

    
    @GetMapping
    public List<Aluno> ListarAlunos(@RequestParam(value = "professor") String prof) {
        Query query = new Query();
        query.addCriteria(Criteria.where("professor").is(prof));
        List<Aluno> alunos = mongoTemplate.find(query, Aluno.class);
        return alunos;
        //return alunoRepository.findAll();
    }
    
    @PostMapping
    public Aluno CadastrarAlunos(@RequestBody Aluno aluno) {
        aluno.setId(sequenceGeneratorService.generateSequence(Aluno.SEQUENCE_NAME));
        return alunoRepository.save(aluno);
    }
}
