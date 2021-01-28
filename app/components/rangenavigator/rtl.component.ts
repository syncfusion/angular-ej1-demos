import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
    selector: 'ej-app',
    templateUrl: './rtl.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class RTLComponent {
    rntooltip: any;
    rangeData: any;
    primaryX: any;
    primaryY: any;
    cross: any;
    label: any;
    series: any[];
    dataSource: any;
    @ViewChild('range') range: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {

        this.rntooltip = {
            tooltipDisplayMode: 'ondemand'
        };
        this.rangeData = this.generateData().Open;
        this.series = [{ dataSource: this.rangeData, xName: 'XValue', yName: 'YValue' }];
    }
    onchartload(sender) {
        let data: any = this.generateData();
        sender.model.series[0].dataSource = data.Open;
        sender.model.series[0].xName = 'XValue';
        sender.model.series[0].yName = 'YValue';
        sender.model.series[1].dataSource = data.Close;
        sender.model.series[1].xName = 'XValue';
        sender.model.series[1].yName = 'YValue';
    }

    generateData() {
        let series1 = [];
        let series2 = [];
        let value = 100;
        let value1 = 120;
        for (let i = 1; i < 730; i++) {

            if (Math.random() > .5) {
                value += Math.random();
                value1 += Math.random();
            } else {
                value -= Math.random();
                value1 -= Math.random();
            }
            let point1 = { XValue: new Date(2010, 0, i), YValue: value };
            let point2 = { XValue: new Date(2010, 0, i), YValue: value1 };
            series1.push(point1);
            series2.push(point2);
        }

        return { Open: series1, Close: series2 };
    }

    onchartloaded(sender) {
        let chartobj = $('#chart').data('ejChart');
        if (chartobj != null) {
            chartobj.model.primaryXAxis.zoomPosition = sender.zoomPosition;
            chartobj.model.primaryXAxis.zoomFactor = sender.zoomFactor;
            $('#chart').ejChart('redraw');
        }

    }
}


