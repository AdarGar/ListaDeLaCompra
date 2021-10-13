import { Component, OnInit } from '@angular/core';
export type Item = {
  product: string;

  quantity: number;

  price: number;
};
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  list: Item[] = [];

  product: string = '';
  quantity: number = 0;
  price: number = 0;

  constructor() {}

  ngOnInit() {}
  addCart() {
    if (this.quantity > 0 && this.price > 0 && Number.isInteger(this.price)) {
      this.list.push({
        product: this.product,
        quantity: this.quantity,
        price: this.price,
      });
    } else {
      alert('Parametros incorrectos');
    }
  }
  clearList() {
    this.list = [];
  }

  removeItem(event) {
    this.list = this.list.filter((u) => u.product != event.product);
  }
}
