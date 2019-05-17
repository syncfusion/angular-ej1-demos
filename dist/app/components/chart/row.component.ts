import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/row.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class RowComponent {

    RowDefinition: any;
    Axes: any;
    constructor(public chartDataService: ChartDataService) {

        this.RowDefinition = [
            {
                rowHeight: 25,
                unit: 'percentage'
            },
            {
                rowHeight: 75,
                unit: 'percentage'
            }
        ];
        this.Axes = [
            {
                name: 'y1SecondQuater',
                opposedPosition: true,
                font: { size: '14px' },
                title: { text: 'Million USD' },
                range: { min: 82, max: 88, interval: 2 },
                rowIndex: 0
            }
        ];
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
        ChartDataService.prototype.rowData(sender);
    }
}
