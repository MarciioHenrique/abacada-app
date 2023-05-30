package com.uenp.abacadaapi.controller;

import com.uenp.abacadaapi.model.Jogo;
import com.uenp.abacadaapi.services.JogoServices;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/jogo")
public class JogoController {
    @Autowired
    private JogoServices services;
    
    @GetMapping
    public ResponseEntity<List<Jogo>> listarJogos(){
        return ResponseEntity.ok(services.listarJogos());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Jogo>> listarJogoPorId(@PathVariable(value = "id") String id){
        return ResponseEntity.ok(services.listarJogoPorId(id));
    }
    
    @PostMapping
    public ResponseEntity<Jogo> cadastrarJogo(@RequestBody Jogo jogo){
        return ResponseEntity.ok(services.cadastrarJogo(jogo));
    }
    
    @DeleteMapping
    public ResponseEntity<Optional<Jogo>> excluirJogo(@RequestParam(name = "id") String id) {
        return ResponseEntity.ok(services.excluirJogo(id));
    }
}
