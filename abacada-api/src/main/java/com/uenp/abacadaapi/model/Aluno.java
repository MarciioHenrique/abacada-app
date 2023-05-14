package com.uenp.abacadaapi.model;

import org.springframework.data.annotation.Id;


//modelo do aluno com todos os seus dados e metodos
public class Aluno {
    
    @Id
    private String registro;
    private String nome;
    private String heroi;
    private String nivel;
    private Professor professor;
    //colocar os jogos

    public Aluno(String registro, String nome, String heroi, String nivel, Professor professor) {
        this.registro = registro;
        this.nome = nome;
        this.heroi = heroi;
        this.nivel = nivel;
        this.professor = professor;
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

    public String getHeroi() {
        return heroi;
    }

    public void setHeroi(String heroi) {
        this.heroi = heroi;
    }

    public String getNivel() {
        return nivel;
    }

    public void setNivel(String nivel) {
        this.nivel = nivel;
    }
    

    public Professor getProfessor() {
        return professor;
    }

    public void setProfessor(Professor professor) {
        this.professor = professor;
    }
    
    
}
