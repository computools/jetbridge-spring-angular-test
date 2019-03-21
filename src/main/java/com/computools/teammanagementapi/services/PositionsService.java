package com.computools.teammanagementapi.services;

import com.computools.teammanagementapi.models.Position;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PositionsService {
    Position read(Long id);
    Page<Position> readAll(Pageable pageable);
}
