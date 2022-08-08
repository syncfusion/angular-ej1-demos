import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
    selector: 'ej-app',
    templateUrl: './scrollbar.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class ScrollbarComponent {
    rntooltip: any;
    rangeData: any;
    primaryX: any;
    primaryY: any;
    cross: any;
    series: any;
    dataSource: any;
    constructor(public chartDataService: ChartDataService) {

        this.rntooltip = {
            visible: true,
            labelFormat: 'dd/MMM/yyyy', tooltipDisplayMode: 'always'
        };
        this.rangeData = function (start, end) {
            let series1 = [], date;
            let value = 100;

            for (let i = 0; start <= end; i++) {
                date = Date.parse(start);
                if (Math.random() > .5) {
                    value += Math.random();
                } else {
                    value -= Math.random();
                }
                let point1 = { XValue: new Date(date), YValue: value };
                new Date(start.setDate(start.getDate() + 1));
                series1.push(point1);
            }

            return { Open: series1 };
        };

        this.series = [{
            name: 'Product A',
            enableAnimation: false,
            type: 'line',
            dataSource: this.rangeData(new Date(2009, 0, 1), new Date(2010, 2, 1)).Open, xName: 'XValue', yName: 'YValue',
            border: { color: 'transparent', width: 2 },
            opacity: 0.5, fill: '#69D2E7'
        }];

    }

    onScrollStart(sender) {
        $('#range').ejWaitingPopup();
        $('#range').ejWaitingPopup('show');
    }

    onchartload(sender) {
        let data: any = this.GetData(new Date(2009, 0, 1), new Date(2010, 2, 1));
        sender.model.series[0].dataSource = data.Open;
        sender.model.series[0].xName = 'XValue';
        sender.model.series[0].yName = 'YValue';
    }

    GetData(start, end) {
        let series1 = [], date, data1;
        let value = 100;

        for (let i = 0; start <= end; i++) {
            date = Date.parse(start);
            if (Math.random() > .5) {
                value += Math.random();
            } else {
                value -= Math.random();
            }
            let point1 = { XValue: new Date(date), YValue: value };
            new Date(start.setDate(start.getDate() + 1));
            series1.push(point1);
        }

        data1 = { Open: series1 };
        return data1;
    }

    onRangeChanged(sender) {
        let chartobj = $('#chart').ejChart('instance');
        chartobj.model.series[0].dataSource = sender.selectedData;
        chartobj.model.series[0].xName = 'XValue';
        chartobj.model.series[0].yName = 'YValue';
        chartobj.model.primaryXAxis.labelFormat = 'MMM/dd';
        chartobj.redraw();
    }
    onScrollbarChanged(sender) {
        let range = sender, startRange, endRange;
        let data = sender.data;
        startRange = Date.parse(data.newRange.start);
        endRange = Date.parse(data.newRange.end);
        data = this.GetData(new Date(startRange), new Date(endRange));
        range.model.series[0].dataSource = data.Open;
        range.model.series[0].xName = 'XValue';
        range.model.series[0].yName = 'YValue';
        $('#range').ejRangeNavigator('redraw');
    }
}
