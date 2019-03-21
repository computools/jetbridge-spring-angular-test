package com.computools.teammanagementapi.repositories;

import com.computools.teammanagementapi.models.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillsRepository extends JpaRepository<Skill, Long> {

}
