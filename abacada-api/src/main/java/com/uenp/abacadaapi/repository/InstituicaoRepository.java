package com.uenp.abacadaapi.repository;

import com.uenp.abacadaapi.model.Instituicao;
import com.uenp.abacadaapi.model.Usuario;
import org.springframework.data.mongodb.repository.MongoRepository;

//faz a conexão com o repositorio do MongoDB para as instituicoes
public interface InstituicaoRepository extends MongoRepository<Instituicao, Usuario>{

}
