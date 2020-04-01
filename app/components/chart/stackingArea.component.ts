import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/stackingArea.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class StackingAreaComponent {
    stackingAreaData1: any;
    stackingAreaData2: any;
    stackingAreaData3: any;
    stackingAreaData4: any;
    @ViewChild('stackedarea') chart: EJComponents <any, any>;
    constructor(public chartDataService: ChartDataService) {
        let stackingAreaData1 = 'series1';
        let stackingAreaData2 = 'series2';
        let stackingAreaData3 = 'sereis3';
        let stackingAreaData4 = 'sereis4';
        this.stackingAreaData1 = chartDataService.getStackingAreaData(stackingAreaData1);
        this.stackingAreaData2 = chartDataService.getStackingAreaData(stackingAreaData2);
        this.stackingAreaData3 = chartDataService.getStackingAreaData(stackingAreaData3);
        this.stackingAreaData4 = chartDataService.getStackingAreaData(stackingAreaData4);
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
    onChangeType(sender) {
        let chart = $('#stackedarea').ejChart('instance');
        let length: number = chart.model.series.length;
        let seriestype = sender.text.replace(/ /g, '');
        if (seriestype == 'StackedSplineArea') {
            seriestype = 'stackingsplinearea';
        } else if (seriestype == '100%StackedSplineArea') {
            seriestype = 'stackingsplinearea100';
        } else {
            seriestype = 'stackingarea';
        }
        for (let i = 0; i < length; i++) {
            chart.model.series[i].type = seriestype;
        }
        if (seriestype == 'stackingsplinearea100') {
            chart.model.primaryYAxis.range = { min: 0, max: 100, interval: 10 };
        } else {
            chart.model.primaryYAxis.range = { min: 0, max: 30, interval: 5 };
        }
        chart.redraw();
    }
}
