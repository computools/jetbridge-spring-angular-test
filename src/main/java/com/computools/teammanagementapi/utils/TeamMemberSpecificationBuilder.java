package com.computools.teammanagementapi.utils;

import com.computools.teammanagementapi.models.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.persistence.criteria.Subquery;
import java.sql.Time;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.TimeZone;

@RequiredArgsConstructor
public class TeamMemberSpecificationBuilder {

    private final String firstName;
    private final String lastName;
    private final String skills;
    private final Long project;
    private final Boolean isOnHolidays;
    private final Boolean isWorking;

    public Specification<TeamMember> isNameMatched() {
        return (Specification<TeamMember>) (root, criteriaQuery, criteriaBuilder) -> {
            if(firstName == null && lastName == null) {
                return criteriaBuilder.isTrue(criteriaBuilder.literal(true));
            } else {
                List<Predicate> predicates = new ArrayList<>();
                if (firstName != null) {
                    predicates.add(criteriaBuilder.like(criteriaBuilder.lower(root.get(TeamMember_.firstName)), "%" + firstName.toLowerCase() + "%"));
                }
                if (lastName != null) {
                    predicates.add(criteriaBuilder.like(criteriaBuilder.lower(root.get(TeamMember_.lastName)), "%" + lastName.toLowerCase() + "%"));
                }
                return criteriaBuilder.or(predicates.toArray(new Predicate[predicates.size()]));
            }
        };
    }

    public Specification<TeamMember> hasSkills() {
        return (Specification<TeamMember>) (root, criteriaQuery, criteriaBuilder) -> {
            if(skills == null) {
                return criteriaBuilder.isTrue(criteriaBuilder.literal(true));
            } else {
                List<Predicate> predicates = new ArrayList<>();
                Arrays.stream(skills.split(",")).forEach((skill) -> {
                    predicates.add(criteriaBuilder.equal(criteriaBuilder.lower(root.join(TeamMember_.skills).get(Skill_.title)),
                                                            criteriaBuilder.literal(skill.trim().toLowerCase())));
                });
                criteriaQuery.distinct(true);
                return criteriaBuilder.or(predicates.toArray(new Predicate[predicates.size()]));
            }
        };
    }

    public Specification<TeamMember> isWorkingOnProject() {
        return (Specification<TeamMember>) (root, criteriaQuery, criteriaBuilder) -> {
            if(project == null) {
                return criteriaBuilder.isTrue(criteriaBuilder.literal(true));
            } else {
                return criteriaBuilder.equal(criteriaBuilder.literal(project), root.get(TeamMember_.currentProject).get(Project_.id));
            }
        };
    }

    public Specification<TeamMember> isOnHolidays() {
        return (Specification<TeamMember>) (root, criteriaQuery, criteriaBuilder) -> {
            if(isOnHolidays == null || !isOnHolidays) {
                return criteriaBuilder.isTrue(criteriaBuilder.literal(true));
            } else {
                if(isOnHolidays == null) {
                    return criteriaBuilder.isTrue(criteriaBuilder.literal(true));
                } else {
                    Subquery<Long> sub = criteriaQuery.subquery(Long.class);
                    Root<Holiday> subRoot = sub.from(Holiday.class);
                    sub.where(criteriaBuilder.and(criteriaBuilder.equal(root.get(TeamMember_.id), subRoot.get(Holiday_.teamMember).get(TeamMember_.id)),
                            criteriaBuilder.equal(criteriaBuilder.currentDate(), subRoot.get(Holiday_.holiday))));
                    sub.select(criteriaBuilder.count(subRoot.get(Holiday_.id)));
                    Predicate isOnHolidaysPredicate = criteriaBuilder.notEqual(sub.getSelection(), 0);

                    if(!isOnHolidays) {
                        isOnHolidaysPredicate = isOnHolidaysPredicate.not();
                    }

                    return isOnHolidaysPredicate;
                }
            }
        };
    }

    public Specification<TeamMember> isWorking() {
        return (Specification<TeamMember>) (root, criteriaQuery, criteriaBuilder) -> {
            if(isWorking == null) {
                return criteriaBuilder.isTrue(criteriaBuilder.literal(true));
            } else {
                Predicate isWorkingPredicate = criteriaBuilder.between(criteriaBuilder.currentTime(),
                        root.get(TeamMember_.workingHours).get(WorkingHours_.startTime).as(Time.class),
                        root.get(TeamMember_.workingHours).get(WorkingHours_.endTime).as(Time.class));

                if(!isWorking) {
                    isWorkingPredicate = criteriaBuilder.not(isWorkingPredicate);
                }
                return isWorkingPredicate;
            }
        };
    }
}