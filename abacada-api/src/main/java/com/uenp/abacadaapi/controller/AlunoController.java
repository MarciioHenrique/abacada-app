package com.uenp.abacadaapi.controller;

import com.uenp.abacadaapi.model.Aluno;
import com.uenp.abacadaapi.model.Instituicao;
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
import com.uenp.abacadaapi.repository.AlunoRepository;
import com.uenp.abacadaapi.services.AlunoServices;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

//metodos do caminho /aluno da api
@RestController
@RequestMapping("/aluno")
public class AlunoController {
    
    @Autowired
    private AlunoServices services;

    @GetMapping
    public ResponseEntity<List<Aluno>> listarAlunos(@RequestParam(value = "registroProfessor") String registroProfessor) {
        return ResponseEntity.ok(services.listarAlunos(registroProfessor));
    }
    
    @GetMapping("/{registro}")
    public ResponseEntity<Optional<Aluno>> listarAlunoPorId(@PathVariable(value = "registro") String registro) {
        return ResponseEntity.ok(services.listarAlunoPorId(registro));
    }
    
    @PostMapping
    public ResponseEntity<Aluno> cadastrarAluno(@RequestBody Aluno aluno) {
        return ResponseEntity.ok(services.cadastrarAluno(aluno));
    }
    
    @DeleteMapping
    public ResponseEntity<Optional<Aluno>> excluirAluno(@RequestParam(value = "registro") String registro) {
        return ResponseEntity.ok(services.excluirAluno(registro));
    }
}
