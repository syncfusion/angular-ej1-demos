import { Component, ViewEncapsulation } from '@angular/core';

declare var $: any;
@Component({
  selector: 'ej-app',
  templateUrl: './rtl.component.html',
  styleUrls: ['./rtl.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RTLComponent {
  constructor() {
  }
  onClick(event) {
    $('#btnOpen').hide();
    $('#rtlDialog').ejDialog('open');
  }
  onClose() {
    $('#btnOpen').show();
  }
}
