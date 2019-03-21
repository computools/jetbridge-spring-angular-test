import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  isoToDate(iso: string) {
    return new Date(iso);
  }

  dateToIso(date: Date) {
    return date.toISOString();
  }
}
