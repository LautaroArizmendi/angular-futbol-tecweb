import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player';
import { PlayersDataService } from '../players-data.service';

@Component({
  selector: 'players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss'],
})
export class PlayersComponent implements OnInit {
  players: Player[] = [];

  constructor(
    private playersDataService: PlayersDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.playersDataService
      .getAll()
      .subscribe((players) => (this.players = players));
  }

  new() {
    console.log(this.players);
    this.router.navigate(['/players/new']);
  }

  delete(id: number) {
    const pregunta = window.confirm('Borrar jugador?');
    if (!pregunta) return;

    this.playersDataService
      .delete(id)
      .subscribe({
        next: () =>
          (this.players = this.players.filter((player) => player.id !== id)),
        error: (e) => console.error(e),
      });
  }
  put(id : number){
    this.router.navigate(['/players/'+id+'/update'])
  }
  update(data: Player) {
    this.playersDataService
      .update(data)
      .subscribe(() => this.router.navigate(['/players']))
  }

}
