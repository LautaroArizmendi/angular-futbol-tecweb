import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamsDataService } from '../teams-data.service';

@Component({
  selector: 'teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsComponent implements OnInit {

  teams : Team[]= [];

  constructor(private teamsDataService: TeamsDataService) { }

  ngOnInit(): void {
    this.teamsDataService.getAll().subscribe( (teams: Team[]) => this.teams = teams)
  }

}
