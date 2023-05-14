package com.uenp.abacadaapi.repository;

import com.uenp.abacadaapi.model.Professor;
import org.springframework.data.mongodb.repository.MongoRepository;

//faz a conexão com o repositorio do MongoDB para os professores
public interface ProfessorRepository extends MongoRepository<Professor, String>{
    
}
