import { Component, OnInit } from '@angular/core';
import { Hero } from './heroes.class';
import { HeroService } from './hero.service'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Hero[];
  selectedHero:Hero; 

  constructor(
    private heroesService:HeroService
    )
    {}

  ngOnInit() {
    this.getHeroes()
  }

  onSelect(hero:Hero): void{
    this.selectedHero = hero
  }

  getHeroes(): void{
    this.heroesService.getHeroes()
      .subscribe(hero => this.heroes = hero)
  }

  add(name:string): void {
    name = name.trim()
    if(!name){return}
    this.heroesService.addHero({ name } as Hero)
      .subscribe(hero => this.heroes.push(hero))
  }

  delete(hero:Hero):void{
    this.heroes = this.heroes.filter(h => hero !== h )
    this.heroesService.deleteHero(hero).subscribe()
  }
}
