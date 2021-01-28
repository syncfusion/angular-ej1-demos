import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from'../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/zooming.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class ZoomingComponent {

  constructor(public chartDataService: ChartDataService) {

  }

   onchartload(sender) {
        let data: any = ChartDataService.prototype.GetData();
        sender.model.series[0].dataSource = data.Open;
        sender.model.series[0].xName = 'XValue';
        sender.model.series[0].yName = 'YValue';
        ChartMobileService.prototype.onchartload(sender);
  }

}
