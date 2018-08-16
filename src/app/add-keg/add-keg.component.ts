import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent {
  @Input() newKegForm: boolean;
  @Output() submittedKeg = new EventEmitter();

  submitForm(beerName: string, brewery: string, style: string, price: string, abv: string) {
    let newPrice = +parseFloat(price).toFixed(2);
    let newAbv = +parseFloat(abv).toFixed(2);
    let newKeg = new Keg(beerName, brewery, style, newPrice, newAbv);
    this.submittedKeg.emit(newKeg);
  }

  constructor() { }

}
