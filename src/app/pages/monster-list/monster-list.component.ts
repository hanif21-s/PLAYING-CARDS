import { Component, computed, inject, model, signal } from '@angular/core';
import { MonsterService } from '../../services/monster/monster.service';
import { Monster } from '../../models/monster.model';
import { CommonModule } from '@angular/common';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-monster-list',
  standalone: true,
  imports: [CommonModule, PlayingCardComponent, SearchBarComponent],
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.css'
})
export class MonsterListComponent {
  monsterService = inject(MonsterService);
  
  monsters = signal<Monster[]>([]);
  /* count: number = 0;
  search = ''; */
  search = model('');

  filteredMonsters = computed(() => {
    return this.monsters().filter(monster => monster.name.includes(this.search()));
  })

  /* selectedMonsterIndex = signal(1);
  selectedMonster = computed(() => {
    return this.monsters[this.selectedMonsterIndex()];
  }) */

  constructor(){

    /* effect(() => {
      console.log(this.selectedMonster());
    }) */
    this.monsters.set(this.monsterService.getAll());
  }

  addMonster() {
    const genericMonster = new Monster();
    this.monsterService.add(genericMonster);
    this.monsters.set(this.monsterService.getAll());
  }

  /* increaseCount() {
    this.count++;
  }

  toggleMonster() {
    this.selectedMonsterIndex.set((this.selectedMonsterIndex() + 1) % this.monsters.length)
  } */
}
