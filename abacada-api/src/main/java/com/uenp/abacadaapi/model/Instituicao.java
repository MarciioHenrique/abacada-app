package com.uenp.abacadaapi.model;

import org.springframework.data.annotation.Id;

////modelo da Instituicao com todos os seus dados e metodos
public class Instituicao {

    private String nome;
    @Id
    private String email;
    private String senha;

    public Instituicao(String nome, String email, String senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
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
