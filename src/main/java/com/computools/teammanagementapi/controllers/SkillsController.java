package com.computools.teammanagementapi.controllers;

import com.computools.teammanagementapi.models.Skill;
import com.computools.teammanagementapi.services.SkillsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/skills")
public class SkillsController {

    @Autowired
    private SkillsService skillsService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Skill>> getSkills() {
        List<Skill> skills = skillsService.readAll();
        return new ResponseEntity<List<Skill>>(skills, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}",
            method = RequestMethod.GET)
    public ResponseEntity<Skill> getSkill(@PathVariable(name = "id", required = true) Long id) {
        Skill skill = skillsService.read(id);
        return new ResponseEntity<>(skill, HttpStatus.OK);
    }
}
