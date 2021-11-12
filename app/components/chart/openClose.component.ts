import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
  selector: 'sd-home',
  templateUrl: '/openClose.component.html',
  providers: [ChartDataService, ChartMobileService]
})
export class HiloOpenCloseComponent {

  Range: any;
  OpenCloseData: any;
  constructor(public chartDataService: ChartDataService) {
    this.Range = { min: new Date(1949, 1, 1), max: new Date(2009, 1, 1), interval: 20 };
    this.OpenCloseData = chartDataService.getOpenCloseData();
  }

  onchartload(sender) {
    ChartMobileService.prototype.onchartload(sender);
  }

}
