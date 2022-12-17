package com.uenp.abacadaapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;


public class Professor {
    
    @Transient
    public static final String SEQUENCE_NAME = "users_sequence";
    
    @Id
    private Long id;
    private String nome;
    private String instituicao;

    public Professor(String nome, String instituicao) {
        this.nome = nome;
        this.instituicao = instituicao;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getInstituicao() {
        return instituicao;
    }

    public void setInstituicao(String instituicao) {
        this.instituicao = instituicao;
    }
    
    
}
