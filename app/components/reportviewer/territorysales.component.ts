import { Component } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './territorysales.component.html',
    styleUrls: ['./reportviewer.components.css']
})

export class TerritorySalesComponent {
    public serviceUrl: string;
    public serverUrl: string;
    public reportPath: string;

    constructor() {
        this.serviceUrl = '//js.syncfusion.com/demos/ejServices/api/ReportViewer';
        this.serverUrl = '//104.207.134.201/reportserver';
        this.reportPath = '/SSRSSamples2/Territory Sales new';
    }
}
