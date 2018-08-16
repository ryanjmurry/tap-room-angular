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
  newKegForm = false;

  showNewKegForm() {
    this.newKegForm = true;
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
  
  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
    this.newKegForm = false;
  }

  sellPint(keg: Keg) {
    keg.decrementPintByOne();
  }

  sellGrowler(keg: Keg) {
    keg.decrementPintByTwo();
  }
  
  sellLargeGrowler(keg: Keg) {
    keg.decrementPintByFour();
  }
}
