import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.css']
})
export class RecipeIngredientsComponent {
  recipeIngredientsInput: string;
  @Output() addIngredientsEvent = new EventEmitter();

  constructor() { }

  addIngredients(ingredients: string) {
    this.addIngredientsEvent.emit(ingredients);
  }

}
