import { Component } from '@angular/core';

declare var ej: any;
@Component({
    selector: 'ej-app',
    templateUrl: './databindingremote.component.html',
    styleUrls: ['./databindingremote.component.css']
})
export class DataBindingRemoteComponent {
    dataManger: any;
    fields: any;
    query: any;
    value: string;
    constructor() {
        this.fields = { text: 'ContactName', key: 'SupplierID' };
        this.dataManger = ej.DataManager({ url: '//js.syncfusion.com/ejServices/wcf/NorthWind.svc/', crossDomain: true }); // eslint-disable-line new-cap
        this.query = ej.Query().from('Suppliers').select('SupplierID', 'ContactName');

    }
}
