import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/funner.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class FunnelComponent {
    funnerData: any;
    constructor(public chartDataService: ChartDataService) {
        this.funnerData = chartDataService.getFunnelData();
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }

}
