package com.uenp.abacadaapi.model;

import org.springframework.data.annotation.Id;

//modelo do professor com todos os seus dados e metodos
public class Professor {

    @Id
    private Integer registro;
    private String nome;
    private Instituicao instituicao;

    public Professor(String nome, Instituicao instituicao) {
        this.nome = nome;
        this.instituicao = instituicao;
    }

    public Integer getRegistro() {
        return registro;
    }

    public void setRegistro(Integer registro) {
        this.registro = registro;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Instituicao getInstituicao() {
        return instituicao;
    }

    public void setInstituicao(Instituicao instituicao) {
        this.instituicao = instituicao;
    }
}
