import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from './team';

const URL = "http://localhost:3000/teams";
@Injectable({
  providedIn: 'root'
})
export class TeamsDataService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Team[]> {
    return this.http.get<Team[]>(URL)
  }
  }
