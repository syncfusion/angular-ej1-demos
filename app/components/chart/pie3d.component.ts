import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from'../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/pie3d.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class Pie3DComponent {
      Expenditure: any;
  constructor(public chartDataService: ChartDataService) {

    this.Expenditure = chartDataService.getPie3D();
  }

   onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}


