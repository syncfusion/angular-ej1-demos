import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from'../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/column3d.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class Column3DComponent {
    FruitsList: any;
    constructor(public chartDataService: ChartDataService) {
        this.FruitsList = chartDataService.getColumn3D();
  }

onchartload(sender) {
    ChartMobileService.prototype.onchartload(sender);
    }
}
