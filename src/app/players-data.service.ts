import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './player';
import { environment } from 'src/environments/environment';

const URL = environment.api_url + '/players'
@Injectable({
  providedIn: 'root'
})
export class PlayersDataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  getAll(): Observable<Player[]> {
    return this.http.get<Player[]>(URL)
  }

  getOne(id : number): Observable<Player> {
    return this.http.get<Player>(URL + '/' + id)
  }

  create(player: Player): Observable<Player> {
    return this.http.post<Player>(URL, player, this.httpOptions)
  }

  update(player: Player): Observable<Player> {
    const playerURL = URL + '/' + player.id
    return this.http.put<Player>(playerURL, player);
  }

  delete(id: number): Observable<Player[]> {
    const playerURL = URL + '/' + id
    return this.http.delete<Player[]>(playerURL);
  }
}
