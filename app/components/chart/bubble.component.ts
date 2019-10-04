import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from'../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/bubble.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class BubbleComponent {

  series: any;
  constructor(public chartDataService: ChartDataService) {

    this.series = chartDataService.getBubbleData();
  }

onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
  }

}

