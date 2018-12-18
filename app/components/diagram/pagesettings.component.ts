import { Component, ViewChild} from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';

@Component({
    selector: 'ej-app',
    templateUrl: './pagesettings.component.html',
})

export class PageSettingsComponent {
    @ViewChild('diagram') diagram: EJComponents<any, any>;
    pageSettings: Object;
    gradient: Object;
    gradient1: Object;
    gradient2: Object;
    constructor() {
        this.pageSettings = {
            pageHeight: 500,
            pageWidth: 500,
            pageBorderWidth: 2,
            pageBackgroundColor: 'white',
            pageOrientation: 'landscape',
            boundaryConstraints: 'diagram',
            showPageBreak: true,
            pageBorderColor: 'lightgray',
            pageMargin: 25,
            scrollLimit: 'diagram'
        };
        this.gradient = {
            type: 'radial', cx: 50, cy: 50, fx: 50, fy: 50,
            stops: [
                { offset: 0, color: 'white', opacity: 0 },
                { offset: 100, color: '#FBB040', opacity: 1 }
            ]
        };
        this.gradient1 = {
            type: 'radial', cx: 50, cy: 50, fx: 50, fy: 50,
            stops: [
                { offset: 0, color: 'white', opacity: 0 },
                { offset: 100, color: '#A0D05F', opacity: 1 }
            ]
        };
        this.gradient2 = {
           type: 'radial', cx: 50, cy: 50, fx: 50, fy: 50,
           stops: [
               { offset: 0, color: 'white', opacity: 0 },
               { offset: 100, color: '#7FDEFF', opacity: 1 }
           ]
        };
    }
    ngAfterViewInit() {
        this.diagram.widget.fitToPage();
    }
}
