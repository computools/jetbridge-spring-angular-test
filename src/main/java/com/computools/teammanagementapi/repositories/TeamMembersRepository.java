package com.computools.teammanagementapi.repositories;

import com.computools.teammanagementapi.models.TeamMember;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamMembersRepository extends JpaRepository<TeamMember, Long> {

    Page<TeamMember> findAll(Specification teamMemberSpecification, Pageable pageable);
}
