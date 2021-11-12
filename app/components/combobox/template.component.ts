import {Component} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class TemplateComponent {
    templatedata: Array<Object> = [];
    templatefields: Object;
    temp: any;
    headerTemplate: any;
    footerTemplate: any;
    itemTemplate: any;
    constructor() {
        this.templatedata = [
               { text: 'Erik Linden', eimg: '3', desig: 'Representative', country: 'England' },
               { text: 'John Linden', eimg: '6', desig: 'Representative', country: 'Norway' },
               { text: 'Louis', eimg: '7', desig: 'Representative', country: 'Australia' },
               { text: 'Lawrence', eimg: '5', desig: 'Representative', country: 'India' }
        ];
        this.templatefields = { dataSource: this.templatedata, text: 'text', id: 'emg', value: 'desig'};
        this.headerTemplate = '<div class="head">  Photo  <span style="padding-left:20px"> Contact Info </span></div>';
        this.itemTemplate = '<div><img class="eimg" src="app/content/images/Employees/${eimg}.png" alt="employee"/>' +
                             '<div class="ename"> ${text} </div><div class="temp"> ${country} </div></div>';
        this.footerTemplate = '<div class="Foot"> Total Items Count: 4 </div>';
    }
}
