import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'TestRecipe',
      'This is a test Recipe',
      // tslint:disable-next-line:max-line-length
      'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA'
    ),
    new Recipe(
      'TestRecipe1',
      'This is a test Recipe1',
      // tslint:disable-next-line:max-line-length
      'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA'
    ),
    new Recipe(
      'TestRecipe2',
      'This is a test Recipe2',
      // tslint:disable-next-line:max-line-length
      'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA'
    )
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
