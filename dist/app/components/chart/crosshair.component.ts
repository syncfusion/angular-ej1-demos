import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/crosshair.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class CrosshairComponent {
    Axes: any;
    constructor(public chartDataService: ChartDataService) {
        this.Axes = [
            {
                majorGridLines:
                {
                    visible: false
                },
                orientation: 'Horizontal',
                hidePartialLabels: false,
                rowIndex: 0,
                valueType: 'datetime',
                labelRotation: 90,
                crosshairLabel: { visible: true },
                name: 'xAxis1'
            },
            {
                majorGridLines:
                {
                    visible: false
                },
                orientation: 'Vertical',
                rowIndex: '0',
                opposedPosition: true,
                range: { min: 0, max: 160, interval: 20 },
                name: 'yAxis',
                crosshairLabel: { visible: true },
                labelFormat: '{value}mm',
                title: { text: 'Rainfall' }
            }
        ];
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
        ChartDataService.prototype.crosshairData(sender);
    }
}
