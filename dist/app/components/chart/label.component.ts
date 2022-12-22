import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
  selector: 'sd-home',
  templateUrl: '/label.component.html',
  providers: [ChartDataService, ChartMobileService]
})


export class LabelComponent {
  constructor(public chartDataService: ChartDataService) {
  }

  onchartload(sender) {
    ChartMobileService.prototype.onchartload(sender);
    ChartDataService.prototype.LabelData(sender);
  }
}




