import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from'../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/pyramid.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class PyramidComponent {

  WebSiteVisitor: any;
  dataLabel: any;
  constructor(public chartDataService: ChartDataService) {

    this.WebSiteVisitor = chartDataService.getPyramidData();
    this.dataLabel = {
             visible: true, shape: 'none',
             font: { color: 'black', size: '12px', fontWeight: 'lighter' }
          };
  }

   onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}


