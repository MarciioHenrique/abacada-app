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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

//metodos do caminho /aluno da api
@RestController
@RequestMapping("/aluno")
public class AlunoController {
    @Autowired
    private AlunoRepository alunoRepository;
    
    @Autowired
    private MongoTemplate mongoTemplate;
    
    @GetMapping
    public List<Aluno> listarAlunos(@RequestParam(value = "professor") String professor) {
        Query query = new Query();
        query.addCriteria(Criteria.where("professor").is(professor));
        List<Aluno> alunos = mongoTemplate.find(query, Aluno.class);
        return alunos;
    }
    
    @PostMapping
    public String cadastrarAluno(@RequestBody Aluno aluno) {
        if (aluno.getRegistro().toString().length() == 0 || aluno.getNome().length() == 0 || aluno.getProfessor().length() == 0) {
            return "Por favor, digite dados válidos";
        }

        if (alunoRepository.existsById(aluno.getRegistro())) {
            return "Esse aluno já está cadastrado";
        }
        else {
            alunoRepository.save(aluno);
            return "Aluno cadastrado com sucesso";
        }
    }
    
    @DeleteMapping
    public String excluirAluno(@RequestParam(value = "registro") Integer registro) {
        if(alunoRepository.existsById(registro)) {
            alunoRepository.deleteById(registro);
            return "Aluno excluído";
        }
        return "Aluno não encontrado";
    }
}
