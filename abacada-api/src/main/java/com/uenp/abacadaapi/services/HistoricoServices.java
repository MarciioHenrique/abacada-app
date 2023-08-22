
package com.uenp.abacadaapi.services;

import com.uenp.abacadaapi.exception.ResourceNotFoundException;
import com.uenp.abacadaapi.model.Historico;
import com.uenp.abacadaapi.repository.HistoricoRepository;
import java.util.List;
import java.util.Optional;
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
    
    public Historico alterarHistorico(String id, Historico historicoUpdate) {
        Optional<Historico> historico = repository.findById(id);
        if(historico.isPresent()) {
            Historico historicoAlterado = historico.get();
            historicoAlterado.setTempoMin(historicoUpdate.getTempoMin());
            historicoAlterado.setTempoSeg(historicoUpdate.getTempoSeg());
            historicoAlterado.setConcluido(historicoUpdate.getConcluido());
            return repository.save(historicoAlterado);
        }
        throw new ResourceNotFoundException("id não encontrado");
    }
    
    public boolean excluirHistorico(String id) {
        if (!repository.existsById(id)) {
            return false;
        }
        repository.deleteById(id);
        return true;
    }
    
    public void excluirHistoricoAluno(String id) {
        Query query = new Query();
        query.addCriteria(Criteria.where("aluno.registro").is(id));
        List<Historico> historicos = mongoTemplate.find(query, Historico.class);
        for (int i = 0; i < historicos.size(); i++) {
            excluirHistorico(historicos.get(i).getId());
        }
    }
}
