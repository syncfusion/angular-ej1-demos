import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
  selector: 'sd-home',
  templateUrl: 'app/components/sparkline/sparkline.component.html',
  providers: [ChartDataService]
})
export class SparklineComponent {
  Data1: any;
  Data2: any;
  Data3: any;
  Data4: any;
  Data5: any;
  Data6: any;
  Data7: any;
  Data8: any;
  constructor(public chartDataService: ChartDataService) {
    this.Data1 = chartDataService.getDataSource1();
    this.Data2 = chartDataService.getDataSource2();
    this.Data3 = chartDataService.getDataSource3();
    this.Data4 = chartDataService.getDataSource4();
    this.Data5 = chartDataService.getDataSource5();
    this.Data6 = chartDataService.getDataSource6();
    this.Data7 = chartDataService.getDataSource7();
    this.Data8 = chartDataService.getDataSource8();
  }
}
