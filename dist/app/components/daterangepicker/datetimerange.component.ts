import { Component } from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './datetimerange.component.html'
})
export class DateTimeRangeComponent {
 value: string;
  enabled: boolean;
  constructor() {
    this.value = '1/1/2017 12:00 AM - 1/1/2018 12:00 AM';
    this.enabled = true;
  }
}
