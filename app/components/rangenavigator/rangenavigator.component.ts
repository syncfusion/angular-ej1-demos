import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
  selector: 'sd-home',
  templateUrl: 'app/components/rangenavigator/rangenavigator.component.html',
  providers: [ChartDataService]
})
export class RangeNavigatorComponent {
  rangeData: any;
  constructor(public chartDataService: ChartDataService) {
    this.rangeData = chartDataService.getRangeData();
  }
}
