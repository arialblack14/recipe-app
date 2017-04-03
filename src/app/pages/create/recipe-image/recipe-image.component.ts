import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-image',
  templateUrl: './recipe-image.component.html',
  styleUrls: ['./recipe-image.component.css']
})
export class RecipeImageComponent {
  recipeImageInput: string;
  @Output() addImageEvent = new EventEmitter();

  constructor() { }

  addImage(image: string) {
    this.addImageEvent.emit(image);
  }

}
