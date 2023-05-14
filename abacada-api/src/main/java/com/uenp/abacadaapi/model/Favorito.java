package com.uenp.abacadaapi.model;

import org.springframework.data.annotation.Id;

public class Favorito {
    @Id
    private String id;
    private Jogo jogo;
    private Aluno aluno;
    
    public Favorito() { }

    public Favorito(String id, Jogo jogo, Aluno aluno) {
        this.id = id;
        this.jogo = jogo;
        this.aluno = aluno;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Jogo getJogo() {
        return jogo;
    }

    public void setJogo(Jogo jogo) {
        this.jogo = jogo;
    }

    public Aluno getAluno() {
        return aluno;
    }

    public void setAluno(Aluno aluno) {
        this.aluno = aluno;
    }
    
    
}
