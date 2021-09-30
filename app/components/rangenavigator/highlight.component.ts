import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
    selector: 'ej-app',
    templateUrl: './highlight.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class HighlightComponent {
    rntooltip: any;
    rangeData: any;
    primaryX: any;
    primaryY: any;
    cross: any;
    series: any[];
    navigator: any;
    dataSource: any;
    label: any;
    constructor(public chartDataService: ChartDataService) {
        this.label = {
            higherLevel: {
                style: { horizontalAlignment: 'left' },
                labelPlacement: 'inside'
            },
            lowerLevel: {
                labelPlacement: 'inside'
            }
        };
        this.navigator = {
            thumbStroke: 'black',
            thumbColor: 'gray',
            background: '#f2f3f4',
            unselectedRegionColor: '#2d8ec4',
            highlightSettings: {
                enable: true,
                color: '#006fa0',
                border: {
                    color: 'gray',
                    width: 1
                }
            },
            selectionSettings: {
                enable: true,
                color: '#0e4a7c',
                border: {
                    color: 'gray',
                    width: 1
                }
            }
        };
        this.rntooltip = {
            visible: true, labelFormat: 'MM/dd/yyyy', backgroundColor: '#434344', tooltipDisplayMode: 'ondemand'
        };
        this.rangeData = function () {
            let series1 = [];
            let value = 100;
            for (let i = 1; i < 365; i++) {

                if (Math.random() > .5) {
                    value += Math.random();
                } else {
                    value -= Math.random();
                }
                let point1 = { XValue: new Date(2010, 0, i), YValue: value };
                series1.push(point1);
            }
            return { Open: series1 };
        };
        this.series = [
            {

                name: 'Product A',
                enableAnimation: false,
                type: 'spline',
                dataSource: this.rangeData().Open, xName: 'XValue', yName: 'YValue',
                border: { color: 'transparent', width: 2 },
                opacity: 1, fill: '#4EC9DD',

            }

        ];
    }

    onrnload(sender) {
        ChartMobileService.prototype.onrnload(sender, this.rangeData);
    }

    onchartload(sender) {
        let data: any = this.GetData();
        sender.model.series[0].dataSource = data[0].Open;
        sender.model.series[0].xName = 'XValue';
        sender.model.series[0].yName = 'YValue';
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
        let series1: Array<Object> = [];
        let data1: Array<Object> = [];
        let value = 100;
        for (let i = 1; i < 365; i++) {

            if (Math.random() > .5) {
                value += Math.random();
            } else {
                value -= Math.random();
            }
            let point1 = { XValue: new Date(2010, 0, i), YValue: value };
            series1.push(point1);
        }

        data1.push({ Open: series1 });
        return data1;
    }

    onchange1(sender) {
        $('#range').ejRangeNavigator('option', { 'navigatorStyleSettings': { highlightSettings: { enable: sender.isChecked } } });
    }

    onchange2(sender) {
        $('#range').ejRangeNavigator('option', { 'navigatorStyleSettings': { selectionSettings: { enable: sender.isChecked } } });

    }

    onchange3(sender) {
        $('#range').ejRangeNavigator('option', { 'navigatorStyleSettings': { highlightSettings: { color: sender.currentTarget.value } } });
    }

    onchange4(sender) {
        $('#range').ejRangeNavigator('option', { 'navigatorStyleSettings': { selectionSettings: { color: sender.currentTarget.value } } });
    }
}
