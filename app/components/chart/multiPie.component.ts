import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/multiPie.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class MultiPieComponent {
    MultiPieData1: any;
    MultiPieData2: any;
    @ViewChild('multipie') chart: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        let MultiPieData1 = 'series1';
        let MultiPieData2 = 'series2';
        this.MultiPieData1 = chartDataService.getMultiPieData(MultiPieData1);
        this.MultiPieData2 = chartDataService.getMultiPieData(MultiPieData2);
    }
    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }

    seriesRender(sender) {
        if (sender.model.theme == 'flatdark' || sender.model.theme == 'gradientdark') {
            sender.data.series.marker.dataLabel.connectorLine.color = 'white';
        }
    }

    onChange(sender) {
        this.chart.widget.model.series[0].type = sender.text.toLowerCase();
        this.chart.widget.model.series[1].type = sender.text.toLowerCase();
        this.chart.widget.redraw();
    }
}
