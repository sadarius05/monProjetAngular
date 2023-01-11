import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  [x: string]: string;
  isAuth = false;

  appareilOne = 'Machine a laver';
  appareilTwo = 'Television';
  appareilThree = 'Ordinateur';

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  onAllumer() {
    console.log('Tout est allume !');
  }
}
