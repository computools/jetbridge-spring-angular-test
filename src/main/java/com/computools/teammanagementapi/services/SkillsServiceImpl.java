package com.computools.teammanagementapi.services;

import com.computools.teammanagementapi.exceptions.EntityNotFoundException;
import com.computools.teammanagementapi.models.Skill;
import com.computools.teammanagementapi.repositories.SkillsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SkillsServiceImpl implements SkillsService {

    @Autowired
    private SkillsRepository skillsRepository;

    @Override
    public Skill read(Long id) {
        Optional<Skill> skill = skillsRepository.findById(id);
        if(!skill.isPresent()) {
            throw new EntityNotFoundException(id);
        }
        return skill.get();
    }

    @Override
    public List<Skill> readAll() {
        return skillsRepository.findAll();
    }

}
