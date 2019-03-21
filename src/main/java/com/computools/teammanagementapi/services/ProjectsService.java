package com.computools.teammanagementapi.services;

import com.computools.teammanagementapi.models.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProjectsService {
    Project create(Project project);
    Project read(Long id);
    Page<Project> readAll(Pageable pageable);
    void update(Project project, Long id);
    void delete(Long id);
}
