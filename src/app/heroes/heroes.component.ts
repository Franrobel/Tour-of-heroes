import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  

heroes = HEROES 
selectedHero?: Hero



constructor() { }

  ngOnInit(): void {
   // console.log('donde esta ', this.selectedHero)
   console.log('heroes outside,', this.heroes);
   console.log('selectedHero outside,', this.selectedHero);


  }
  
  onSelect(hero: Hero): void {
    console.log('this.selectedHero before', this.selectedHero)
    this.selectedHero = hero;
    console.log('this.selectedHero after', this.selectedHero)
  }
}
