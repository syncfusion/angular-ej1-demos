import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './special-dates.component.html',
  styleUrls: ['./common.component.css'], encapsulation: ViewEncapsulation.None,
})
export class SpecialDatesComponent {
  special: Object;
  year: number;
  today: any;
  month: number;
  specialClass: string;
  constructor() {
    this.specialClass = 'splClass';
    this.today = new Date();
    this.year = this.today.getFullYear();
    this.month = this.today.getMonth();
    this.special = [{ date: new Date(this.year, this.month, 8), tooltip: 'In Australia', iconClass: 'flags sprite-Australia' },
        { date: new Date(this.year, this.month, 21), tooltip: 'In France', iconClass: 'flags sprite-France' },
        { date: new Date(this.year, this.month, 17), tooltip: 'In USA', iconClass: 'flags sprite-USA' },
        { date: new Date(this.year, this.month + 1, 15), tooltip: 'In Germany', iconClass: 'flags sprite-Germany' },
        { date: new Date(this.year, this.month - 1, 22), tooltip: 'In India', iconClass: 'flags sprite-India' }
    ];
  }
}
