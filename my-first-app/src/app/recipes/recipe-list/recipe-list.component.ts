import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { RecipeService } from './../recipe.service';
import { RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // @Output() recipeWasSelected = new EventEmitter<RecipeModel>();

  recipes: RecipeModel[];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipeEL: RecipeModel) {
  //   this.recipeWasSelected.emit(recipeEL);
  // }

}
