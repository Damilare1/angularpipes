import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatString'
})
export class FormatStringPipe implements PipeTransform {


  toSnakeCase(txt): string {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  }

  transform(text: string, ...args: unknown[]): string {
    console.log('format string is called');
    let itemArr = text.split('_');
    return itemArr.map((elem) => this.toSnakeCase(elem)).join('');
  }
  
}
