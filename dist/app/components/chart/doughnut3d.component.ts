import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from'../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/doughnut3d.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class Doughnut3DComponent {

     doughnutData: any;
    constructor(public chartDataService: ChartDataService) {
        this.doughnutData = chartDataService.getDoughnutData();
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
