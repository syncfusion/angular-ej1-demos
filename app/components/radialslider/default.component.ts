import { Component } from '@angular/core';
@Component({
  selector: 'ej-app',
  templateUrl: './default.component.html'
})
export class DefaultComponent {
  radius: number;
  constructor() {
    this.radius = 100;
  }
}
