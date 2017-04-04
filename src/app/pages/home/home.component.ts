import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { RESET } from './../../core/recipe.actions';
import { Recipe } from './../../core/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  recipeState: Observable<Recipe>;
  private recipeStateSubscription: Subscription;
  recipe: Recipe;

  constructor(private store: Store<Recipe>) {
    this.recipeState = store.select('recipe');
  }

  ngOnInit() {
    this.recipeStateSubscription = this.recipeState.subscribe((state) => {
      this.recipe = state;
    });
  }

  ngOnDestroy() {
    this.recipeStateSubscription.unsubscribe();
  }

  newRecipe() {
    this.store.dispatch({
      type: RESET
    });
  }
}
