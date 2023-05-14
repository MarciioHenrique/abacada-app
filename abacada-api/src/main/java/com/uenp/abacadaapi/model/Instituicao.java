package com.uenp.abacadaapi.model;

import org.springframework.data.annotation.Id;

////modelo da Instituicao com todos os seus dados e metodos
public class Instituicao {
    @Id
    private String id;
    private String instituicao;
    private Usuario usuario;

    public Instituicao(String instituicao, Usuario usuario) {
        this.instituicao = instituicao;
        this.usuario = usuario;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getInstituicao() {
        return instituicao;
    }

    public void setInstituicao(String instituicao) {
        this.instituicao = instituicao;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
    

}
