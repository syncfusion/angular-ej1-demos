import { Component } from '@angular/core';
@Component({
  selector: 'ej-app',
  templateUrl: './default.component.html'
})
export class DefaultComponent {
  caption1: any;
  caption2: any;
  caption3: any;
  caption4: any;
  caption5: any;
  caption6: any;
  caption7: any;
  caption8: any;
  caption9: any;
  constructor() {
    this.caption1 = { text: 'People' };
    this.caption2 = { text: 'Play' };
    this.caption3 = { text: 'Maps' };
    this.caption4 = { text: 'Sports' };
    this.caption5 = { text: 'People' };
    this.caption6 = { text: 'Photo' };
    this.caption7 = { text: 'Weather' };
    this.caption8 = { text: 'Music' };
    this.caption9 = { text: 'Favorites' };
  }
}
