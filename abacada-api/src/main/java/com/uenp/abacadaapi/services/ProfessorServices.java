package com.uenp.abacadaapi.services;

import com.uenp.abacadaapi.exception.BadRequestException;
import com.uenp.abacadaapi.exception.ResourceNotFoundException;
import com.uenp.abacadaapi.model.Instituicao;
import com.uenp.abacadaapi.model.Professor;
import com.uenp.abacadaapi.repository.ProfessorRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

@Service
public class ProfessorServices {
    @Autowired
    private ProfessorRepository repository;
    
    @Autowired
    private InstituicaoServices instituicaoServices;
    
    @Autowired
    private MongoTemplate mongoTemplate;
    
    public List<Professor> listarProfessores(String instituicao) {
        Query query = new Query();
        query.addCriteria(Criteria.where("instituicao.instituicao").is(instituicao));
        List<Professor> professores = mongoTemplate.find(query, Professor.class);
        return professores;
    }
        
    public Professor cadastrarProfessor(Professor professor) {
        if (professor.getRegistro() == null || professor.getNome().length() == 0 ||
            professor.getInstituicao().getInstituicao().length() == 0 ||
            professor.getInstituicao().getUsuario().getEmail().length() == 0 || professor.getInstituicao().getUsuario().getSenha().length() == 0) {
            throw new BadRequestException("Dados inválidos");
        }
        if (!verificaInstituicao(professor.getInstituicao())) {
            throw new ResourceNotFoundException("Instituição não encontrada");
        }
        if (verificaID(professor.getRegistro())) {
            throw new BadRequestException("Registro em uso");
        }
        return repository.save(professor);
    }
    
    public List<Professor> excluirProfessor(Integer registro) {
        if (!verificaID(registro)) {
            throw new BadRequestException("Registro não encontrado");
        }
        repository.deleteById(registro);
        return repository.findAll();
    }
    
    public boolean verificaID(int id) {
        if (repository.existsById(id)) {
            return true;
        }
        return false;
    }
    
    public boolean verificaInstituicao(Instituicao instituicao) {
        if (instituicaoServices.verificaSeExiste(instituicao.getUsuario())) {
            Optional<Instituicao> i = instituicaoServices.listarInstituicaoPorID(instituicao.getUsuario());
            if (i.get().getInstituicao().equals(instituicao.getInstituicao()) && i.get().getUsuario().getSenha().equals(instituicao.getUsuario().getSenha())) {
                return true;
            }
        }
        return false;
    }
}
