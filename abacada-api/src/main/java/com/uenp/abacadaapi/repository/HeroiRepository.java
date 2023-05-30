package com.uenp.abacadaapi.repository;

import com.uenp.abacadaapi.model.Heroi;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface HeroiRepository extends MongoRepository<Heroi, String>{
    
}
