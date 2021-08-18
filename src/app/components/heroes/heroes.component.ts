import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/data/mock-heroes.ts';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'WindStorm'

  }

  // heroes = HEROES;

  heroes: Hero[] =  [];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {

    this.getHeroes();
  }

  selectedHero? : Hero;
  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

  getHeroes() : void {

    // this.heroes = this.heroService.getHeroes();

    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)

  }

}
