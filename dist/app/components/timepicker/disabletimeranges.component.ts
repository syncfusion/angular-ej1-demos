import { Component } from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './disabletimeranges.component.html'
})
export class DisableTimeComponent {
    disableTime: Object;
    constructor() {
        this.disableTime = [{ startTime: '3:00 AM', endTime: '6:00 AM' }, { startTime: '1:00 PM', endTime: '3:00 PM' }, { startTime: '8:00 PM', endTime: '10:00 PM' }];
    }
}
