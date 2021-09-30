import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
  selector: 'sd-home',
  templateUrl: '/axisCrossing.component.html',
  providers: [ChartDataService, ChartMobileService]
})
export class AxisCrossingComponent {
  axisCrossingData: any;
  @ViewChild('axisCrossing') chart: EJComponents<any, any>;
  constructor(public chartDataService: ChartDataService) {

    this.axisCrossingData = chartDataService.getAxisCrossingData();

  }

  onchartload(sender) {
    ChartMobileService.prototype.onchartload(sender);
  }

  onchange1(args) {
    let value = args.value;
    this.chart.widget.model.primaryXAxis.crossesAt = (parseInt(value) / 100);
    this.chart.widget.redraw();
  }

  onchange2(args) {
    let value = args.value;
    this.chart.widget.model.primaryYAxis.crossesAt = parseInt(value);
    this.chart.widget.redraw();
  }
   xAxisCrossing(sender) {
    if (sender.isChecked) {
        this.chart.widget.model.primaryXAxis.showNextToAxisLine = true;
      } else {
        this.chart.widget.model.primaryXAxis.showNextToAxisLine = false;
      }
    this.chart.widget.redraw();
   }
    yAxisCrossing(sender) {
    if (sender.isChecked) {
this.chart.widget.model.primaryYAxis.showNextToAxisLine = true;
      } else {
       this.chart.widget.model.primaryYAxis.showNextToAxisLine = false;
}
   this.chart.widget.redraw();
   }



  tooltip(args) {
    let point = args.model.series[args.data.seriesIndex].points[args.data.pointIndex];
    args.data.currentText = 'Sales in year ' + point.x + '<br/>Cost: ' + point.size + ' million(s)<br/>' + (point.y < 0 ? -point.y * 100 + ' % loss' : point.y * 100 + ' % profit');
  }

}
