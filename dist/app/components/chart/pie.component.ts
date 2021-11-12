import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from'../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/pie.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class PieComponent {
        chartData: any;
        dataLabel: any;
    constructor(public chartDataService: ChartDataService) {
        this.chartData = chartDataService.getPieData();
        this.dataLabel = chartDataService.datalabel();
    }
    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
