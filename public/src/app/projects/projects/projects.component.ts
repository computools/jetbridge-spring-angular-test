import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { ProjectsService } from 'src/app/core/services/projects.service';
import { PageableList } from 'src/app/core/models/list';
import { User } from 'src/app/core/models/user';
import { Direction } from 'src/app/core/components/pagination/pagination.component';
import { Project } from 'src/app/core/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  page = 0;

  view: PageableList<Project> = {
    hasNext: false,
    hasPrevious: false,
    content: [],
    page: 0,
    size: 10,
  };

  displayedColumns = ['id', 'name'];

  users: User[];

  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectsService.getPagination(this.page)
      .subscribe(data => {
        this.view = data;
        this.page = data.page;
      });
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

    this.getProjects();
  }
}
