package com.computools.teammanagementapi.services;

import com.computools.teammanagementapi.exceptions.EntityNotFoundException;
import com.computools.teammanagementapi.models.Position;
import com.computools.teammanagementapi.repositories.PositionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PositionsServiceImpl implements PositionsService {

    @Autowired
    private PositionsRepository positionsRepository;

    @Override
    public Position read(Long id) {
        Optional<Position> position = positionsRepository.findById(id);
        if(!position.isPresent()) {
            throw new EntityNotFoundException(id);
        }
        return position.get();
    }

    @Override
    public Page<Position> readAll(Pageable pageable) {
        return positionsRepository.findAll(pageable);
    }

}
