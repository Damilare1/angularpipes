import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memoize'
})
export class MemoizePipe implements PipeTransform {

  transform(func: Function, arr: Array<number>): number {
    let sum:number = func(arr);
    return sum;
  }

}
