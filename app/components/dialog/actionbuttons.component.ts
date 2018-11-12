import { Component, ViewEncapsulation } from '@angular/core';

declare var $: any;
@Component({
  selector: 'ej-app',
  templateUrl: './actionbuttons.component.html',
  styles: [
    '.e-dialog.e-widget-content { background: none !important  }'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ActionButtonsComponent {
  actionButtons: Array<string>;
  constructor() {
    this.actionButtons = ['close', 'collapsible', 'maximize', 'minimize', 'pin'];
  }
  onClick(args) {
    $('#btnOpen').hide();
    $('#dialogIcon').ejDialog('open');
  }
  onDialogClose(args) {
    $('#btnOpen').show();
  }
}
