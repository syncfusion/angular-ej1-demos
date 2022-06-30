import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/stackingColumn.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class ColumnStackComponent {
    stackingColumnData1: any;
    stackingColumnData2: any;
    stackingColumnData3: any;
    stackingColumnData4: any;
    constructor(public chartDataService: ChartDataService) {
        let stackingColumnData1 = 'series1';
        let stackingColumnData2 = 'series2';
        let stackingColumnData3 = 'sereis3';
        let stackingColumnData4 = 'sereis4';
        this.stackingColumnData1 = chartDataService.getStackingColumnData(stackingColumnData1);
        this.stackingColumnData2 = chartDataService.getStackingColumnData(stackingColumnData2);
        this.stackingColumnData3 = chartDataService.getStackingColumnData(stackingColumnData3);
        this.stackingColumnData4 = chartDataService.getStackingColumnData(stackingColumnData4);
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }

}
