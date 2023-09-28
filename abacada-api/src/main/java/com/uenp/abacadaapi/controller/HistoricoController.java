package com.uenp.abacadaapi.controller;

import com.uenp.abacadaapi.model.Historico;
import com.uenp.abacadaapi.services.HistoricoServices;
import jakarta.websocket.server.PathParam;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/historico")
public class HistoricoController {
    @Autowired
    private HistoricoServices services;
    
    @GetMapping
    public ResponseEntity<List<Historico>> listarHistorico(@RequestParam(name = "registro") String registro){
        return ResponseEntity.ok(services.listarHistorico(registro));
    }
    
    @PostMapping
    public ResponseEntity<Historico> cadastrarHistorico(@RequestBody Historico historico) {
        return ResponseEntity.ok(services.addHistorico(historico));
    }
    
    @PatchMapping
    public ResponseEntity<Historico> alterarHistorico(@RequestParam(name = "id") String id, @RequestBody Historico historicoUpdate) {
        return ResponseEntity.ok(services.alterarHistorico(id, historicoUpdate));
    }
    
    @DeleteMapping
    public ResponseEntity<Boolean> alterarHistorico(@RequestParam(name = "id") String id) {
        return ResponseEntity.ok(services.excluirHistoricoAluno(id));
    }
}

