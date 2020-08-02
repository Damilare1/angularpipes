import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularpipe';
  string = 'unformatted_text';
  count = 0;
  numberToAdd = 2;
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  getCount(): number {
    return this.count;
  }

  add(x: number): void {
    this.count += x;
  }

  filterArray(arr: Array<number>, max = 1000): Array<number> {
    console.log('Array filter is called');
    return arr.filter((item) => item <= max);
  }

  toSnakeCase(txt): string {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  }

  formatString(text: string): string {
    console.log('format string is called');
    let itemArr = text.split('_');
    return itemArr.map((elem) => this.toSnakeCase(elem)).join('');
  }
}
