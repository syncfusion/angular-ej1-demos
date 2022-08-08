import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from'../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/combination.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class CombinationComponent {
  data: any;
  constructor(public chartDataService: ChartDataService) {
    this.data = chartDataService.getCombinationData();
  }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
