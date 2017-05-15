import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fighterFilter'
})
export class FighterFilterPipe implements PipeTransform {

  transform(fighters: any, term: any): any {

    if (term === undefined) {
      return fighters;
    }

    return fighters.filter(function (fighter) {
      return (fighter.first_name + ' ' + fighter.last_name).toLowerCase().includes(term.toLowerCase());
    });
  }
}
