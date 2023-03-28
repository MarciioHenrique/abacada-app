package com.uenp.abacadaapi.model;

import org.springframework.data.annotation.Id;


//modelo do aluno com todos os seus dados e metodos
public class Aluno {
    
    @Id
    private Integer registro;
    private String nome;
    private Professor professor;
    //colocar os jogos

    public Aluno(Integer registro, String nome, Professor professor) {
        this.registro = registro;
        this.nome = nome;
        this.professor = professor;
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

    public Professor getProfessor() {
        return professor;
    }

    public void setProfessor(Professor professor) {
        this.professor = professor;
    }
    
    
}
