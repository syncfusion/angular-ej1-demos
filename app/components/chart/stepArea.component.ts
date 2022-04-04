import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from'../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/stepArea.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class StepAreaComponent {

      StepAreaData: any;
  constructor(public chartDataService: ChartDataService) {
    this.StepAreaData = chartDataService.getStepAreaData();
}

   onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
