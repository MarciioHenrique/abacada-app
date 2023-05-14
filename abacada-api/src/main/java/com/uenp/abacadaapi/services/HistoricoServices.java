
package com.uenp.abacadaapi.services;

import com.uenp.abacadaapi.model.Historico;
import com.uenp.abacadaapi.repository.HistoricoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

@Service
public class HistoricoServices {
    @Autowired
    private HistoricoRepository repository;
    
    @Autowired
    private MongoTemplate mongoTemplate;
    
    public List<Historico> listarHistorico(String registroAluno) {
        Query query = new Query();
        query.addCriteria(Criteria.where("aluno.registro").is(registroAluno));
        List<Historico> historicoAluno = mongoTemplate.find(query, Historico.class);
        return historicoAluno;
    }
    
    public Historico addHistorico(Historico historico) {
        return repository.save(historico);
    }
}
