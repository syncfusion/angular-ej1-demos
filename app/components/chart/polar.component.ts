import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from'../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/polar.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class PolarComponent {
        dataList: any;
  constructor(public chartDataService: ChartDataService) {

    this.dataList = chartDataService.getPolarData();
  }

   onchartload(sender) {
       ChartMobileService.prototype.onchartload(sender);
    }
}
