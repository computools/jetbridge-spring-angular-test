import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/core/models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { SkillsService } from 'src/app/core/services/skills.service';
import { ProjectsService } from 'src/app/core/services/projects.service';
import { Skill } from 'src/app/core/models/skill';
import { Project } from 'src/app/core/models/project';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  header = '';
  user: User = new User({});
  skills: Skill[];
  projects: Project[];

  projectChanged = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private skillsService: SkillsService,
    private projectsService: ProjectsService,
  ) { }

  ngOnInit() {
    this.skillsService.getAll().subscribe(skills => this.skills = skills);
    this.projectsService.getAll().subscribe(projects => this.projects = projects);
    this.get();
  }

  get() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.header = 'User №' + id;
      this.usersService.get(+id)
        .subscribe(user => this.user = user);
    } else {
      this.header = 'New user';
    }
  }

  save() {
    return Promise.resolve()
      .then(() => {
        if (this.projectChanged) {
          return this.usersService.canAssign(this.user, this.user.currentProject)
            .toPromise()
            .then(res => {
              if (res === false) {
                throw new Error(`Can't assign the user to the project ${this.user.currentProject.title}`);
              }
            });
        }
      })
      .then(() => {
        this.usersService.update(this.user)
          .subscribe(() => {
            this.router.navigate(['/users']);
          });
      });
  }

  cancel() {
    this.router.navigate(['/users']);
  }

  compareObjs(a: any, b: any) {
    return a.id === b.id;
  }
}
