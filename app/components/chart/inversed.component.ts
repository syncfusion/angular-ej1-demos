import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from'../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/inversed.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class InversedAxisComponent {
  inversedData: any;
  constructor(public chartDataService: ChartDataService) {
   this.inversedData = chartDataService.getInversedData();
  }

onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
  }

}
