import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { ADD_NAME, ADD_INGREDIENTS, ADD_IMAGE, TOGGLE_VEGETERIAN, COMPLETE, } from './../../core/recipe.actions';
import { Recipe } from './../../core/recipe.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {
  recipeState: Observable<Recipe>;
  private recipeStateSubscription: Subscription;
  recipe: Recipe;
  done = false;

  constructor(private store: Store<Recipe>) {
    this.recipeState = store.select('recipe');
  }

  ngOnInit() {
    this.recipeStateSubscription = this.recipeState.subscribe((state) => {
      this.recipe = state;
      this.done = !!this.recipe.name;
    });
  }

  ngOnDestroy() {
    this.recipeStateSubscription.unsubscribe();
  }

  addNameHandler(name: string) {
    this.store.dispatch({
      type: ADD_NAME,
      payload: name
    });
  }

  addIngredientsHandler(ingredients: string) {
    this.store.dispatch({
      type: ADD_INGREDIENTS,
      payload: ingredients
    });
  }

  addImageHandler(image: string) {
    this.store.dispatch({
      type: ADD_IMAGE,
      payload: image
    });
  }

  toggleVegeterianHandler() {
    this.store.dispatch({
      type: TOGGLE_VEGETERIAN
    });
  }

  submit() {
    this.store.dispatch({
      type: COMPLETE,
      payload: true
    });
  }
}
