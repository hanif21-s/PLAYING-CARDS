import { Component, computed, effect, signal } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { MonsterType } from './utils/monster.utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  monsters!: Monster[];
  count: number = 0;
  search = '';

  selectedMonsterIndex = signal(1);
  selectedMonster = computed(() => {
    return this.monsters[this.selectedMonsterIndex()];
  })

  constructor(){

    effect(() => {
      console.log(this.selectedMonster());
    })
    
    this.monsters = [];

    const monster1 = new Monster();
    monster1.name = "Pik";
    monster1.hp = 18;
    monster1.figureCaption = "N°002 Pik";
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = "Car";
    monster2.image = "img/coeur.png";
    monster1.type = MonsterType.WATER;
    monster2.hp = 58;
    monster2.figureCaption = "N°003 Car";
    this.monsters.push(monster2);
  }

  increaseCount() {
    this.count++;
  }

  toggleMonster() {
    this.selectedMonsterIndex.set((this.selectedMonsterIndex() + 1) % this.monsters.length)
  }
}
