import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  monster1!: Monster;

  constructor(){
    this.monster1 = new Monster();
    this.monster1.name = "Pik";
    this.monster1.hp = 18;
    this.monster1.figureCaption = "N°002 Pik"
  }
}
