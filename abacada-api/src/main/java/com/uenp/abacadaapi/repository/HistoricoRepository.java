package com.uenp.abacadaapi.repository;

import com.uenp.abacadaapi.model.Historico;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface HistoricoRepository extends MongoRepository<Historico, String>{
    
}
