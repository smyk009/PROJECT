import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') nameInputRef: ElementRef;
  @ViewChild('inputAmount') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const inpName = this.nameInputRef.nativeElement.value;
    const inpAmt = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(inpName, inpAmt);
    this.ingredientAdded.emit(newIngredient);
  }

}
