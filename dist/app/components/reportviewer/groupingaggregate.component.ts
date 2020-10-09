import { Component } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './groupingaggregate.component.html',
    styleUrls: ['./reportviewer.components.css']
})

export class GroupingAggregateComponent {
    public serviceUrl: string;
    public reportPath: string;

    constructor() {
        this.serviceUrl = '//js.syncfusion.com/demos/ejServices/api/ReportViewer';
        this.reportPath = 'GroupingAgg.rdl';
    }
}
