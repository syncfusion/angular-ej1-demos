import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from'../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/candle.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class CandleComponent {


  UnemploymentList: any;
  constructor(public chartDataService: ChartDataService) {

   this.UnemploymentList = chartDataService.getCandleData();
  }

onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
  }

}
