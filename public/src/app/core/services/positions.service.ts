import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  constructor(
    private api: ApiService
  ) { }

  getAll() {
    return this.api.get('/positions');
  }
}
