import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../shopping-list/shopping-list.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() list: Item[];
  @Output() removeList = new EventEmitter();
  @Output() removeItem = new EventEmitter();
  total: number = 0;
  constructor() {}

  ngOnInit() {}
  sumar() {
    this.list.forEach((el) => (this.total += el.price * el.quantity));
    this.removeList.emit();
  }
  removeItemFather(item) {
    this.removeItem.emit(item);
  }
}
