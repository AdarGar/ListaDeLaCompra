import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../shopping-list/shopping-list.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() item : Item;
@Output() removeMe = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
removeThisItem(){
  this.removeMe.emit(this.item)
}
}