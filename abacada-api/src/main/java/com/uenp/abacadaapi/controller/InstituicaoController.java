package com.uenp.abacadaapi.controller;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.uenp.abacadaapi.model.Instituicao;
import com.uenp.abacadaapi.model.Usuario;
import com.uenp.abacadaapi.services.InstituicaoServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

//metodos do caminho /instituicao da api
@RestController
@RequestMapping
public class InstituicaoController {
    
    @Autowired
    private InstituicaoServices services;
    
    @GetMapping("/instituicao")
    public List<Instituicao> listar(){
        return services.listarInstituicoes();
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> Login(@RequestBody Usuario usuario) {
        return ResponseEntity.ok(services.login(usuario));
    }    
    
    @PostMapping("/cadastro")
    public ResponseEntity<Instituicao> cadastrarInstituicao(@RequestBody Instituicao instituicao) {
        return ResponseEntity.ok(services.cadastrarInstituicao(instituicao));
    }
    
    @DeleteMapping("/instituicao")
    public ResponseEntity<List<Instituicao>> excluirInstituicoes(@RequestBody(required = false) Usuario usuario) {
        if (usuario == null) {
            return ResponseEntity.ok(services.excluirInstituicoes());
        } else {
            return ResponseEntity.ok(services.excluirInstituicao(usuario));
        }
        
    }
}
