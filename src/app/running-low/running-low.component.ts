import { Component, Input} from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-running-low',
  templateUrl: './running-low.component.html',
  styleUrls: ['./running-low.component.css']
})
export class RunningLowComponent {
  @Input() runningLowList: Keg[];

  constructor() { }

}
