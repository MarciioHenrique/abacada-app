package com.uenp.abacadaapi.controller;

import com.uenp.abacadaapi.model.Professor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.uenp.abacadaapi.services.ProfessorServices;
import jakarta.websocket.server.PathParam;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

//metodos do caminho /professor da api
@RestController
@RequestMapping("/professor")
public class ProfessorController {
    @Autowired
    private ProfessorServices services;
    
    @GetMapping("/{registro}")
    public ResponseEntity<Professor> listarProfessor(@PathVariable(name = "registro") Integer registro) {
        return ResponseEntity.ok(services.listarProfessor(registro));
    }

    @GetMapping
    public ResponseEntity<List<Professor>> listarProfessores(@RequestParam(name = "instituicao") String instituicao) {
        return ResponseEntity.ok(services.listarProfessores(instituicao));
    }
    
    @PostMapping
    public ResponseEntity<Professor> cadastrarProfessor(@RequestBody Professor professor) {
        return ResponseEntity.ok(services.cadastrarProfessor(professor));
    }
    
    @DeleteMapping
    public ResponseEntity<List<Professor>> excluirProfessor(@RequestParam(name = "registro") Integer registro) {
        return ResponseEntity.ok(services.excluirProfessor(registro));
    }
}
