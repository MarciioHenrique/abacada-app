package com.uenp.abacadaapi.controller;

import com.uenp.abacadaapi.model.Professor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.uenp.abacadaapi.repository.ProfessorRepository;
import java.util.List;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

//metodos do caminho /professor da api
@RestController
@RequestMapping("/professor")
public class ProfessorController {
    @Autowired
    private ProfessorRepository professorRepository;
    
    @Autowired
    private MongoTemplate mongoTemplate;
    
    @GetMapping
    public List<Professor> listarProfessores(@RequestParam(value = "instituicao") String instituicao) {
        Query query = new Query();
        query.addCriteria(Criteria.where("instituicao").is(instituicao));
        List<Professor> professores = mongoTemplate.find(query, Professor.class);
        return professores;
    }
    
    @PostMapping
    public String cadastrarProfessor(@RequestBody Professor professor) {
        if (professor.getRegistro() == null || professor.getNome().length() == 0 || professor.getInstituicao().length() == 0) {
            return "Por favor, digite dados válidos";
        }

        if (professorRepository.existsById(professor.getRegistro())) {
            return "Registro em uso";
        }
        else {
            professorRepository.save(professor);
            return "Professor cadastrado com sucesso";
        }
    }
    
    @DeleteMapping
    public String excluirProfessor(@RequestParam(value = "registro") Integer registro) {
        if(professorRepository.existsById(registro)) {
            professorRepository.deleteById(registro);
            return "Professor excluído";
        }
        return "Professor não encontrado";
    }
}
