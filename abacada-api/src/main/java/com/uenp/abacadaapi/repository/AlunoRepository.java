package com.uenp.abacadaapi.repository;

import com.uenp.abacadaapi.model.Aluno;
import org.springframework.data.mongodb.repository.MongoRepository;

//faz a conexão com o repositorio do MongoDB para os alunos
public interface AlunoRepository extends MongoRepository<Aluno, String>{
    
}