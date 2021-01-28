import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/doughnut.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class DoughnutComponent {
    doughnutData: any;
    constructor(public chartDataService: ChartDataService) {
        this.doughnutData = chartDataService.getDoughnutData1();
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
