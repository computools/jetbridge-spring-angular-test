package com.computools.teammanagementapi.repositories;

import com.computools.teammanagementapi.models.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectsRepository extends JpaRepository<Project, Long> {

}
