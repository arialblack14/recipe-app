import { Action } from '@ngrx/store';
import { Recipe, initialRecipe } from './recipe.model';
import { ADD_NAME, ADD_INGREDIENTS, ADD_IMAGE, TOGGLE_VEGETERIAN, COMPLETE, RESET } from './recipe.actions';

export function recipeReducer(state: Recipe = initialRecipe, action: Action) {
  switch (action.type) {
    case ADD_NAME:
      return Object.assign({}, state, {
        name: action.payload
      });
    case ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload
      };
    case ADD_IMAGE:
      return {
        ...state,
        image: action.payload
      };
    case ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload
      };
    case TOGGLE_VEGETERIAN:
      return {
        ...state,
        vegeterian: !state.vegeterian
      };
    case COMPLETE:
      return {
        ...state,
        complete: action.payload
      };
    case RESET:
      return {
        ...state, initialRecipe
      };
    default:
      return state;
  }
}
