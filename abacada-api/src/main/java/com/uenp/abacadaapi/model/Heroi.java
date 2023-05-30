package com.uenp.abacadaapi.model;

import org.springframework.data.annotation.Id;

public class Heroi {
    @Id
    private String id;
    private String nome;
    private String icone;
    private String banner;

    public Heroi(String id, String nome, String icone, String banner) {
        this.id = id;
        this.nome = nome;
        this.icone = icone;
        this.banner = banner;
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

    public String getIcone() {
        return icone;
    }

    public void setIcone(String icone) {
        this.icone = icone;
    }

    public String getBanner() {
        return banner;
    }

    public void setBanner(String banner) {
        this.banner = banner;
    }
}
