package com.computools.teammanagementapi.controllers;

import com.computools.teammanagementapi.models.Project;
import com.computools.teammanagementapi.services.ProjectsService;
import com.computools.teammanagementapi.utils.ControllerHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/projects")
public class ProjectsController {

    @Autowired
    private ProjectsService projectsService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Page<Project>> getProjects(@PageableDefault(sort = {"id"}, direction = Sort.Direction.ASC) Pageable pageable) {
        Page<Project> projects = projectsService.readAll(pageable);
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}",
            method = RequestMethod.GET)
    public ResponseEntity<Project> getProject(@PathVariable(name = "id", required = true) Long id) {
        Project project = projectsService.read(id);
        return new ResponseEntity<>(project, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json")
    public ResponseEntity createProject(@RequestBody @Valid Project project) {
        return ControllerHelper.sendResponseEntityWithoutResponseBody(projectsService.create(project) != null, HttpStatus.CREATED, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(value = "/{id}",
            method = RequestMethod.PUT,
            consumes = "application/json")
    public ResponseEntity updateProject(@RequestBody @Valid Project project,
                                           @PathVariable (name = "id", required = true) Long id
    ) {
        projectsService.update(project, id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}",
            method = RequestMethod.DELETE)
    public ResponseEntity deleteProject(@PathVariable (name = "id", required = true) Long id) {
        projectsService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
