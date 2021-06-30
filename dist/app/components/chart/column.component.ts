import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from'../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/column.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class ColumnComponent {
    chartData: any;
    constructor(public chartDataService: ChartDataService) {
        this.chartData = chartDataService.getColumnData();
    }
    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
