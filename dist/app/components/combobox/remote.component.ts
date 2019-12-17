import {Component} from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './remote.component.html'
})
export class RemoteComponent {
    data: any;
    fieldsvalues: Object;
    queries: any;
    constructor() {
        let dataManager = new ej.DataManager({
            url: '//js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Customers',
            crossDomain: true
        });
        let query = new ej.Query().take(6);
        this.queries = query;
        this.data = dataManager;
        this.fieldsvalues = { text: 'CustomerID', value: 'CustomerID' };
    }
}
