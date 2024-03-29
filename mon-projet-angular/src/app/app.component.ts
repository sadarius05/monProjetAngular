import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, observable, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  secondes!: number;
  counterSouscription!: Subscription;
  constructor() {}

  ngOnInit(): void {
    const counter$ = interval(1000);
    this.counterSouscription = counter$.subscribe((value) => {
      this.secondes = value;
    });
  }

  ngOnDestroy(): void {
    this.counterSouscription.unsubscribe();
  }
}
