import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';


@Component({
    selector: 'ej-app',
    templateUrl: './summary.component.html',
    styles: ['.e-grid{position:inherit !important'],
    providers: [NorthwindService]
})
export class SummaryComponent {
    public gridData;
    public summaryrows;

    constructor(private service: NorthwindService) {
        this.gridData = service.getOrders();
        this.summaryrows = [{
            title: 'Sum',
            summaryColumns: [{
                summaryType: ej.Grid.SummaryType.Sum,
                displayColumn: 'Freight',
                dataMember: 'Freight',
                format: '{0:C2}'
            }]
        }, {
            title: 'Average',
            summaryColumns: [{
                summaryType: ej.Grid.SummaryType.Average,
                displayColumn: 'Freight',
                dataMember: 'Freight',
                format: '{0:C2}'
            }]
        }, {
            title: 'Maximum',
            summaryColumns: [{
                summaryType: ej.Grid.SummaryType.Maximum,
                displayColumn: 'Freight',
                dataMember: 'Freight',
                format: '{0:C2}'
            }]
        }, {
            title: 'Minimum',
            summaryColumns: [{
                summaryType: ej.Grid.SummaryType.Minimum,
                displayColumn: 'Freight',
                dataMember: 'Freight',
                format: '{0:C2}'
            }]
        }];
    }
}
