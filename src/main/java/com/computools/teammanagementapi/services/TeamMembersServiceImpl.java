package com.computools.teammanagementapi.services;

import com.computools.teammanagementapi.exceptions.EntityNotFoundException;
import com.computools.teammanagementapi.models.TeamMember;
import com.computools.teammanagementapi.repositories.TeamMembersRepository;
import com.computools.teammanagementapi.utils.TeamMemberSpecificationBuilder;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.TimeZone;

@Service
public class TeamMembersServiceImpl implements TeamMembersService {

    @Autowired
    private TeamMembersRepository teamMembersRepository;

    @Override
    public TeamMember create(TeamMember teamMember) {
        return teamMembersRepository.save(teamMember);
    }

    @Override
    public TeamMember read(Long id) {
        Optional<TeamMember> teamMember = teamMembersRepository.findById(id);
        if(!teamMember.isPresent()) {
            throw new EntityNotFoundException(id);
        }
        return teamMember.get();
    }

    @Override
    public Page<TeamMember> readAll(String firstName,
                                    String lastName,
                                    String skills,
                                    Long projectId,
                                    Boolean isOnHolidays,
                                    Boolean isWorking,
                                    Pageable pageable
    ) {
        TeamMemberSpecificationBuilder teamMemberSpecificationBuilder = new TeamMemberSpecificationBuilder(firstName, lastName, skills, projectId, isOnHolidays, isWorking);
        Specification teamMemberSpecifications = Specification.where(teamMemberSpecificationBuilder.isWorkingOnProject())
                                                                    .and(teamMemberSpecificationBuilder.hasSkills())
                                                                    .and(teamMemberSpecificationBuilder.isWorking())
                                                                    .and(teamMemberSpecificationBuilder.isOnHolidays())
                                                                    .and(teamMemberSpecificationBuilder.isNameMatched());

        return teamMembersRepository.findAll(teamMemberSpecifications, pageable);
    }

    @Override
    public void update(TeamMember teamMember, Long id) {
        Optional<TeamMember> existingTeamMember = teamMembersRepository.findById(id);
        if(!existingTeamMember.isPresent()) {
            throw new EntityNotFoundException(id);
        }
        teamMember.setId(id);
        teamMembersRepository.save(teamMember);
    }

    @Override
    public void delete(Long id) {
        try {
            teamMembersRepository.deleteById(id);
        } catch (Exception ex) {
            throw new EntityNotFoundException(id);
        }
    }
}
