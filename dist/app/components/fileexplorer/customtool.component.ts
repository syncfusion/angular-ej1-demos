import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './customtool.component.html',
  styleUrls: ['./customtool.component.css'], encapsulation: ViewEncapsulation.None,
})
export class CustomtoolComponent {
    toolsList: Object;
    tools: any;
    constructor() {
        this.tools = ej.FileExplorer.prototype.defaults.tools;
        this.toolsList = ['layout', 'creation', 'navigation', 'addressBar', 'editing', 'copyPaste', 'getProperties', 'customTool', 'searchBar'];
        this.tools.customTool = [{
            name: 'Help',
            tooltip: 'Help ',
            css: 'e-fileExplorer-toolbar-icon Help',
            action: function () {
                $('#helpDialog').ejDialog('open');
            }
        }];
    }
}
