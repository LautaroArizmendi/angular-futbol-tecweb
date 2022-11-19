import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from './team';
import { environment } from 'src/environments/environment';

const URL = environment.api_url + '/teams'
@Injectable({
  providedIn: 'root'
})
export class TeamsDataService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Team[]> {
    return this.http.get<Team[]>(URL);
  }
  }
