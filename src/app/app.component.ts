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

}
