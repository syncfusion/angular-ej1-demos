import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from'../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/bar.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class BarComponent {
  UnemploymentList: any;

  constructor(public chartDataService: ChartDataService) {

    this.UnemploymentList = chartDataService.getBarData();

  }

onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
  }

}
