import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './localdata.component.html',
    styleUrls: ['./toolbar.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LocalDataComponent {
    localfieldsvalues: Object;
    localdata: Array<any>;
    constructor() {
        this.localdata = [{
                empid: '1',
                spriteCss: 'Browsers ieb',
                title: 'Internet Explorer',
            }, {
                empid: '2',
                spriteCss: 'Browsers chromeb',
                title: 'Chrome',
            }, {
                empid: '3',
                spriteCss: 'Browsers firefoxb',
                title: 'Firefox',
            }, {
                empid: '4',
                spriteCss: 'Browsers bittyb',
                title: 'Bitty',
            }, {
                empid: '5',
                spriteCss: 'Browsers operab',
                title: 'Opera',
            }
            ];
        this.localfieldsvalues = { tooltipText: 'title', id: 'empid', spriteCssClass: 'spriteCss' };
    }
}
