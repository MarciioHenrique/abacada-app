package com.uenp.abacadaapi.model;

import org.springframework.data.annotation.Id;


//modelo do aluno com todos os seus dados e metodos
public class Aluno {
    
    @Id
    private String registro;
    private String nome;
    private Heroi heroi;
    private String vogal;
    private String estagio;
    private Professor professor;
    

    public Aluno(String registro, String nome, Heroi heroi, String vogal, String estagio, Professor professor) {
        this.registro = registro;
        this.nome = nome;
        this.heroi = heroi;
        this.vogal = vogal;
        this.estagio = estagio;
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

    public Heroi getHeroi() {
        return heroi;
    }

    public void setHeroi(Heroi heroi) {
        this.heroi = heroi;
    }

    public String getVogal() {
        return vogal;
    }

    public void setVogal(String vogal) {
        this.vogal = vogal;
    }

    public String getEstagio() {
        return estagio;
    }

    public void setEstagio(String estagio) {
        this.estagio = estagio;
    }

    public Professor getProfessor() {
        return professor;
    }

    public void setProfessor(Professor professor) {
        this.professor = professor;
    }
    
    
}
