package com.uenp.abacadaapi.services;

import com.uenp.abacadaapi.exception.BadRequestException;
import com.uenp.abacadaapi.exception.ResourceNotFoundException;
import com.uenp.abacadaapi.model.Instituicao;
import com.uenp.abacadaapi.model.Usuario;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.uenp.abacadaapi.repository.InstituicaoRepository;
import java.util.regex.Pattern;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;


@Service
public class InstituicaoServices {
    
    @Autowired
    private InstituicaoRepository repository;
    
    //@Autowired
    //private ProfessorServices professorServices;
    
    @Autowired
    private MongoTemplate mongoTemplate;
    
    public Instituicao login(Usuario usuario) {
        Query query = new Query();
        query.addCriteria(Criteria.where("usuario").is(usuario));
        Instituicao instituicao = mongoTemplate.findOne(query, Instituicao.class);
        if (instituicao == null ){
            throw new ResourceNotFoundException("Usuario não encontrado");
        }
        return instituicao;
    }
    
    public Instituicao cadastrarInstituicao(Instituicao instituicao) {
        if (instituicao.getUsuario().getEmail().length() == 0 || instituicao.getUsuario().getSenha().length() == 0 || instituicao.getInstituicao().length() == 0) {
            throw new BadRequestException("Dados inválidos");
        }
        
        if (!instituicao.getUsuario().getEmail().endsWith("@gmail.com")) {
            throw new BadRequestException("email inválido");
        }
        
        if (verificaEmail(instituicao.getUsuario().getEmail())) {
            throw new BadRequestException("email já cadastrado");
        }
        
        //if(!verificaSenha(instituicao.getUsuario().getSenha())) {
        //    throw new BadRequestException("senha inválida");
        //}
        return repository.save(instituicao);
    }

    public List<Instituicao> listarInstituicoes() {
        return repository.findAll();
    }

    public boolean excluirInstituicao(String id) {
        if (!verificaSeExiste(id)) {
            return false;
        }
        //professorServices.excluirProfessoresInstituicao(id);
        repository.deleteById(id);
        return true;
    }

    public boolean verificaEmail(String email) {
        List<Instituicao> instituicoes = listarInstituicoes();
        for (Instituicao i : instituicoes) {
            if (i.getUsuario().getEmail().equals(email)) {
                return true;
            }
        }
        return false;
    }
    
    public boolean verificaSenha(String senha) {
        Pattern pattern = Pattern.compile("^(?=.*[a-zA-Z])(?=.*\\d)$");
        if (senha.length() < 6) {
            return false;
        }
        else if (!pattern.matcher(senha).matches()) {
            return false;
        }
        else {
            return true;
        }
    }

    public boolean verificaSeExiste(String id) {
        Optional<Instituicao> instituicao = repository.findById(id);
        if (instituicao.isPresent()) {
            return true;
        }
        return false;
    }

    Optional<Instituicao> listarInstituicaoPorID(String id) {
        return repository.findById(id);
    }
    
}
