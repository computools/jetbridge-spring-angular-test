import { Component, OnInit } from '@angular/core';
import { PageableList } from 'src/app/core/models/list';
import { User } from 'src/app/core/models/user';
import { UsersService } from 'src/app/core/services/users.service';
import { Direction } from 'src/app/core/components/pagination/pagination.component';
import { Project } from 'src/app/core/models/project';
import { ProjectsService } from 'src/app/core/services/projects.service';
import { SkillsService } from 'src/app/core/services/skills.service';
import { Skill } from 'src/app/core/models/skill';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  page = 0;

  view: PageableList<User> = {
    hasNext: false,
    hasPrevious: false,
    content: [],
    page: 0,
    size: 0,
  };

  displayedColumns = ['id', 'firstName', 'lastName', 'skills', 'project', 'edit'];

  skills: Skill[] = [];
  projects: Project[] = [];

  nameFilter: string;
  skillFilter: Skill[];
  projectFilter: Project;
  locationFilter = 'any';

  constructor(
    private usersService: UsersService,
    private skillsService: SkillsService,
    private projectsService: ProjectsService
  ) {
  }

  ngOnInit() {
    this.getUsers();
    this.skillsService.getAll().subscribe(skills => this.skills = skills);
    this.projectsService.getAll().subscribe(projects => this.projects = projects);
  }

  getUsers() {
    const isAvailable = this.locationFilter === 'working' ? true :
      this.locationFilter === 'vacation' ? false : undefined;

    this.usersService.getPagination(this.page, this.skillFilter, this.projectFilter, this.nameFilter, isAvailable)
      .subscribe(data => {
        this.view = data;
        this.page = data.page;
      });
  }

  remove(user: User) {
    this.usersService.remove(user).subscribe(res => this.getUsers());
  }

  onPageUpdated(direction: Direction) {
    switch (direction) {
      case Direction.backward:
        this.page -= 1;
        break;
      case Direction.forward:
        this.page += 1;
        break;
    }

    this.getUsers();
  }
}
