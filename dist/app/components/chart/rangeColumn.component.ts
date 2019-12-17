import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/rangeColumn.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class RangeColumnComponent {

    rangeCoumnData1: any;
    rangeCoumnData2: any;
    constructor(public chartDataService: ChartDataService) {
        let rangeCoumnData1 = 'series1';
        let rangeCoumnData2 = 'series2';
        this.rangeCoumnData1 = chartDataService.getRangeCoumnData(rangeCoumnData1);
        this.rangeCoumnData2 = chartDataService.getRangeCoumnData(rangeCoumnData2);
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
