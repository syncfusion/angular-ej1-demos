import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/box.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class BoxComponent {

    boxData: any;
    @ViewChild('box') chart: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.boxData = chartDataService.getBoxData();
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }

    onchange2(sender) {
        let chart = $('#box').ejChart('instance');
        if (sender.isChecked) {
            chart.model.series[0].showMedian = true;
        } else {
            chart.model.series[0].showMedian = false;
        }
        chart.redraw();
    }

    onchange1(sender) {
        let chart = $('#box').ejChart('instance');
        for (let i = 0; i < chart.model.series.length; i++) {
            chart.model.series[i].boxPlotMode = sender.text;
        }
        chart.redraw();
    }
}
