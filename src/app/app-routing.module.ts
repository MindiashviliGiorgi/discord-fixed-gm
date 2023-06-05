import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscordComponent } from './discord/discord.component';

const routes: Routes = [
  {
    path : '',
    component : DiscordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
