package com.uenp.abacadaapi.services;

import com.uenp.abacadaapi.exception.BadRequestException;
import com.uenp.abacadaapi.model.Jogo;
import com.uenp.abacadaapi.repository.JogoRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

@Service
public class JogoServices {
    @Autowired
    private JogoRepository repository;
    
    @Autowired
    private MongoTemplate mongoTemplate;
    
    public List<Jogo> listarJogos() {
        return repository.findAll();
    }
    
    public List<Jogo> listarJogosRecomendados(String vogal, String estagio) {
        Query query = new Query();
        query.addCriteria(Criteria.where("vogal").is(vogal));
        query.addCriteria(Criteria.where("estagio").is(estagio));
        List<Jogo> alunos = mongoTemplate.find(query, Jogo.class);
        return alunos;
    }
    
    public Optional<Jogo> listarJogoPorId(String id) {
        return repository.findById(id);
    }
    
    public Jogo cadastrarJogo(Jogo jogo) {
        return repository.save(jogo);
    }
    
    public Optional<Jogo> excluirJogo(String id) {
        if (!repository.existsById(id)) {
            throw new BadRequestException("Registro não encontrado");
        }
        Optional<Jogo> jogoDeletado = repository.findById(id);
        repository.deleteById(id);
        return jogoDeletado;
    }
    
    
    
}
