import { Component } from '@angular/core';
import { Keg } from './models/keg.model';
import { KEGS } from './models/mock-kegs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';

  masterKegList: Keg[] = KEGS;
  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
}
