import { Component, OnInit } from '@angular/core';

import { RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'This is a simple test',
    'https://www.seriouseats.com/2019/04/20190416-pork-shoulder-vicky-wasik-68.jpg'),
    new RecipeModel('A Test Recipe', 'This is a simple test',
    'https://www.seriouseats.com/2019/04/20190416-pork-shoulder-vicky-wasik-68.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
