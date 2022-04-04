import {Component} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sd-home',
  templateUrl: './draganddrop.component.html',
  styleUrls: ['./uploadbox.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DragAndDropComponent {
  saveURL: string;
  removeURL: string;
  constructor() {
  this.saveURL = '//js.syncfusion.com/ejServices/api/uploadbox/Save';
  this.removeURL = '//js.syncfusion.com/ejServices/api/uploadbox/Remove';
  }
}
