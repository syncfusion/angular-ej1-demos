import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/splineArea.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class SplineAreaComponent {
    splineAreaData1: any;
    splineAreaData2: any;
    splineAreaData3: any;
    constructor(public chartDataService: ChartDataService) {
        let splineAreaData1 = 'series1';
        let splineAreaData2 = 'series2';
        let splineAreaData3 = 'sereis3';
        this.splineAreaData1 = chartDataService.getSplineAreaData(splineAreaData1);
        this.splineAreaData2 = chartDataService.getSplineAreaData(splineAreaData2);
        this.splineAreaData3 = chartDataService.getSplineAreaData(splineAreaData3);
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }

}
