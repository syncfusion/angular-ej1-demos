import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/semiPie.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class SemiPieComponent {
    SemiPieData: any;
    @ViewChild('semipie') chart: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
       this.SemiPieData = chartDataService.getSemiPieData();
    }

    onchartload(sender) {
       ChartMobileService.prototype.onchartload(sender);
    }

    onchange1(sender) {
        this.chart.widget.model.series[0].startAngle = parseInt(sender.value);
        this.chart.widget.model.series[0].enableAnimation = false;
        this.chart.widget.redraw();
    }

     onChangeEnd(sender) {
        this.chart.widget.model.series[0].endAngle = parseInt(sender.value);
        this.chart.widget.model.series[0].enableAnimation = false;
        this.chart.widget.redraw();
    }

     onChangeType(sender) {
        this.chart.widget.model.series[0].type = sender.text;
        this.chart.widget.model.series[0].enableAnimation = true;
        this.chart.widget.redraw();
    }


     seriesRender(sender) {
       if (sender.model.theme == 'flatdark' || sender.model.theme == 'gradientdark') {
          sender.data.series.marker.dataLabel.connectorLine.color = 'white';
      }
    }

}
