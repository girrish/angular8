import { Component, OnInit, Input } from '@angular/core';

import { RecipeModel } from './../recipe.model';
import { IngredientModel } from './../../shared/ingredient.model';
import { RecipeService } from './../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeToShow: RecipeModel;
  // constructor(private shoppingListService: ShoppingListService) { }
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    // tslint:disable-next-line: max-line-length
    // this.shoppingListService.addIngredient(new IngredientModel(this.recipeToShow.ingredients[0].name, this.recipeToShow.ingredients[0].amount));
    this.recipeService.addIngredientToShoppingList(this.recipeToShow.ingredients);
  }

}
