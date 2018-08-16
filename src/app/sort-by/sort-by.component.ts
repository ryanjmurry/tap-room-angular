import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent {
  @Output() abvSender = new EventEmitter();
  @Output() priceSender = new EventEmitter();
  @Output() beerNameSender = new EventEmitter();

  sortByAbv() {
    this.abvSender.emit()
  }

  sortByPrice() {
    this.priceSender.emit()
  }

  sortByBeerName() {
    this.beerNameSender.emit()
  }

  constructor() { }

}
