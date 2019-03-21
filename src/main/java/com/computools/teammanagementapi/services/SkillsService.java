package com.computools.teammanagementapi.services;

import com.computools.teammanagementapi.models.Skill;

import java.util.List;

public interface SkillsService {
    Skill read(Long id);
    List<Skill> readAll();
}
