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


@Service
public class InstituicaoServices {
    
    @Autowired
    private InstituicaoRepository repository;
    
    public Optional<Instituicao> login(Usuario usuario) {
        if (!verificaSeExiste(usuario)) {
            throw new ResourceNotFoundException("Usuario não encontrado");
        }
        Optional<Instituicao> user = listarInstituicaoPorID(usuario);
        return user;
    }
    
    public Instituicao cadastrarInstituicao(Instituicao instituicao) {
        if (instituicao.getUsuario().getEmail().length() == 0 || instituicao.getUsuario().getSenha().length() == 0 || instituicao.getInstituicao().length() == 0) {
            throw new BadRequestException("Dados inválidos");
        }
        
        if (!instituicao.getUsuario().getEmail().endsWith("@gmail.com")) {
            throw new BadRequestException("email inválido");
        }
        
        if (verificaSeExiste(instituicao.getUsuario())) {
            throw new BadRequestException("Usuário já cadastrado");
        }
        
        if (verificaEmail(instituicao.getUsuario().getEmail())) {
            throw new BadRequestException("email já cadastrado");
        }
        return repository.save(instituicao);
    }

    public List<Instituicao> listarInstituicoes() {
        return repository.findAll();
    }
    
    public Optional<Instituicao> listarInstituicaoPorID(Usuario usuario) {
        return repository.findById(usuario);
    }
    
    public List<Instituicao> excluirInstituicao(Usuario usuario) {
        if (!verificaSeExiste(usuario)) {
            throw new BadRequestException("Usuário não existe");
        }
        repository.deleteById(usuario);
        return repository.findAll();
    }
    
    public List<Instituicao> excluirInstituicoes() {
        repository.deleteAll();
        return repository.findAll();
    }
    
    public boolean verificaSeExiste(Usuario usuario) {
        Optional<Instituicao> instituicao = listarInstituicaoPorID(usuario);
        return instituicao.isPresent();
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
    
}
