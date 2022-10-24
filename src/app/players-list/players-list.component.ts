import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayersDataService } from '../players-data.service';

@Component({
  selector: 'players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersComponent implements OnInit {

  players : Player[] = []; 

  constructor(private playersDataService: PlayersDataService) { }

  ngOnInit(): void {
    this.playersDataService.getAll().subscribe( players => this.players = players)
  }

}
