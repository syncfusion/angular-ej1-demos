import { Component } from '@angular/core';
@Component({
  selector: 'ej-app',
  templateUrl: './default.component.html'
})
export class DefaultComponent {
  value: string;
  constructor() { this.value = '#ec2024'; }
}
