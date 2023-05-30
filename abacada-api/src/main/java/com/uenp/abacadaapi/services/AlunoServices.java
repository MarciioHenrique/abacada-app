package com.uenp.abacadaapi.services;

import com.uenp.abacadaapi.exception.BadRequestException;
import com.uenp.abacadaapi.model.Aluno;
import com.uenp.abacadaapi.model.Instituicao;
import com.uenp.abacadaapi.model.Professor;
import com.uenp.abacadaapi.repository.AlunoRepository;
import com.uenp.abacadaapi.repository.ProfessorRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

@Service
public class AlunoServices {
    @Autowired
    private AlunoRepository alunoRepository;
    
    @Autowired
    private ProfessorRepository professorRepository;
    
    @Autowired
    private MongoTemplate mongoTemplate;
    
    public List<Aluno> listarAlunos(String registroProfessor) {
        Query query = new Query();
        query.addCriteria(Criteria.where("professor.registro").is(registroProfessor));
        List<Aluno> alunos = mongoTemplate.find(query, Aluno.class);
        return alunos;
    }
    
    public Optional<Aluno> listarAlunoPorId(String id) {
        return alunoRepository.findById(id);
    }
    
    public Aluno cadastrarAluno(Aluno aluno) {
        if (aluno.getNome().length() == 0 || aluno.getHeroi() == null ||
            aluno.getNivel().length() == 0 || aluno.getProfessor().getRegistro() == null || 
            aluno.getProfessor().getNome().length() == 0 || aluno.getProfessor().getInstituicao().getUsuario().getEmail().length() == 0 ||
            aluno.getProfessor().getInstituicao().getInstituicao().length() == 0 ||  aluno.getProfessor().getInstituicao().getUsuario().getSenha().length() == 0) {
            throw new BadRequestException("Digite os dados corretamente");
        }
        
        if (!professorRepository.existsById(aluno.getProfessor().getRegistro())) {
            throw new BadRequestException("Registro do Professor não encontrado");       
        }
        Optional<Professor> professor = professorRepository.findById(aluno.getProfessor().getRegistro());
        if (!aluno.getProfessor().getNome().equals(professor.get().getNome()) ||
            !aluno.getProfessor().getEmail().equals(professor.get().getEmail()) ||
            !aluno.getProfessor().getInstituicao().getInstituicao().equals(professor.get().getInstituicao().getInstituicao()) ||
            !aluno.getProfessor().getInstituicao().getUsuario().getEmail().equals(professor.get().getInstituicao().getUsuario().getEmail()) ||
            !aluno.getProfessor().getInstituicao().getUsuario().getSenha().equals(professor.get().getInstituicao().getUsuario().getSenha())) {
            throw new BadRequestException("Dados do Professor incorretos"); 
        }
        alunoRepository.save(aluno);
        return aluno;
    }

    public Optional<Aluno> excluirAluno(String registro) {
        if(alunoRepository.existsById(registro)) {
            Optional<Aluno> alunoDeletado = alunoRepository.findById(registro);
            alunoRepository.deleteById(registro);
            return alunoDeletado;
        }
        throw new BadRequestException("Registro não encontrado");
    }
}
