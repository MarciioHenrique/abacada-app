package com.uenp.abacadaapi.controller;

import com.uenp.abacadaapi.controller.services.SequenceGeneratorService;
import com.uenp.abacadaapi.model.Professor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.uenp.abacadaapi.repository.ProfessorRepository;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/professor")
public class ProfessorController {
    @Autowired
    private ProfessorRepository professorRepository;
    
    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;
    
    @GetMapping
    public List<Professor> ListarProfessores() {
        return professorRepository.findAll();
    }
    
    @PostMapping
    public Professor CadastrarProfessores(@RequestBody Professor professor) {
        professor.setId(sequenceGeneratorService.generateSequence(Professor.SEQUENCE_NAME));
        return professorRepository.save(professor);
    }
}
