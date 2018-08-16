import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';


@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input() kegList: Keg[];
  @Output() editKegSender = new EventEmitter();
  @Output() soldPintSender = new EventEmitter();
  @Output() soldGrowlerSender = new EventEmitter();
  @Output() soldLargeGrowlerSender = new EventEmitter();

  editButtonClicked(kegToEdit: Keg) {
    this.editKegSender.emit(kegToEdit);
  }

  sellPint(keg: Keg) {
    this.soldPintSender.emit(keg);
  }

  sellGrowler(keg: Keg) {
    this.soldGrowlerSender.emit(keg);
  }

  sellLargeGrowler(keg: Keg) {
    this.soldLargeGrowlerSender.emit(keg);
  }

  priceColor(keg) {
    if (keg.price > 5) {
      return "expensive";
    }
    else if (keg.price >= 3 && keg.price <= 5) {
      return "moderate";
    }
    else return "cheap";
  }

  constructor() { }
}
