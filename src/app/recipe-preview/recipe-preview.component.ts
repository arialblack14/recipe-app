import { Component, OnChanges, Input } from '@angular/core';
import { Recipe } from './../core/recipe.model';

@Component({
  selector: 'app-recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.css']
})
export class RecipePreviewComponent implements OnChanges {
  @Input() recipe: Recipe;
  recipeName = '';
  recipeImg = '';
  recipeIngredients = '';
  recipeVegeterian = '';


  constructor() { }

  ngOnChanges() {
    this.recipeName = this.recipe.name;
    this.recipeImg = this.recipe.image;
    this.recipeIngredients = this.recipe.ingredients;
    this.recipeVegeterian = this.boolToText(this.recipe.vegeterian);
  }

  private boolToText(bool: boolean) {
    return bool ? 'Yes' : 'No';
  }
}
