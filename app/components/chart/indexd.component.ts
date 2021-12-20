import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
  selector: 'sd-home',
  templateUrl: '/indexd.component.html',
  providers: [ChartDataService, ChartMobileService]
})


export class IndexedComponent {

  indexedData1: any;
  indexedData2: any;
  indexedData3: any;
  @ViewChild('indexed') chart: EJComponents<any, any>;
  constructor(public chartDataService: ChartDataService) {
    let indexedData1 = 'series1';
    let indexedData2 = 'series2';
    let indexedData3 = 'sereis3';
    this.indexedData1 = chartDataService.getIndexedData(indexedData1);
    this.indexedData2 = chartDataService.getIndexedData(indexedData2);
    this.indexedData3 = chartDataService.getIndexedData(indexedData3);
  }

  onchartload(sender) {
    ChartMobileService.prototype.onchartload(sender);
  }

  onchange1(sender) {
    this.chart.widget.model.primaryXAxis.isIndexed = sender.isChecked;
    this.chart.widget.redraw();
  }


}




