import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';
@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  

  heroes: Hero[] = [];



constructor(private heroService: HeroService) { }

  ngOnInit(): void {

    this.getHeroes()

  }
  getHeroes(): void {
  //this.heroes =  this.heroService.getHeroes()    
 this.heroService.getHeroes()
 .subscribe(heroes => this.heroes = heroes);
  }
 
}
