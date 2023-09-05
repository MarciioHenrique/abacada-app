package com.uenp.abacadaapi.services;

import com.uenp.abacadaapi.model.Favorito;
import com.uenp.abacadaapi.repository.FavoritoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

@Service
public class FavoritoServices {
    @Autowired
    private FavoritoRepository repository;
    
    @Autowired
    private MongoTemplate mongoTemplate;
    
    public List<Favorito> listarFavoritos(String registroAluno) {
        Query query = new Query();
        query.addCriteria(Criteria.where("aluno.registro").is(registroAluno));
        List<Favorito> favoritos = mongoTemplate.find(query, Favorito.class);
        return favoritos;
    }
    
    public Favorito addFavorito(Favorito favorito) {
        return repository.insert(favorito);
    }
    
    public boolean excluirFavorito(String id) {
        if (!repository.existsById(id)) {
            return false;
        }
        repository.deleteById(id);
        return true;
    }
    
    public void excluirFavoritosAluno(String id) {
        Query query = new Query();
        query.addCriteria(Criteria.where("aluno.registro").is(id));
        List<Favorito> favoritos = mongoTemplate.find(query, Favorito.class);
        for (int i = 0; i < favoritos.size(); i++) {
            excluirFavorito(favoritos.get(i).getId());
        }
    }
    
}
