package com.uenp.abacadaapi.controller;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.uenp.abacadaapi.model.Instituicao;
import com.uenp.abacadaapi.repository.InstituicaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

//metodos do caminho /instituicao da api
@RestController
@RequestMapping("/instituicao")
public class InstituicaoController {
    
    @Autowired
    private InstituicaoRepository instituicaoRepository;
    
    @GetMapping
    public List<Instituicao> ListarInstituicoes() {
        return instituicaoRepository.findAll();
    }
    
    @PostMapping
    public String CadastrarInstituicao(@RequestBody Instituicao instituicao) {
        if (instituicao.getEmail().length() == 0 || instituicao.getSenha().length() == 0 || instituicao.getNome().length() == 0) {
            return "Por favor, digite dados válidos";
        }
        
        if (!instituicao.getEmail().endsWith("@gmail.com")) {
            return "Por favor, digite um e-mail válido";
        }
        
        if (instituicaoRepository.existsById(instituicao.getEmail())) {
            return "E-mail já cadastrado! Por favor, digite outro e-mail";
        }
        else {
            instituicaoRepository.save(instituicao);
            return "E-mail cadastrado com sucesso";
        }
    }
    
    @DeleteMapping
    public String excluirInstituições(@RequestParam(value = "instituicao") String instituicao) {
        if (instituicaoRepository.existsById(instituicao)) {
            instituicaoRepository.deleteById(instituicao);
            return "Instituição Removida";
        }
        else {
            return "Instituicao não encontrada";
        }
        
    }
    
    
}
