import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
  selector: 'sd-home',
  templateUrl: '/wind.component.html',
  providers: [ChartDataService, ChartMobileService]
})
export class WindroseComponent {
  windData1: any;
  windData2: any;
  windData3: any;
  windData4: any;
  windData5: any;
  windData6: any;
  windData7: any;
  windData8: any;
  constructor(public chartDataService: ChartDataService) {
    let windData1 = 'series1';
    let windData2 = 'series2';
    let windData3 = 'sereis3';
    let windData4 = 'series4';
    let windData5 = 'series5';
    let windData6 = 'sereis6';
    let windData7 = 'series7';
    let windData8 = 'series8';
    this.windData1 = chartDataService.getWindData(windData1);
    this.windData2 = chartDataService.getWindData(windData2);
    this.windData3 = chartDataService.getWindData(windData3);
    this.windData4 = chartDataService.getWindData(windData4);
    this.windData5 = chartDataService.getWindData(windData5);
    this.windData6 = chartDataService.getWindData(windData6);
    this.windData7 = chartDataService.getWindData(windData7);
    this.windData8 = chartDataService.getWindData(windData8);

  }
  onchartload(sender) {
    ChartMobileService.prototype.onchartload(sender);
  }

}
