import { Component, computed, input, Input, InputSignal, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterTypeProperties } from '../../utils/monster.utils';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {
  

  /* @Input({
    alias: "my-monster",
    transform: (value: Monster) => {
      value.hp = value.hp / 2;
      return value;
    }
  }) */ 
  /* monster: InputSignal<Monster> = input(new Monster(), {
    alias: 'my-monster',
    transform: (value: Monster) => {
      value.hp = value.hp / 2;
      return value;
    }
  }) */

    //@Input() monster = new Monster();

    monster = input(new Monster());
    //monsterTypeIcon: string = "img/electric.png";
    //backgroundColor: string = "rgb(255, 2, 2)";

    monsterTypeIcon = computed(() => {
      return MonsterTypeProperties[this.monster().type].imageUrl;
    })

    backgroundColor = computed(() => {
      return MonsterTypeProperties[this.monster().type].color;
    })

    /* constructor() {
      this.monsterTypeIcon = MonsterTypeProperties[this.monster.type].imageUrl;
      this.backgroundColor = MonsterTypeProperties[this.monster.type].color;
    } */

      /* ngOnChanges(changes: SimpleChanges): void {
        if (changes['monster']) {
          if (changes['monster'].previousValue?.type != changes['monster'].currentValue.type){
            this.monsterTypeIcon = MonsterTypeProperties[this.monster().type].imageUrl;
            this.backgroundColor = MonsterTypeProperties[this.monster().type].color;
          }
        }
      } */

  /* ngOnInit(): void {
    this.monsterTypeIcon = MonsterTypeProperties[this.monster.type].imageUrl;
    this.backgroundColor = MonsterTypeProperties[this.monster.type].color;
  } */
}
