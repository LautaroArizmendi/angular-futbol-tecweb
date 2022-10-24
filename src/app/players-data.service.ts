import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './player';

const URL = "http://localhost:3000/players";
@Injectable({
  providedIn: 'root'
})
export class PlayersDataService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Player[]> {
    return this.http.get<Player[]>(URL)
  }


}
