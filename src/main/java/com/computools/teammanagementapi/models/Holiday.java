package com.computools.teammanagementapi.models;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Date;

@Entity
@Table(name = "team_member_holidays")
@Data
@SequenceGenerator(name = "default_generator", sequenceName = "team_member_holidays_id_seq", allocationSize = 1)
public class Holiday extends BaseEntity {

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "team_member_id")
    private TeamMember teamMember;

    @Column(name = "holiday")
    @NotNull
    private Date holiday;
}
