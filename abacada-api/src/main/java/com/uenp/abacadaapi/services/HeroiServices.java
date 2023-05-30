package com.uenp.abacadaapi.services;

import com.uenp.abacadaapi.model.Heroi;
import com.uenp.abacadaapi.repository.HeroiRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HeroiServices {
    @Autowired
    private HeroiRepository repository;
    
    public List<Heroi> listarHerois() {
        return repository.findAll();
    }
    
    public Optional<Heroi> listarHeroiPorId(String id) {
        return repository.findById(id);
    }
    
    public Heroi addHeroi(Heroi heroi) {
        return repository.save(heroi);
    }
}
