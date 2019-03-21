import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Project } from '../models/project';
import { of } from 'rxjs';
import { ProjectDetails } from '../models/project-details.';
import { PageableList } from '../models/list';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private api: ApiService
  ) { }

  getAll() {
    return this.getPagination(0, 100000).pipe(
      map(data => data.content)
    );
  }

  getPagination(page: number, size: number = 10) {
    const params: string[] = [`page=${page}`, `size=${size}`];

    const url = '/projects?' + params.join('&');

    return this.api.get(url).pipe(
      map((data: any) => {
        return new PageableList<Project>(data);
      })
    );
  }
}
