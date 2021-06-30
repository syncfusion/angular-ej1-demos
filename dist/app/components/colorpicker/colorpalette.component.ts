import { Component } from '@angular/core';
@Component({
  selector: 'ej-app',
  templateUrl: './colorpalette.component.html'
})
export class PaletteComponent {
  value: string;
  type: string;
  constructor() {
    this.value = '#ec2024';
    this.type = 'palette';
  }
}
