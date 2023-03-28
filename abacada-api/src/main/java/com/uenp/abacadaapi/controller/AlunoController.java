package com.uenp.abacadaapi.controller;

import com.uenp.abacadaapi.model.Aluno;
import com.uenp.abacadaapi.model.Instituicao;
import com.uenp.abacadaapi.model.Professor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.uenp.abacadaapi.repository.ProfessorRepository;
import java.util.List;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import com.uenp.abacadaapi.repository.AlunoRepository;

//metodos do caminho /aluno da api
@RestController
@RequestMapping("/aluno")
public class AlunoController {
    @Autowired
    private AlunoRepository alunoRepository;
    
    @Autowired
    private ProfessorRepository professorRepository;
    
    
    @Autowired
    private MongoTemplate mongoTemplate;
    
    @GetMapping
    public List<Aluno> listarAlunos(@RequestParam(value = "professor") String professor) {
        Query query = new Query();
        query.addCriteria(Criteria.where("professor.getNome()").is(professor));
        List<Aluno> alunos = mongoTemplate.find(query, Aluno.class);
        return alunos;
    }
    
    @PostMapping
    public String cadastrarAluno(@RequestBody Aluno aluno) {
        //melhorar
        if (aluno.getRegistro() == null || aluno.getNome().length() == 0 || aluno.getProfessor().getRegistro() == null || 
            aluno.getProfessor().getNome().length() == 0 || aluno.getProfessor().getInstituicao().getUsuario().getEmail().length() == 0 ||
            aluno.getProfessor().getInstituicao().getInstituicao().length() == 0 ||  aluno.getProfessor().getInstituicao().getUsuario().getSenha().length() == 0) {
            return "Por favor, digite dados válidos";
        }
        
        

        if (alunoRepository.existsById(aluno.getRegistro())) {
            return "Registro em uso";
        }
        else {
                    
            if (professorRepository.existsById(aluno.getProfessor().getRegistro())) {
                Query query = new Query();
                query.addCriteria(Criteria.where("getRegistro()").is(aluno.getProfessor().getRegistro()));
                Professor professor = mongoTemplate.findById(query, Professor.class);
                System.out.println(professor);

                if (!aluno.getProfessor().getNome().equals(professor.getNome())) {
                    return "Digite um professor válido";
                }

                query.addCriteria(Criteria.where("getEmail()").is(aluno.getProfessor().getInstituicao().getUsuario().getEmail()));
                Instituicao instituicao = mongoTemplate.findById(query, Instituicao.class);
                System.out.println(instituicao);

                if (!aluno.getProfessor().getInstituicao().getInstituicao().equals(instituicao.getInstituicao()) || !aluno.getProfessor().getInstituicao().getUsuario().getSenha().equals(instituicao.getUsuario().getSenha())) {
                    return "Digite um professor válido";
                }
            }
            System.out.println(" passou");
            alunoRepository.save(aluno);
            return "Aluno cadastrado com sucesso";
        }
    }
    
    @DeleteMapping
    public String excluirAluno(@RequestParam(value = "registro") Integer registro) {
        if(alunoRepository.existsById(registro)) {
            alunoRepository.deleteById(registro);
            return "Aluno excluído";
        }
        return "Aluno não encontrado";
    }
}
