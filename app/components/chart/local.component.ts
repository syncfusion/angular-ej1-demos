import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/local.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class LocalComponent {
    constructor(public chartDataService: ChartDataService) {

    }
    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
        ChartDataService.prototype.localData(sender);
    }
}
