import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players-list/players-list.component';
import { TeamsComponent } from './teams-list/teams-list.component';

const routes: Routes = [
  {path: '',redirectTo: '/teams',pathMatch: 'full' },
  { path: 'teams', component: TeamsComponent },
  { path: 'players', component: PlayersComponent },
 ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
