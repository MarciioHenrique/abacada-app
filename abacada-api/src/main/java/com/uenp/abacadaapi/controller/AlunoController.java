package com.uenp.abacadaapi.controller;

import com.uenp.abacadaapi.controller.services.SequenceGeneratorService;
import com.uenp.abacadaapi.model.Aluno;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.uenp.abacadaapi.repository.AlunoRepository;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/aluno")
public class AlunoController {
    @Autowired
    private AlunoRepository alunoRepository;
    
    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;
    
    @GetMapping
    public List<Aluno> ListarInstituicoes() {
        return alunoRepository.findAll();
    }
    
    @PostMapping
    public Aluno CadastrarInstituicoes(@RequestBody Aluno aluno) {
        aluno.setId(sequenceGeneratorService.generateSequence(Aluno.SEQUENCE_NAME));
        return alunoRepository.save(aluno);
    }
}
