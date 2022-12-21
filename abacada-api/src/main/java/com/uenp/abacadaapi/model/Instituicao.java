package com.uenp.abacadaapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;

public class Instituicao {
    
    @Transient
    public static final String SEQUENCE_NAME = "users_sequence";
    
    @Id
    private Long id;
    private String nome;
    private String email;
    private String senha;

    public Instituicao(String nome, String email, String senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
    
    
  
  
}