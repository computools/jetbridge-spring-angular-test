import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import { delay } from 'rxjs/internal/operators';

import { Observable, of } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { User } from '../models/user';
import { PageableList } from '../models/list';
import { Skill } from '../models/skill';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private api: ApiService
  ) { }

  getPagination(page: number, skills?: Skill[], project?: Project, nameFilter?: string, isAvailable?: boolean) {
    const params: string[] = [`page=${page}`, `size=5`];

    if (skills && skills.length > 0) {
      params.push(`skill=${skills.map(t => t.title).join(', ')}`);
    }

    if (project !== undefined) {
      params.push(`project=${project.id}`);
    }

    if (nameFilter) {
      params.push('firstName=' + nameFilter);
      params.push('lastName=' + nameFilter);
    }

    if (isAvailable === true) {
      params.push('working=true');
    } else if (isAvailable === false) {
      params.push('holidays=true');
    }

    const url = '/team?' + params.join('&');

    return this.api.get(url).pipe(
      map((data: any) => {
        const res = new PageableList<User>(data);
        res.content = data.content.map(user => new User(user));
        return res;
      })
    );
  }

  get(id: number) {
    return this.api.get('/team/' + id)
      .pipe(
        map(item => new User(item))
      );
  }

  create(user: User) {
    return this.api.post('/team', user.serialize());
  }

  update(user: User) {
    // create a new user
    if (user.id === undefined) {
      return this.create(user);
    }

    return this.api.put('/team/'+user.id, user.serialize());
  }

  remove(user: User) {
    return this.api.delete('/team/' + user.id, {});
  }

  canAssign(user: User, project: Project) {
    return of(true).pipe(delay(1000));
  }
}

