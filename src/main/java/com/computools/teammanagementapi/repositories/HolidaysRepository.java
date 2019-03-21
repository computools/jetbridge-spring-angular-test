package com.computools.teammanagementapi.repositories;

import com.computools.teammanagementapi.models.Holiday;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HolidaysRepository extends JpaRepository<Holiday, Long> {

}
