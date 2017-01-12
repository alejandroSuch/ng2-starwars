import { Pipe, PipeTransform } from '@angular/core';

const ONE_BILLION = 1000000000000;
const ONE_MILLION = 1000000;
const ONE_THOUSAND = 1000;

@Pipe({
  name: 'population'
})
export class PopulationPipe implements PipeTransform {

  transform(value: any, defaultValue?: any): any {
    let result = value;

    if(+value >= ONE_BILLION) {
      result = `${(value / ONE_BILLION).toLocaleString()}B`
    } else if(+value >= ONE_MILLION) {
      result = `${(value / ONE_MILLION).toLocaleString()}M`
    } else if(+value >= ONE_THOUSAND) {
      result = `${(value / ONE_THOUSAND).toLocaleString()}K`
    } else if(defaultValue) {
      result = defaultValue;
    }

    return result;
  }

}
