import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const date = new Date();
const offsetSymbol = date.getTimezoneOffset() > 0 ? '-' : '+'
const offset = 0 - date.getTimezoneOffset()/60;
const httpOptions = {
  headers: new HttpHeaders({
    'Timezone':  `GMT${offsetSymbol}${offset}:00`,
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseURL: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  get<T>(route: string) {
    return this.http.get<T>(this.baseURL + route, httpOptions);
  }

  post(route: string, body: any) {
    return this.http.post(this.baseURL + route, body, httpOptions);
  }

  put(route: string, body: any) {
    return this.http.put(this.baseURL + route, body, httpOptions);
  }

  delete(route: string, body: any) {
    return this.http.delete(this.baseURL + route, httpOptions);
  }
}
