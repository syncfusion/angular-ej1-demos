import { Component, ViewEncapsulation } from '@angular/core';

declare var ej: any;
@Component({
    selector: 'ej-app',
    templateUrl: './virtualscrolling.component.html',
    styleUrls: ['./virtualscrolling.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class VirtualScrollingComponent {
    dataManger: any;
    query: any;
    template: string;
    constructor() {
        this.dataManger = ej.DataManager({ url: '//js.syncfusion.com/ejServices/wcf/NorthWind.svc/', crossDomain: true });
        this.query = ej.Query().from('Customers');
        this.template = '<div><span class="ename">${ContactName}</span>' +
            '<div class="compname"> ${CompanyName} </div><span class="desig"> ${Country} </span><span class="cont"> ${ContactTitle} </span></div>';
    }
}
