import { Component, ViewEncapsulation } from '@angular/core';
declare var ej: any;
@Component({
    selector: 'ej-app',
    templateUrl: './databindingremote.component.html',
    styleUrls: ['./databindingremote.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
})
export class DataBindingRemoteComponent {
    dataManger: any;
    fields: Object;
    query: any;
    constructor() {
        this.fields = { text: 'CustomerID' };
        this.dataManger = ej.DataManager({ url: '//js.syncfusion.com/ejServices/wcf/NorthWind.svc/', crossDomain: true });
        this.query = ej.Query().from('Customers').take(20);
    }
}
