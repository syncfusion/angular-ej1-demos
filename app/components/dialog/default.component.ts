import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './default.component.html',
  styles: [
    '.e-dialog.e-widget-content { background: none !important  }'
  ],
  encapsulation: ViewEncapsulation.None
})
export class DefaultComponent {
  resize: boolean;
  constructor() {
    this.resize = false;
  }
  onClick(event) {
    $('#btnOpen').hide();
    $('#basicDialog').ejDialog('open');
  }
  onClose(event) {
    $('#btnOpen').show();
  }
}
