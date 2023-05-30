package com.uenp.abacadaapi.controller;

import com.uenp.abacadaapi.model.Heroi;
import com.uenp.abacadaapi.services.HeroiServices;
import jakarta.websocket.server.PathParam;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/heroi")
public class HeroiController {
    @Autowired
    private HeroiServices services;
    
    @GetMapping
    public ResponseEntity<List<Heroi>> listarHerois() {
        return ResponseEntity.ok(services.listarHerois());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Heroi>> listarHeroiPorId(@PathVariable(value = "id") String id) {
        return ResponseEntity.ok(services.listarHeroiPorId(id));
    }
    
    @PostMapping
    public ResponseEntity<Heroi> addheroi(@RequestBody Heroi heroi) {
        return ResponseEntity.ok(services.addHeroi(heroi));
    }
}
