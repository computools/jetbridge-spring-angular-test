package com.computools.teammanagementapi.controllers;

import com.computools.teammanagementapi.models.Position;
import com.computools.teammanagementapi.services.PositionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/positions")
public class PositionsController {

    @Autowired
    private PositionsService positionsService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Page<Position>> getPosition(@PageableDefault(sort = {"id"}, direction = Sort.Direction.ASC) Pageable pageable) {
        Page<Position> positions = positionsService.readAll(pageable);
        return new ResponseEntity<>(positions, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}",
            method = RequestMethod.GET)
    public ResponseEntity<Position> getPosition(@PathVariable(name = "id", required = true) Long id) {
        Position position = positionsService.read(id);
        return new ResponseEntity<>(position, HttpStatus.OK);
    }
}
