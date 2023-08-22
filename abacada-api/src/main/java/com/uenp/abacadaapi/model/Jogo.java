package com.uenp.abacadaapi.model;

import java.awt.Image;
import org.springframework.data.annotation.Id;

public class Jogo {
    @Id
    private String id;
    private String nome;
    private String descricao;
    private String vogal;
    private String estagio;
    private String image;
    private String url;
    private Boolean interno;
    
    public Jogo() { }
    
    public Jogo(String id, String nome, String descricao, String vogal, String estagio, String image, String url, Boolean interno) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.vogal = vogal;
        this.estagio = estagio;
        this.image = image;
        this.url = url;
        this.interno = interno;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
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

    
    
    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Boolean getInterno() {
        return interno;
    }

    public void setInterno(Boolean interno) {
        this.interno = interno;
    }
    
    
}
