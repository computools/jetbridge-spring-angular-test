package com.computools.teammanagementapi.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "team_members")
@Data
@SequenceGenerator(name = "default_generator", sequenceName = "team_members_id_seq", allocationSize = 1)
public class TeamMember extends BaseEntity {

    @Column(name = "first_name")
    @NotNull
    private String firstName;

    @Column(name = "last_name")
    @NotNull
    private String lastName;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "position_id")
    private Position position;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "project_id")
    private Project currentProject;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "working_hours_id")
    private WorkingHours workingHours;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "team_member_skills",
            joinColumns = { @JoinColumn(name = "team_member_id") },
            inverseJoinColumns = { @JoinColumn(name = "skill_id")}
    )
    private Set<Skill> skills = new HashSet<>();

    @OneToMany(mappedBy = "teamMember", fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Holiday> holidays = new HashSet<>();
}
