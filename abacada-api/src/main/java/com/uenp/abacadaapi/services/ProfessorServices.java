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
    
    public Professor listarProfessor(String registro) {
        if(repository.existsById(registro)) {
            Optional<Professor> professor = repository.findById(registro);
            return professor.get();
        }
        throw new BadRequestException("Registro não encontrado");
        
    } 
    
    public List<Professor> listarProfessores(String instituicao) {
        Query query = new Query();
        query.addCriteria(Criteria.where("instituicao.instituicao").is(instituicao));
        List<Professor> professores = mongoTemplate.find(query, Professor.class);
        return professores;
    }
        
    public Professor cadastrarProfessor(Professor professor) {
        System.out.println(professor.getRegistro());
        if (professor.getNome().length() == 0 ||
            professor.getEmail().length() == 0 || professor.getInstituicao().getInstituicao().length() == 0 ||
            professor.getInstituicao().getUsuario().getEmail().length() == 0 || professor.getInstituicao().getUsuario().getSenha().length() == 0) {
            throw new BadRequestException("Dados inválidos");
        }
        if (!verificaInstituicao(professor.getInstituicao())) {
            throw new ResourceNotFoundException("Instituição não encontrada");
        }
        return repository.save(professor);
    }
    
    public Optional<Professor> excluirProfessor(String registro) {
        if (!repository.existsById(registro)) {
            throw new BadRequestException("Registro não encontrado");
        }
        Optional<Professor> professorDeletado = repository.findById(registro);
        repository.deleteById(registro);
        return professorDeletado;
    }
    
    public boolean verificaInstituicao(Instituicao instituicao) {
        if (instituicaoServices.verificaSeExiste(instituicao.getId())) {
            Optional<Instituicao> i = instituicaoServices.listarInstituicaoPorID(instituicao.getId());
            if (i.get().getInstituicao().equals(instituicao.getInstituicao()) && i.get().getUsuario().getSenha().equals(instituicao.getUsuario().getSenha())) {
                return true;
            }
        }
        return false;
    }
}
