import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from'../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/bar3d.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class Bar3DComponent {

     barData: any;
    constructor(public chartDataService: ChartDataService) {
        this.barData = chartDataService.get3dBarData();
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
