import { Component } from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './default.component.html'
})
export class DefaultComponent {
  value: string;
  constructor() {
    this.value = '1/1/2017 - 1/1/2018';
  }
}
