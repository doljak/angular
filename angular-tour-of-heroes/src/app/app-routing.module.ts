import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router'

import { HeroesComponent } from './heroes/heroes.component'

export const routes:Routes = [
  { path: 'heroes', component:HeroesComponent}
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
