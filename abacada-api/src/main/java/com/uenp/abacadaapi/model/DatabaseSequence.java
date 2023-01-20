package com.uenp.abacadaapi.model;

import org.springframework.data.annotation.Id;

//modelo que faz a sequencia do ID, provavelmente não vai ser utilizada
public class DatabaseSequence {

    @Id
    private String id;

    private long seq;

    public DatabaseSequence() {}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public long getSeq() {
        return seq;
    }

    public void setSeq(long seq) {
        this.seq = seq;
    }
}
