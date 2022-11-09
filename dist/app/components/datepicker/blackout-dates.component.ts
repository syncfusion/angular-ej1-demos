import { Component } from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './blackout-dates.component.html'
})
export class BlackoutDatesComponent {
  blackout: Object;
  year: number;
  month: number;
  today: any;
  constructor() {
    this.today = new Date();
    this.year = this.today.getFullYear();
    this.month = this.today.getMonth();
    this.blackout = [new Date(this.year,
        this.month, 4), new Date(this.year, this.month, 23),
        new Date(this.year, this.month, 14),
        new Date(this.year, this.month + 1, 15),
        new Date(this.year, this.month - 1, 22)
    ];
  }
}
