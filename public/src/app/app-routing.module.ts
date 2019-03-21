import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users/users.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'user/:id',
    component: UserComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
