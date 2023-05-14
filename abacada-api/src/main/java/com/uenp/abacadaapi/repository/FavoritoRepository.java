package com.uenp.abacadaapi.repository;

import com.uenp.abacadaapi.model.Favorito;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FavoritoRepository  extends MongoRepository<Favorito, String> {
    
}
