package com.uenp.abacadaapi.services;

import com.uenp.abacadaapi.model.Instituicao;
import com.uenp.abacadaapi.model.Professor;
import com.uenp.abacadaapi.repository.ProfessorRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfessorServices {
    
    @Autowired
    private ProfessorRepository repository;
    
    @Autowired
    private InstituicaoServices instituicaoServices;
    
    public List<Professor> listarProfessores() {
        return repository.findAll();
    }
        
    public Professor cadastrarProfessor(Professor professor) {
        return repository.save(professor);
    }
    
    public List<Professor> excluirProfessor(Integer registro) {
        repository.deleteById(registro);
        return repository.findAll();
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
