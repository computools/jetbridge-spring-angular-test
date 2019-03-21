package com.computools.teammanagementapi.models;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "projects")
@Data
@SequenceGenerator(name = "default_generator", sequenceName = "projects_id_seq", allocationSize = 1)
public class Project extends BaseEntity {

    @Column(name = "title")
    @NotNull
    private String title;

    @Column(name = "manager_id")
    private Long managerId;
}
