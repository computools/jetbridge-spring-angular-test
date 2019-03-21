package com.computools.teammanagementapi.services;

import com.computools.teammanagementapi.models.TeamMember;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface TeamMembersService {
    TeamMember create(TeamMember teamMember);
    TeamMember read(Long id);
    Page<TeamMember> readAll(String firstName, String lastName, String skills, Long projectId, Boolean isOnHolidays, Boolean isWorking, Pageable pageable);
    void update(TeamMember teamMember, Long id);
    void delete(Long id);
}
