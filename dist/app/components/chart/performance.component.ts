import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/performance.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class PerformanceComponent {
    @ViewChild('performance') chart: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
    }
    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }

    buttonclickevent() {
        let data = this.GetData(100000);
        this.chart.widget.model.series[0].dataSource = data.Open;
        this.chart.widget.model.series[0].xName = 'XValue';
        this.chart.widget.model.series[0].yName = 'YValue';
        let dt1 = new Date();
        this.chart.widget.redraw();
        let dt2 = new Date();
        let elapsed = dt2.getTime() - dt1.getTime();
        $('#timeTaken').text(elapsed + ' ms');
    }

    GetData(option) {
        let series1 = [];
        let value = 0;
        for (let i = 0; i < option; i++) {
            value += (Math.random() * 10 - 5);
            let point1 = { XValue: i, YValue: value };
            series1.push(point1);
        }
        let data = { Open: series1 };
        return data;
    }
}
