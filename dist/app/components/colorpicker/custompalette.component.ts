import { Component } from '@angular/core';
@Component({
  selector: 'ej-app',
  templateUrl: './custompalette.component.html'
})
export class CustomPaletteComponent {
  value: string;
  type: string;
  palette: string;
  switcher: boolean;
  custom: Array<any>;
  constructor() {
    this.value = '#ec2024';
    this.type = 'palette';
    this.palette = 'custompalette';
    this.switcher = false;
    this.custom = ['ffffff', 'ffccff', 'ff99ff', 'ff66ff', 'ff33ff', 'ff00ff', 'ccffff', 'ccccff', 'cc99ff', 'cc66ff',
      'cc33ff', 'cc00ff', '99ffff', '99ccff', '9999ff', '9966ff', '9933ff', '9900ff', 'ffffcc', 'ffcccc'];
  }
}
