import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';
import { RecipeModel } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})

export class RecipesComponent implements OnInit {

  selectedRecipeE: RecipeModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: RecipeModel) => {
        this.selectedRecipeE = recipe;
      }
    );
  }

  selectedRecipe(recipe: RecipeModel) {
    this.selectedRecipeE = recipe;
  }

}
