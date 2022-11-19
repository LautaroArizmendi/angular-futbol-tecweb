import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../player';
import { PlayersDataService } from '../players-data.service';
import { Team } from '../team';
import { TeamsDataService } from '../teams-data.service';

@Component({
  selector: 'create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss'],
})
export class CreatePlayerComponent implements OnInit {
  player: Player = {
    id: 0,
    name: '',
    nationality: '',
    goals: 0,
    age: 16,
    position: '',
    team: {
      id: 0,
      name: '',
      stadium: '',
      badges: '',
      year_fundation: 0,
    },
  };
  teams: Team[] = [];

  constructor(
    private playersDataService: PlayersDataService,
    private router: Router,
    private teamsDataService: TeamsDataService,
    private route: ActivatedRoute

  ) {}

  ngOnInit(): void {
    this.teamsDataService.getAll().subscribe((teams) => (this.teams = teams));
    this.route.params.subscribe(({ id }) => {
      if (!id) return;
      this.playersDataService.getOne(id).subscribe((player) => {
        this.player.id = player.id;
        this.player.name = player.name;
        this.player.goals = player.goals;
        this.player.age = player.age;
        this.player.position = player.position;
        this.player.nationality = player.nationality;
        this.player.team = player.team
      });
    });
  }

  createPlayer() {
    console.log(this.player);
    this.playersDataService
      .create(this.player)
      .subscribe((data) => this.router.navigate(['/players']));
  }
}
