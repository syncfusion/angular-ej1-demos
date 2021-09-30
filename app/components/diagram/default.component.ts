import { Component } from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './default.component.html'
})
export class DefaultComponent {
     margin: Object;
     enableContextMenu: boolean;
     pageSettings: Object;
     constructor() {
     this.pageSettings = {
        scrollLimit: 'diagram'
     };
     this.enableContextMenu = false;
     this.margin = { 'left': 25, 'right': 25 };
  }
}
