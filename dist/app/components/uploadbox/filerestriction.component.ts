import {Component} from '@angular/core';

@Component({
  selector: 'sd-home',
  templateUrl: './filerestriction.component.html'
})
export class FileRestrictionComponent {
  saveURL: string;
  removeURL: string;
  constructor() {
  this.saveURL = '//js.syncfusion.com/ejServices/api/uploadbox/Save';
  this.removeURL = '//js.syncfusion.com/ejServices/api/uploadbox/Remove';
  }
  error(event) {
    alert(event.error);
  }
}
