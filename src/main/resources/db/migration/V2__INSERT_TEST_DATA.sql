insert into positions (title) values ('Software Developer');
insert into positions (title) values ('Project Manager');

insert into skills (title) values ('JS');
insert into skills (title) values ('Python');
insert into skills (title) values ('Java');
insert into skills (title) values ('SQL');
insert into skills (title) values ('Project Management');

insert into working_hours (start_time, end_time) values ('08:00:00 MSK', '17:00:00 MSK');
insert into working_hours (start_time, end_time) values ('08:00:00 GMT', '17:00:00 GMT');
insert into working_hours (start_time, end_time) values ('08:00:00 EET', '17:00:00 EET');
insert into working_hours (start_time, end_time) values ('09:00:00 MSK', '18:00:00 MSK');
insert into working_hours (start_time, end_time) values ('09:00:00 GMT', '18:00:00 GMT');
insert into working_hours (start_time, end_time) values ('09:00:00 EET', '18:00:00 EET');

insert into projects (title) values ('Project 1');
insert into projects (title) values ('Project 2');

insert into team_members (first_name, last_name, position_id, project_id, working_hours_id) values ('First', 'Manager', 2, 1, 1);
insert into team_member_skills (team_member_id, skill_id) values (1, 5);
insert into team_members (first_name, last_name, position_id, project_id, working_hours_id) values ('Second', 'Manager', 2, 2, 2);
insert into team_member_skills (team_member_id, skill_id) values (2, 5);
insert into team_members (first_name, last_name, position_id, project_id, working_hours_id) values ('First', 'Developer', 1, 1, 3);
insert into team_member_skills (team_member_id, skill_id) values (3, 1);
insert into team_member_skills (team_member_id, skill_id) values (3, 4);
insert into team_members (first_name, last_name, position_id, project_id, working_hours_id) values ('Second', 'Developer', 1, 2, 4);
insert into team_member_skills (team_member_id, skill_id) values (4, 2);
insert into team_member_skills (team_member_id, skill_id) values (4, 4);
insert into team_members (first_name, last_name, position_id, project_id, working_hours_id) values ('Third', 'Developer', 1, 1, 5);
insert into team_member_skills (team_member_id, skill_id) values (5, 1);
insert into team_member_skills (team_member_id, skill_id) values (5, 3);
insert into team_members (first_name, last_name, position_id, project_id, working_hours_id) values ('Fourth', 'Developer', 1, 2, 6);
insert into team_member_skills (team_member_id, skill_id) values (6, 2);

insert into team_member_holidays (team_member_id, holiday) values (1, '2019-03-21');
insert into team_member_holidays (team_member_id, holiday) values (3, '2019-03-21');
insert into team_member_holidays (team_member_id, holiday) values (1, '2019-03-22');
insert into team_member_holidays (team_member_id, holiday) values (3, '2019-03-22');
insert into team_member_holidays (team_member_id, holiday) values (1, '2019-03-23');
insert into team_member_holidays (team_member_id, holiday) values (3, '2019-03-23');
insert into team_member_holidays (team_member_id, holiday) values (1, '2019-03-24');
insert into team_member_holidays (team_member_id, holiday) values (3, '2019-03-24');
insert into team_member_holidays (team_member_id, holiday) values (1, '2019-03-25');
insert into team_member_holidays (team_member_id, holiday) values (3, '2019-03-25');
insert into team_member_holidays (team_member_id, holiday) values (1, '2019-03-26');
insert into team_member_holidays (team_member_id, holiday) values (3, '2019-03-26');
insert into team_member_holidays (team_member_id, holiday) values (1, '2019-03-27');
insert into team_member_holidays (team_member_id, holiday) values (3, '2019-03-27');

update projects set manager_id = 1 where id = 1;
update projects set manager_id = 2 where id = 2;