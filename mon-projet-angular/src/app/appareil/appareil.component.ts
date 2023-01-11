import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss'],
})
export class AppareilComponent {
  @Input() appareilName!: string;
  @Input() appareilStatus!: string;

  getStatus() {
    return this.appareilStatus;
  }
  getColor() {
    if (this.appareilStatus === 'allume') {
      return 'green';
    } else if (this.appareilStatus === 'eteint') {
      return 'red';
    }
    return;
  }
}
