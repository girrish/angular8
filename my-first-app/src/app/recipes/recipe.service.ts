import { EventEmitter, Injectable } from '@angular/core';

import { RecipeModel} from './recipe.model';
import { IngredientModel } from '../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<RecipeModel>();

  private recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe',
      'This is a simple test',
      'https://www.seriouseats.com/2019/04/20190416-pork-shoulder-vicky-wasik-68.jpg',
      [ new IngredientModel('Bread', 2), new IngredientModel('Meat', 1)]
    ),
    new RecipeModel('A Test Recipe Awesomeness!',
      'This is a simple test',
      'https://www.seriouseats.com/2019/04/20190416-pork-shoulder-vicky-wasik-68.jpg',
      [ new IngredientModel('Bread Awesome', 3), new IngredientModel('Meat Awesome', 2)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
