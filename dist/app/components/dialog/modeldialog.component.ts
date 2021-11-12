import { Component, ViewEncapsulation } from '@angular/core';

declare var $: any;

@Component({
  selector: 'ej-app',
  templateUrl: './modeldialog.component.html',
  styleUrls: ['./modeldialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModelDialogComponent {
  constructor() {
  }
  onClick(event) {
    $('#btnOpen').hide();
    $('#lognForm').ejDialog('open');
  }
  onClose() {
    $('#btnOpen').show();
  }
}
