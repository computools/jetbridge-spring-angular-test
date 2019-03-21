package com.computools.teammanagementapi.models;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "skills")
@Data
@SequenceGenerator(name = "default_generator", sequenceName = "skills_id_seq", allocationSize = 1)
public class Skill extends BaseEntity {

    @Column(name = "title")
    @NotNull
    private String title;
}
