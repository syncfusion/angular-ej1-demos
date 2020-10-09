import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from'../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/default.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class DefaultComponent {

      EfficiencyList: any;
  constructor(public chartDataService: ChartDataService) {
    this.EfficiencyList = chartDataService.getDefaultData();
}

   onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
