package com.uenp.abacadaapi.controller;

import com.uenp.abacadaapi.controller.services.SequenceGeneratorService;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.uenp.abacadaapi.model.Instituicao;
import com.uenp.abacadaapi.repository.InstituicaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/instituicao")
public class InstituicaoController {
    
    @Autowired
    private InstituicaoRepository instituicaoRepository;
    
    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;
    
    @GetMapping
    public List<Instituicao> ListarInstituicoes() {
        return instituicaoRepository.findAll();
    }
    
    @PostMapping
    public Instituicao CadastrarInstituicoes(@RequestBody Instituicao instituicao) {
        instituicao.setId(sequenceGeneratorService.generateSequence(Instituicao.SEQUENCE_NAME));
        return instituicaoRepository.save(instituicao);
    }
    
    
}
