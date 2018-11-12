import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/vertical.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class VerticalComponent {
    RowDefinition: any;
    ColumnDefinition: any;
    Axes: any;
    constructor(public chartDataService: ChartDataService) {
        this.RowDefinition =
            [
                {
                    rowHeight: 100,
                    lineColor: 'gray',
                    lineWidth: 0,
                    unit: 'percentage'
                }
            ];
        this.ColumnDefinition = [
            {
                columnWidth: 50,
                lineColor: 'blue',
                lineWidth: 0,
                unit: 'percentage'
            },
            {
                columnWidth: 50,
                lineColor: 'gray',
                lineWidth: 1,
                unit: 'percentage'
            }

        ];
        this.Axes = [

            {
                columnIndex: '1',
                name: 'yAxis',
                plotOffset: 80,
                majorGridLines: { visible: false },
                range: { min: -15, max: 15, interval: 5 },
                title: { text: 'Velocity(m/s)', visible: true }
            }
        ];

    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
        ChartDataService.prototype.verticalData(sender);
    }
}
