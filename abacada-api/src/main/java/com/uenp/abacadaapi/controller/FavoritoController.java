package com.uenp.abacadaapi.controller;

import com.uenp.abacadaapi.model.Favorito;
import com.uenp.abacadaapi.services.FavoritoServices;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/favorito")
public class FavoritoController {
    @Autowired
    private FavoritoServices services;
    
    @GetMapping
    public ResponseEntity<List<Favorito>> listarFavoritos(@RequestParam(name = "registro") String registro){
        return ResponseEntity.ok(services.listarFavoritos(registro));
    }
    
    @PostMapping
    public ResponseEntity<Favorito> cadastrarFavoritos(@RequestBody Favorito favorito) {
        return ResponseEntity.ok(services.addFavorito(favorito));
    }
}
