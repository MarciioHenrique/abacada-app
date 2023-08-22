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
    private AlunoServices alunoServices;
    
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
    
    public boolean excluirProfessor(String registro) {
        if (!repository.existsById(registro)) {
            return false;
        }
        Optional<Professor> professorDeletado = repository.findById(registro);
        alunoServices.excluirAlunosProfessor(registro);
        repository.deleteById(registro);
        return true;
    }
    
    public void excluirProfessoresInstituicao(String registroInstituicao) {
        Query query = new Query();
        query.addCriteria(Criteria.where("instituicao.registro").is(registroInstituicao));
        List<Professor> professores = mongoTemplate.find(query, Professor.class);
        for (int i = 0; i < professores.size(); i++) {
            excluirProfessor(professores.get(i).getRegistro());
        }
    }
    
    public boolean verificaInstituicao(Instituicao instituicao) {
        if (instituicaoServices.verificaSeExiste(instituicao.getId())) {
            Optional<Instituicao> i = instituicaoServices.listarInstituicaoPorID(instituicao.getId());
            if (i.get().getInstituicao().equals(instituicao.getInstituicao())) {
                System.out.println("IGUAL");
                return true;
            }
        }
        System.out.println("DIFERENTE");
        return false;
    }
}
