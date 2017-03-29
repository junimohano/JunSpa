import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'octagonGirlFilter'
})
export class OctagonGirlFilterPipe implements PipeTransform {

  transform(octagonGirls: any, term: any): any {

    if (term === undefined) return octagonGirls;

    return octagonGirls.filter(function (octagonGirl) {
      return (octagonGirl.first_name + ' ' + octagonGirl.last_name).toLowerCase().includes(term.toLowerCase());
    });
  }

}
