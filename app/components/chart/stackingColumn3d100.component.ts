import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from'../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/stackingColumn3d100.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class StackingColumn3d100Component {
    stackingColumn3d100Data: any;
    constructor(public chartDataService: ChartDataService) {
        this.stackingColumn3d100Data = chartDataService.getStackingColumn3d100Data();
  }

onchartload(sender) {
    ChartMobileService.prototype.onchartload(sender);
    }
}
