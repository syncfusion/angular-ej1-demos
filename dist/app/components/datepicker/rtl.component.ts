import { Component } from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './rtl.component.html'
})
export class RTLComponent {
  value: string;
  rtl: boolean;
  constructor() {
    this.value = Date();
    this.rtl = true;
  }
}
