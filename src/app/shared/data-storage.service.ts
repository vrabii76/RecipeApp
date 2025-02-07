import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    if (recipes.length > 0) {
      //put request override all the data stored in database
      this.http
        .put(
          'https://ng-recipe-book-5caed-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
          recipes
        )
        .subscribe(response => {
          console.log(response);
        });
    } else {
      console.error('No recipes available to store in database!');
    }
  }

  //get all recipes from database
  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://ng-recipe-book-5caed-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
