import { RecipeService } from './../../recipe.service';
import { RecipeModel } from './../../recipe.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: RecipeModel;

  // @Output() recipeDetail = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onRecipeClick() {
    // this.recipeDetail.emit();
    this.recipeService.recipeSelected.emit();
  }

}
