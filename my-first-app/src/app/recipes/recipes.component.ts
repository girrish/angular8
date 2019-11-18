import { RecipeModel } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {

  selectedRecipeE: RecipeModel;

  constructor() { }

  ngOnInit() {
  }

  selectedRecipe(recipe: RecipeModel) {
    this.selectedRecipeE = recipe;
  }

}
