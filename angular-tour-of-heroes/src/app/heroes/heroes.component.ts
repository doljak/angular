import { Component, OnInit } from '@angular/core';
import { Hero } from './heroes.class';
//import { HEROES } from '../../mock-heroes'; 
import { HeroService } from './hero.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Hero[]
  selectedHero:Hero; 

  constructor(
    private heroesService:HeroService
    )
    {}

  ngOnInit() {
    this.getHeroes()
  }

  onSelect(hero:Hero){
    this.selectedHero = hero
  }

  getHeroes(): void{
    this.heroesService.getHeroes()
      .subscribe(hero => this.heroes = hero)
  }

}
