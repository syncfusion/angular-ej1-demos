import {Component} from '@angular/core';

@Component({
  selector: 'sd-home',
  templateUrl: './rtl.component.html'
})
export class RTLComponent {
  saveURL: string;
  removeURL: string;
  constructor() {
  this.saveURL = '//js.syncfusion.com/ejServices/api/uploadbox/Save';
  this.removeURL = '//js.syncfusion.com/ejServices/api/uploadbox/Remove';
  }
}
