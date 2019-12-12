import { RecipeModel} from './recipe.model';

export class RecipeService {
  private recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'This is a simple test',
    'https://www.seriouseats.com/2019/04/20190416-pork-shoulder-vicky-wasik-68.jpg'),
    new RecipeModel('A Test Recipe Awesomeness!', 'This is a simple test',
    'https://www.seriouseats.com/2019/04/20190416-pork-shoulder-vicky-wasik-68.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
