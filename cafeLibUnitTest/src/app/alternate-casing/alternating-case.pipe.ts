import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alternatingCase'
})
export class AlternatingCasePipe implements PipeTransform {

  transform(value: string): string {
    if(value.length <= 0){
      return ""
    }

    let chars = value.split("")
    let newValue = ""

    chars.forEach((c,i) => {
      let char = (i%2 === 0) ? c.toLowerCase() : c.toUpperCase()
      newValue = newValue + char
    });

    return newValue;
  }

}
