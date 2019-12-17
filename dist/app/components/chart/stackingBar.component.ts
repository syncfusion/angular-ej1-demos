import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/stackingBar.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class StackingBarComponent {
    stackingBarData1: any;
    stackingBarData2: any;
    stackingBarData3: any;
    constructor(public chartDataService: ChartDataService) {
        let stackingBarData1 = 'series1';
        let stackingBarData2 = 'series2';
        let stackingBarData3 = 'sereis3';
        this.stackingBarData1 = chartDataService.getStackingBarData(stackingBarData1);
        this.stackingBarData2 = chartDataService.getStackingBarData(stackingBarData2);
        this.stackingBarData3 = chartDataService.getStackingBarData(stackingBarData3);
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }

}
