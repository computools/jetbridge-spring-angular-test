package com.computools.teammanagementapi.services;

import com.computools.teammanagementapi.exceptions.EntityNotFoundException;
import com.computools.teammanagementapi.models.Project;
import com.computools.teammanagementapi.repositories.ProjectsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProjectsServiceImpl implements ProjectsService {

    @Autowired
    private ProjectsRepository projectsRepository;

    @Override
    public Project create(Project project) {
        return projectsRepository.save(project);
    }

    @Override
    public Project read(Long id) {
        Optional<Project> project = projectsRepository.findById(id);
        if(!project.isPresent()) {
            throw new EntityNotFoundException(id);
        }
        return project.get();
    }

    @Override
    public Page<Project> readAll(Pageable pageable) {
        return projectsRepository.findAll(pageable);
    }

    @Override
    public void update(Project project, Long id) {
        Optional<Project> existingTeamMember = projectsRepository.findById(id);
        if(!existingTeamMember.isPresent()) {
            throw new EntityNotFoundException(id);
        }
        project.setId(id);
        projectsRepository.save(project);
    }

    @Override
    public void delete(Long id) {
        try {
            projectsRepository.deleteById(id);
        } catch (Exception ex) {
            throw new EntityNotFoundException(id);
        }
    }
}
