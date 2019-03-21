package com.computools.teammanagementapi.repositories;

import com.computools.teammanagementapi.models.WorkingHours;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkingHoursRepository extends JpaRepository<WorkingHours, Long> {

}
