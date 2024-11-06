import { Component, computed, effect, model, signal } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  monsters!: Monster[];
  /* count: number = 0;
  search = ''; */
  search = model('');

  filteredMonsters = computed(() => {
    return this.monsters.filter(monster => monster.name.includes(this.search()));
  })

  selectedMonsterIndex = signal(1);
  selectedMonster = computed(() => {
    return this.monsters[this.selectedMonsterIndex()];
  })

  constructor(){

    /* effect(() => {
      console.log(this.selectedMonster());
    }) */
    
    this.monsters = [];

    const monster1 = new Monster();
    monster1.name = "Pik";
    monster1.hp = 18;
    monster1.figureCaption = "N°002 Pik";
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = "Coeur";
    monster2.image = "img/coeur.png";
    monster2.type = MonsterType.WATER;
    monster2.hp = 58;
    monster2.figureCaption = "N°003 Coeur";
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.name = "Trefle";
    monster3.image = "img/trefle.jpg";
    monster3.type = MonsterType.PLANT;
    monster3.hp = 58;
    monster3.figureCaption = "N°004 Trefle";
    this.monsters.push(monster3);

    const monster4 = new Monster();
    monster4.name = "Carreau";
    monster4.image = "img/carreau.jpg";
    monster4.type = MonsterType.FIRE;
    monster4.hp = 58;
    monster4.figureCaption = "N°003 Carreau";
    this.monsters.push(monster4);
  }

  /* increaseCount() {
    this.count++;
  }

  toggleMonster() {
    this.selectedMonsterIndex.set((this.selectedMonsterIndex() + 1) % this.monsters.length)
  } */
}
