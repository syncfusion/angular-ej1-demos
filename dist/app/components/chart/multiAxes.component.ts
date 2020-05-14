import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/multiAxes.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class MultiAxesComponent {
    Axes: any;
    AxesData1: any;
    AxesData2: any;
    AxesData3: any;
    constructor(public chartDataService: ChartDataService) {
        this.Axes = [{
            majorGridLines:
            {
                visible: false
            },
            orientation: 'Vertical',
            rowIndex: '1',
            opposedPosition: true,
            axisLine: { visible: false },
            range: { min: 24, max: 36, interval: 2 },
            name: 'yAxis',
            labelFormat: '{value}C',
            title: { text: 'Temperature(Celsius)' }
        },

        {
            orientation: 'Vertical',
            hidePartialLabels: false,
            rowIndex: 1,
            plotOffset: 20,
            range: { min: 24, max: 30, interval: 2 },
            majorGridLines: { visible: true },
            axisLine: { visible: false },
            name: 'yAxis1',
            labelFormat: '{value}K',
            title: { text: 'Temperature(Kelvin)' },
            opposedPosition: false
        }
        ];
        let AxesData1 = 'series1';
        let AxesData2 = 'series2';
        let AxesData3 = 'sereis3';
        this.AxesData1 = chartDataService.getAxesData(AxesData1);
        this.AxesData2 = chartDataService.getAxesData(AxesData2);
        this.AxesData3 = chartDataService.getAxesData(AxesData3);
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }

}
