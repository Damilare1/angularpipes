import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(arr: Array<number>, max?: number): Array<number> {
    console.log('Array filter is called');
    if(!max){
      return arr;
    }
    return arr.filter((item) => item <= max);
  }
}
