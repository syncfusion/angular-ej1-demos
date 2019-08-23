import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from'../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/area.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class AreaComponent {

      areaData: any;
  constructor(public chartDataService: ChartDataService) {
    this.areaData = chartDataService.getAreaData();
}

   onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
