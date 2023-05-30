package com.uenp.abacadaapi.model;

import com.mongodb.internal.connection.Time;
import org.springframework.data.annotation.Id;

public class Historico {
    @Id
    private String id;
    private Aluno aluno;
    private Jogo jogo;
    private String tempoMin;
    private String tempoSeg;
    private Boolean concluido;

    public Historico() { }

    public Historico(String id, Aluno aluno, Jogo jogo, String horaInicio, String horaFim, Boolean concluido) {
        this.id = id;
        this.aluno = aluno;
        this.jogo = jogo;
        this.tempoMin = horaInicio;
        this.tempoSeg = horaFim;
        this.concluido = concluido;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Aluno getAluno() {
        return aluno;
    }

    public void setAluno(Aluno aluno) {
        this.aluno = aluno;
    }

    public Jogo getJogo() {
        return jogo;
    }

    public void setJogo(Jogo jogo) {
        this.jogo = jogo;
    }

    public String getTempoMin() {
        return tempoMin;
    }

    public void setTempoMin(String tempoMin) {
        this.tempoMin = tempoMin;
    }

    public String getTempoSeg() {
        return tempoSeg;
    }

    public void setTempoSeg(String tempoSeg) {
        this.tempoSeg = tempoSeg;
    }

    public Boolean getConcluido() {
        return concluido;
    }

    public void setConcluido(Boolean concluido) {
        this.concluido = concluido;
    }
}
