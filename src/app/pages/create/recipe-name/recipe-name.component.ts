import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-name',
  templateUrl: './recipe-name.component.html',
  styleUrls: ['./recipe-name.component.css']
})
export class RecipeNameComponent {
  recipeNameInput = '';
  @Output() addNameEvent = new EventEmitter();

  constructor() { }

  addName(name: string) {
    this.addNameEvent.emit(name);
  }

}
