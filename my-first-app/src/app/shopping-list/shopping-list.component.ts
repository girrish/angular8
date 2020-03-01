import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from './shopping-list.service';
import { IngredientModel } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // ingredients: IngredientModel[] = [
  //   new IngredientModel('Apples', 5),
  //   new IngredientModel('Mangos', 10)
  // ];

  ingredients: IngredientModel[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
   this.ingredients = this.shoppingListService.getIngredients();
   this.shoppingListService.ingredientsChanged
        .subscribe(
            (ingredient: IngredientModel[]) => {
              this.ingredients = ingredient;
            }
        );
  }

  // onIngredientAdded(ingredient: IngredientModel) {
  //   this.ingredients.push(ingredient);
  // }

}
