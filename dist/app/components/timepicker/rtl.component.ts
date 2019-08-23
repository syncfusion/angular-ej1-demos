import { Component } from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './rtl.component.html'
})
export class RTLComponent {
    rtl: boolean;
    constructor() {
        this.rtl = true;
    }
}
