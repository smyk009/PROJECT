import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient(
      'Tomato', 1
    ),
    new Ingredient(
      'Apple', 20
    ),
    new Ingredient(
      'Mango', 5
    )
  ];
  constructor() { }

  ngOnInit() {
  }

}
