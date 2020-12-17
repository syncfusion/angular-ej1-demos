import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/spline.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class SplineComponent {
    splineData1: any;
    splineData2: any;
    splineData3: any;
    @ViewChild('spline') chart: EJComponents <any, any>;
    constructor(public chartDataService: ChartDataService) {
        let SplineData1 = 'series1';
        let SplineData2 = 'series2';
        let SplineData3 = 'sereis3';
        this.splineData1 = chartDataService.getSplineData(SplineData1);
        this.splineData2 = chartDataService.getSplineData(SplineData2);
        this.splineData3 = chartDataService.getSplineData(SplineData3);
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
    onChange1(sender) {
        let chart = $('#spline').ejChart('instance');
        for (let i = 0; i < chart.model.series.length; i++) {
            chart.model.series[i].splineType = sender.text;
        }
        chart.redraw();
    }
    onChange2(sender) {
        let seriesLength: number = this.chart.widget.model.series.length;
        for (let i = 0; i < seriesLength; i++) {
            this.chart.widget.model.series[i].cardinalSplineTension = parseFloat(sender);
        }
      this.chart.widget.redraw();
    }

}
