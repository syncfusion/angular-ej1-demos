import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';
import '../../content/images/chart/cultures/ej.culture.en-US.min';
import '../../content/images/chart/cultures/ej.culture.fr-FR.min';

@Component({
    selector: 'ej-app',
    templateUrl: './localization.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class LocalizationComponent {
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

        this.label = {

            higherLevel: {
                visible: false
            },
            lowerLevel: {
                intervalType: 'quarters',
            }
        };


        this.rntooltip = {
            labelFormat: 'MM/dd/yyyy',
            tooltipDisplayMode: 'ondemand',
            visible: true
        };
        this.rangeData = this.generateData().Open;
        this.series = [{ dataSource: this.rangeData, xName: 'XValue', yName: 'YValue' }];
        this.dataSource = this.generateData();
        this.primaryX = {
            majorGridLines: { visible: false },
            valueType: 'datetime',
            labelFormat: 'MMM dd'

        };
        this.primaryY = {
            labelFormat: '${value}',
            range: { min: 60, max: 160, interval: 20 }
        };

        this.cross = {
            visible: true,
            type: 'trackball',
            marker:
            {
                shape: 'circle',

                size:
                {
                    height: 9, width: 9
                },
                visible: true,
                border: { width: 1 }
            },
            line: {
                color: 'transparent'
            }
        };
    }

    onrnload(sender) {
        ChartMobileService.prototype.onrnload(sender, this.rangeData);
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

    onchartloaded(sender) {
        let chartobj = $('#chart').data('ejChart');
        if (chartobj != null) {
            chartobj.model.primaryXAxis.zoomPosition = sender.zoomPosition;
            chartobj.model.primaryXAxis.zoomFactor = sender.zoomFactor;
            $('#chart').ejChart('redraw');
        }

    }

    onchange(sender) {
        let chart = $('#chart').ejChart('instance');
        if (sender.selectedText == 'French') {
            this.range.widget.model.locale = 'fr-FR';
            chart.model.locale = 'fr-FR';
        } else {
            this.range.widget.model.locale = 'en-US';
            chart.model.locale = 'en-US';
        }
        this.range.widget.renderNavigator();
        $('#chart').ejChart('redraw');
    }

    generateData() {
        let series1 = [];
        let series2 = [];
        let value = 100;
        let value1 = 120;
        for (let i = 1; i < 360; i++) {

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

    generateData1() {
        let series1 = [];
        let series2 = [];
        let value = 100;
        let value1 = 120;
        for (let i = 1; i < 90; i++) {

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


    onchange1(sender) {
        let Interval = sender.selectedText.toLowerCase();
     //   let slideobj = this.range;

        if (this.range.widget.model.series[0].dataSource.length == 359) {
            let data = this.generateData1();
            this.range.widget.model.series[0].dataSource = data.Open;
            this.range.widget.model.selectedRangeSettings.start = '2010/2/1';
            this.range.widget.model.selectedRangeSettings.end = '2010/3/1';
        }else {
            let data = this.generateData();
            this.range.widget.model.series[0].dataSource = data.Open;
            this.range.widget.model.selectedRangeSettings.start = '2010/4/1';
            this.range.widget.model.selectedRangeSettings.end = '2010/6/30';
        }


        this.range.widget.model.labelSettings.lowerLevel.intervalType = Interval;
        this.range.widget.renderNavigator();
    }
}
