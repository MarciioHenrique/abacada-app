package com.uenp.abacadaapi.model;

import org.springframework.data.annotation.Id;

//modelo do professor com todos os seus dados e metodos
public class Professor {

    @Id
    private Integer registro;
    private String nome;
    private String instituicao;

    public Professor(String nome, String instituicao) {
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

    public String getInstituicao() {
        return instituicao;
    }

    public void setInstituicao(String instituicao) {
        this.instituicao = instituicao;
    }
    
    
}
