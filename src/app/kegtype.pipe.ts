import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: "kegtype",
  pure: false
})

export class KegTypePipe implements PipeTransform {
  transform(input: Keg[], type) {
    var output: Keg[] = [];
    if (type === "allKegs") {
      for (let i = 0; i < input.length; i++) {
        output.push(input[i]);
      }
      return output;
    } else if (type === "cheapKegs") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].price < 4) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      for (let i = 0; i < input.length; i++) {
        if (input[i].abv > 6) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}