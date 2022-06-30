import { Component, ViewEncapsulation } from '@angular/core';
declare var $: any;
@Component({
  selector: 'ej-app',
  templateUrl: './multipledialog.component.html',
  styles: [
    '.e-dialog.e-widget-content { background: none !important  }  p {margin: 0px;text-align: justify;} #Dialog1, #Dialog2, #Dialog3 {padding: 10px;}'
  ],
  encapsulation: ViewEncapsulation.None
})
export class MultipleDialogComponent {
  dialog1Position: Object;
  dialog2Position: Object;
  dialog3Position: Object;

  constructor() {
    this.dialog1Position = { X: -225, Y: -80};
    this.dialog2Position = { X: 235, Y: -80 };
    this.dialog3Position = { X: 0, Y: 140 };
  }
  onClick(event) {
    $('#btnOpen').hide();
    $('#basicDialog').ejDialog('open');
  }
  onClose(event) {
    $('#btnOpen').show();
  }
}
