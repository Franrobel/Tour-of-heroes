import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  

  heroes: Hero[] = [];
  selectedHero?: Hero



constructor(private heroService: HeroService) { }

  ngOnInit(): void {
   // console.log('donde esta ', this.selectedHero)
 //  console.log('heroes outside,', this.heroes);
   //console.log('selectedHero outside,', this.selectedHero);
this.getHeroes()

  }
  getHeroes(): void {
                  
 this.heroService.getHeroes()
 .subscribe(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    console.log('this.selectedHero before', this.selectedHero)
    this.selectedHero = hero;
    console.log('this.selectedHero after', this.selectedHero)
  }
}
