import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: "runninglow",
  pure: false
})

export class RunningLowPipe implements PipeTransform {
  transform(input: Keg[]) {
    var output: Keg[] = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i].pintsRemaining <= 25 && input[i].pintsRemaining > 0) {
        output.push(input[i]);
      }
    }
    return output
  }
}