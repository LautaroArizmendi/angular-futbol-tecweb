import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { PlayersComponent } from './players-list/players-list.component';
import { TeamsComponent } from './teams-list/teams-list.component';

const routes: Routes = [
  { path: '',redirectTo: '/teams',pathMatch: 'full' },
  { path: 'teams', component: TeamsComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'players/new', component: CreatePlayerComponent },
  { path: 'players/:id/update', component: CreatePlayerComponent }
 ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
