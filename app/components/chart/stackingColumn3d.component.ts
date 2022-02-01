import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/stackingColumn3d.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class StackingColumn3dComponent {
    stackingColumn3dData1: any;
    stackingColumn3dData2: any;
    stackingColumn3dData3: any;
    stackingColumn3dData4: any;
    constructor(public chartDataService: ChartDataService) {
        let stackingColumn3dData1 = 'series1';
        let stackingColumn3dData2 = 'series2';
        let stackingColumn3dData3 = 'sereis3';
        let stackingColumn3dData4 = 'series4';
        this.stackingColumn3dData1 = chartDataService.getStackingColumn3dData(stackingColumn3dData1);
        this.stackingColumn3dData2 = chartDataService.getStackingColumn3dData(stackingColumn3dData2);
        this.stackingColumn3dData3 = chartDataService.getStackingColumn3dData(stackingColumn3dData3);
        this.stackingColumn3dData4 = chartDataService.getStackingColumn3dData(stackingColumn3dData4);
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
