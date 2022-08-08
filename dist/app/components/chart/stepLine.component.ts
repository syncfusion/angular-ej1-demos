import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/stepLine.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class StepLineComponent {

    StepLineData1: any;
    StepLineData2: any;
    StepLineData3: any;
    StepLineData4: any;
    constructor(public chartDataService: ChartDataService) {
        let StepLineData1 = 'series1';
        let StepLineData2 = 'series2';
        let StepLineData3 = 'series3';
        let StepLineData4 = 'sereis4';
        this.StepLineData1 = chartDataService.getStepLineData(StepLineData1);
        this.StepLineData2 = chartDataService.getStepLineData(StepLineData2);
        this.StepLineData3 = chartDataService.getStepLineData(StepLineData3);
        this.StepLineData4 = chartDataService.getStepLineData(StepLineData4);
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
