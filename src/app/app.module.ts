import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './core/app-routing.module';
import { StoreModule } from '@ngrx/store';
import { recipeReducer } from './core/recipe.reducer';

import { AppComponent } from './core/app.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { RecipeNameComponent } from './pages/create/recipe-name/recipe-name.component';
import { RecipeImageComponent } from './pages/create/recipe-image/recipe-image.component';
import { RecipeIngredientsComponent } from './pages/create/recipe-ingredients/recipe-ingredients.component';
import { VegeterianComponent } from './pages/create/vegeterian/vegeterian.component';
import { RecipePreviewComponent } from './recipe-preview/recipe-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    RecipeNameComponent,
    RecipeImageComponent,
    RecipeIngredientsComponent,
    VegeterianComponent,
    RecipePreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore({ recipe: recipeReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
