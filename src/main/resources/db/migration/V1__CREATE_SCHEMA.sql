set time zone 'UTC';

drop table if exists positions cascade;
drop table if exists projects cascade;
drop table if exists working_hours cascade;
drop table if exists team_members cascade;
drop table if exists skills cascade;
drop table if exists team_member_skills cascade;
drop table if exists team_member_holidays cascade;

create table positions (
                    id bigserial,
                    title varchar(50) not null,
                    primary key (id));

create table projects (
                    id bigserial,
                    title varchar(50) not null,
                    manager_id bigint,
                    primary key (id));

create table working_hours (
                    id bigserial ,
                    start_time time with time zone not null,
                    end_time time with time zone not null,
                    primary key (id));

create table team_members (
                    id bigserial,
                    first_name varchar(50) not null,
                    last_name varchar(50) not null,
                    position_id bigint references positions(id),
                    project_id bigint references projects(id),
                    working_hours_id bigint references working_hours(id),
                    primary key (id));

alter table if exists projects add constraint project_manager_fk foreign key (manager_id) references team_members;

create table skills (
                    id bigserial,
                    title varchar(50) not null,
                    primary key (id));

create table team_member_skills (
                    id bigserial,
                    team_member_id bigserial references team_members(id),
                    skill_id bigserial references skills(id),
                    primary key (id));

create table team_member_holidays (
                    id bigserial,
                    team_member_id bigserial references team_members(id),
                    holiday date not null,
                    primary key (id));