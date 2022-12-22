import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './default.component.html',
  styleUrls: ['./navigationdrawer.component.css'], encapsulation: ViewEncapsulation.None,
})
export class DefaultComponent {
  lvset: any;
  el: boolean;

  constructor() {
    this.el = true;
    this.lvset = { width: 300, selectedItemIndex: 0, mouseUp: 'headChange' };
  }
}
