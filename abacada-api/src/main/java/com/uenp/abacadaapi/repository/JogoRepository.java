package com.uenp.abacadaapi.repository;

import com.uenp.abacadaapi.model.Jogo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface JogoRepository extends MongoRepository<Jogo, String>{
    
}

