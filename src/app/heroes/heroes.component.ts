import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  

  heroes: Hero[] = [];
  selectedHero?: Hero



constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
   // console.log('donde esta ', this.selectedHero)
 //  console.log('heroes outside,', this.heroes);
   //console.log('selectedHero outside,', this.selectedHero);
this.getHeroes()

  }
  onSelect(hero: Hero): void {
    console.log('this.selectedHero before', this.selectedHero)
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
    console.log('this.selectedHero after', this.selectedHero)
  }
  getHeroes(): void {
                  
 this.heroService.getHeroes()
 .subscribe(heroes => this.heroes = heroes);
  }
}
