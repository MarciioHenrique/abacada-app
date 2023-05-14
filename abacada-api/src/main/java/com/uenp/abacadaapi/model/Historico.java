package com.uenp.abacadaapi.model;

import com.mongodb.internal.connection.Time;
import org.springframework.data.annotation.Id;

public class Historico {
    @Id
    private String id;
    private Aluno aluno;
    private Jogo jogo;
    private String horaInicio;
    private String horaFim;
    private Boolean concluido;

    public Historico() { }

    public Historico(String id, Aluno aluno, Jogo jogo, String horaInicio, String horaFim, Boolean concluido) {
        this.id = id;
        this.aluno = aluno;
        this.jogo = jogo;
        this.horaInicio = horaInicio;
        this.horaFim = horaFim;
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

    public String getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(String horaInicio) {
        this.horaInicio = horaInicio;
    }

    public String getHoraFim() {
        return horaFim;
    }

    public void setHoraFim(String horaFim) {
        this.horaFim = horaFim;
    }

    public Boolean getConcluido() {
        return concluido;
    }

    public void setConcluido(Boolean concluido) {
        this.concluido = concluido;
    }
}
