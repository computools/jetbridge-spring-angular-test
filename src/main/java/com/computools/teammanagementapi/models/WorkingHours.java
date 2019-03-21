package com.computools.teammanagementapi.models;

import com.computools.teammanagementapi.utils.DateSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.sql.Time;

@Entity
@Table(name = "working_hours")
@Data
@SequenceGenerator(name = "default_generator", sequenceName = "working_hours_id_seq", allocationSize = 1)
public class WorkingHours extends BaseEntity {

    @Column(name = "start_time")
    @NotNull
    @JsonSerialize(using = DateSerializer.class)
    private Time startTime;

    @Column(name = "end_time")
    @NotNull
    @JsonSerialize(using = DateSerializer.class)
    private Time endTime;
}
