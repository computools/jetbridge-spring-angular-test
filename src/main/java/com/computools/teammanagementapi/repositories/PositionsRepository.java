package com.computools.teammanagementapi.repositories;

import com.computools.teammanagementapi.models.Position;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PositionsRepository extends JpaRepository<Position, Long> {

}
