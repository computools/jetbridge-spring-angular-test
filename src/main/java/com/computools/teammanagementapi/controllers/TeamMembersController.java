package com.computools.teammanagementapi.controllers;

import com.computools.teammanagementapi.models.TeamMember;
import com.computools.teammanagementapi.services.TeamMembersService;
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
@RequestMapping("/api/v1/team")
public class TeamMembersController {

    @Autowired
    private TeamMembersService teamMembersService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Page<TeamMember>> getTeamMembers(@RequestParam (name = "firstName", required = false) String firstName,
                                                           @RequestParam (name = "lastName", required = false) String lastName,
                                                           @RequestParam (name = "skill", required = false) String skills,
                                                           @RequestParam (name = "project", required = false) Long projectId,
                                                           @RequestParam (name = "holidays", required = false) Boolean isOnHolidays,
                                                           @RequestParam (name = "working", required = false) Boolean isWorking,
                                                           @PageableDefault(sort = {"id"}, direction = Sort.Direction.ASC) Pageable pageable
    ) {
        Page<TeamMember> team = teamMembersService.readAll(firstName, lastName, skills, projectId, isOnHolidays, isWorking, pageable);
        return new ResponseEntity<>(team, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}",
                    method = RequestMethod.GET)
    public ResponseEntity<TeamMember> getTeamMember(@PathVariable (name = "id", required = true) Long id) {
        TeamMember teamMember = teamMembersService.read(id);
        return new ResponseEntity<>(teamMember, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST,
                    consumes = "application/json")
    public ResponseEntity createTeamMember(@RequestBody @Valid TeamMember teamMember) {
        return sendResponseEntityWithoutResponseBody(teamMembersService.create(teamMember) != null, HttpStatus.CREATED, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(value = "/{id}",
                    method = RequestMethod.PUT,
                    consumes = "application/json")
    public ResponseEntity updateTeamMember(@RequestBody @Valid TeamMember teamMember,
                                           @PathVariable (name = "id", required = true) Long id
    ) {
        teamMembersService.update(teamMember, id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}",
                    method = RequestMethod.DELETE)
    public ResponseEntity deleteTeamMember(@PathVariable (name = "id", required = true) Long id) {
        teamMembersService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    private ResponseEntity sendResponseEntityWithoutResponseBody(boolean operationStatus,
                                                                 HttpStatus successStatus,
                                                                 HttpStatus failureStatus
    ) {
        if(operationStatus) {
            return new ResponseEntity(successStatus);
        } else {
            return new ResponseEntity(failureStatus);
        }
    }
}
