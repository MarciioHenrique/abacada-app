package com.uenp.abacadaapi.model;

import org.springframework.data.annotation.Id;

//modelo do professor com todos os seus dados e metodos
public class Professor {

    @Id
    private String registro;
    private String nome;
    private String email;
    private Instituicao instituicao;

    public Professor(String nome, String email, Instituicao instituicao) {
        this.nome = nome;
        this.email = email;
        this.instituicao = instituicao;
    }

    public String getRegistro() {
        return registro;
    }

    public void setRegistro(String registro) {
        this.registro = registro;
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

    public Instituicao getInstituicao() {
        return instituicao;
    }

    public void setInstituicao(Instituicao instituicao) {
        this.instituicao = instituicao;
    }
}
