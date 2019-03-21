import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(
    private api: ApiService
  ) { }

  getAll() {
    return this.api.get<Skill[]>('/skills');
  }
}
