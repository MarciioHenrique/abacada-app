package com.uenp.abacadaapi.repository;

import com.uenp.abacadaapi.model.Instituicao;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InstituicaoRepository extends MongoRepository<Instituicao, Long>{
    
}
