package com.computools.teammanagementapi.exceptions;

import lombok.Getter;

import java.text.MessageFormat;

@Getter
public class EntityNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public EntityNotFoundException(Long id) {
        super(String.format("No matching entity with id %d was found in the database.", id));
    }
}
