
package com.uenp.abacadaapi.repository;

import com.uenp.abacadaapi.model.Aluno;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AlunoRepository extends MongoRepository<Aluno, Long>{
    
}