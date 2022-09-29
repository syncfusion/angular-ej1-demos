import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/log.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class LogComponent {
    logData: any;
    constructor(public chartDataService: ChartDataService) {
        this.logData = chartDataService.getLogData();
    }
    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
