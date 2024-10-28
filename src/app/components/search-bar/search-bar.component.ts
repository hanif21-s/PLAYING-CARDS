import { Component, EventEmitter, input, Input, model, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  //@Input() search = 'Initial';
  search = model<string>('Initial');

  //@Output() searchChange = new EventEmitter<string>();
  //searchChange = output<string>();

  //@Output('submit') searchButtonClicked = new EventEmitter();
  searchButtonClicked = output({alias: 'submit'});

  searchClick() {
    //console.log('Click');
    this.searchButtonClicked.emit();
  }

  /* updateSearch(value: string){
    this.search.set(value);
  } */
}
