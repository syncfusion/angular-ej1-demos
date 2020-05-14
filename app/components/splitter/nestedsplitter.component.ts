import { Component } from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './nestedsplitter.component.html',
  styleUrls: ['./nestedsplitter.component.css']
})
export class NestedSplitterComponent {
  orientation: any;
  innerProperties: any;
  properties: any;
  constructor() {
    this.orientation = ej.Orientation.Vertical;
    this.properties = [{ paneSize: 100, minSize: 30 }, { minSize: 30 }];
    this.innerProperties = [{ paneSize: '40%', minSize: 30 }, { paneSize: '35%', minSize: 30 }, { paneSize: '35%', minSize: 30 }];
  }
}
