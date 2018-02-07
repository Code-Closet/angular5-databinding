import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  gameIncremented(event: number) {
    console.log('Increment : ' + event);
    if (event % 2 > 0) {
      this.oddNumbers.push(event);
    }else {
      this.evenNumbers.push(event);
    }
  }
}
