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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    RecipeNameComponent
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
