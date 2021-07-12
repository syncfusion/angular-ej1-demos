import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
    selector: 'ej-app',
    templateUrl: './numeric.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class NumericComponent {
    rangeData: any;
    rntooltip: any;
    constructor(public chartDataService: ChartDataService) {

        this.rntooltip = {
            tooltipDisplayMode: 'ondemand',
            visible: true
        };
        this.rangeData = chartDataService.getRangeNumericData().Open;
    }

    onrnload(sender) {

        ChartMobileService.prototype.onrnload(sender, this.rangeData);

    }

    onchartload(sender) {
        let data: any = this.GetData();
        sender.model.series[0].dataSource = data.Open;
        sender.model.series[0].xName = 'XValue';
        sender.model.series[0].yName = 'YValue';
        sender.model.series[1].dataSource = data.Close;
        sender.model.series[1].xName = 'XValue';
        sender.model.series[1].yName = 'YValue';
    }

    onchartloaded(sender) {
        let chartobj = $('#chart').data('ejChart');
        if (chartobj != null) {
            chartobj.model.primaryXAxis.zoomPosition = sender.zoomPosition;
            chartobj.model.primaryXAxis.zoomFactor = sender.zoomFactor;
            $('#chart').ejChart('redraw');
        }

    }

    GetData() {
        let series1 = [];
        let series2 = [];
        let value = 100;
        let value1 = 120;
        for (let i = 0; i < 351; i++) {

            if (Math.random() > .5) {
                value += Math.random();
                value1 += Math.random();
            } else {
                value -= Math.random();
                value1 -= Math.random();
            }
            let point1 = { XValue: i, YValue: value };
            let point2 = { XValue: i, YValue: value1 };
            series1.push(point1);
            series2.push(point2);
        }

        let data = { Open: series1, Close: series2 };
        return data;
    }



}
