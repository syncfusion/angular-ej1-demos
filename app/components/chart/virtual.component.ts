import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/virtual.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class VirtualComponent {
    PrimaryX: any;
    PrimaryY: any;
    startDate: any = '1/1/2009';
    endDate: any = '1/1/2014';
    pointLength: any = 1000;
    @ViewChild('virtual') chart: EJComponents<any, any>;
    @ViewChild('type') type: EJComponents<any, any>;
    @ViewChild('point') text: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.PrimaryX = {
            title: { text: 'Date' },
            valueType: 'datetime',
            labelFormat: 'MMM-yyyy',
            scrollbarSettings: {
                range: {
                    min: '2009/1/1',
                    max: '2014/1/1'
                }
            }
        };
        this.PrimaryY = {
            title: { text: 'Server Load (MBytes)' },
            labelFormat: '{value}MB'
        };
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
        ChartDataService.prototype.virtualData(sender);
    }


    scrollStart(sender) {
        $('#virtual').ejWaitingPopup();
        $('#virtual').ejWaitingPopup('show');
    }

    scrollEnd(sender) {
        $('#virtual').ejWaitingPopup('hide');
        let data;
        if (sender.data.axis.scrollbarSettings.pointsLength != null) {
            data = this.GetNumericData(sender.data.newRange.start, sender.data.newRange.end);
         } else {
            data = this.GetDateTimeData(new Date(sender.data.newRange.start), new Date(sender.data.newRange.end));
         }
        sender.model.series[0].dataSource = data.Open;
        $('#virtual').ejChart('instance').redraw();
    }


    onchange1(sender) {
        if (this.type.widget._currentText.toLowerCase() == 'range') {
            this.text.widget.disable();
            this.chart.widget.model.primaryXAxis.scrollbarSettings.range.min = this.startDate;
            this.chart.widget.model.primaryXAxis.scrollbarSettings.range.max = this.endDate;
            this.chart.widget.model.primaryXAxis.valueType = 'datetime';
            this.chart.widget.model.primaryXAxis.labelFormat = 'MMM-yyyy';
            this.chart.widget.model.primaryXAxis.scrollbarSettings.pointsLength = null;
            let data = this.GetDateTimeData(new Date('1/1/2009'), new Date('10/1/2009'));
            this.chart.widget.model.series[0].dataSource = data.Open;
            this.chart.widget.model.series[0].xName = 'XValue';
            this.chart.widget.model.series[0].yName = 'YValue';
        } else {
            this.text.widget.enable();
            this.chart.widget.model.primaryXAxis.scrollbarSettings.range.min = null;
            this.chart.widget.model.primaryXAxis.scrollbarSettings.range.max = null;
            this.chart.widget.model.primaryXAxis.valueType = 'double';
            this.chart.widget.model.primaryXAxis.labelFormat = '';
            this.chart.widget.model.primaryXAxis.scrollbarSettings.pointsLength = this.pointLength;
            let data: any = this.GetNumericData(0, 300);
            this.chart.widget.model.series[0].dataSource = data.Open;
            this.chart.widget.model.series[0].xName = 'XValue';
            this.chart.widget.model.series[0].yName = 'YValue';
        }
        this.chart.widget.redraw();
    }

    onchange2(sender) {
        let chart = $('#virtual').ejChart('instance');
        chart.model.primaryXAxis.scrollbarSettings.range.min = null;
        chart.model.primaryXAxis.scrollbarSettings.range.max = null;
        chart.model.primaryXAxis.valueType = 'double';
        chart.model.primaryXAxis.labelFormat = '';
        chart.model.primaryXAxis.scrollbarSettings.pointsLength = parseInt(sender.value);
        let data = this.GetNumericData(0, 300);
        chart.model.series[0].dataSource = data.Open;
        chart.model.series[0].xName = 'XValue';
        chart.model.series[0].yName = 'YValue';
        chart.redraw();
    }

    GetDateTimeData(start: any, end: any) {
        let series1 = [], date, data1;
        let value = 30;

        for (let i = 0; start <= end; i++) {
            date = Date.parse(start);
            if (Math.random() > .5) {
                value += (Math.random() * 10 - 5);
            } else {
                value -= (Math.random() * 10 - 5);
            }
            if (value < 0) {
                value = this.getRandomInt(20, 40);
            }
            let point1 = { XValue: new Date(date), YValue: Math.round(value) };
            new Date(start.setDate(start.getDate() + 1));
            series1.push(point1);
        }

        data1 = { Open: series1 };
        return data1;
    }

    getRandomInt(min: any, max: any) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    GetNumericData(start: any, end: any) {
        let series1 = [];
        let value = 30;

        for (let i = start; i <= end; i++) {
            if (Math.random() > .5) {
                value += (Math.random() * 10 - 5);
            } else {
                value -= (Math.random() * 10 - 5);
            }
            if (value < 0) {
                value = this.getRandomInt(20, 40);
            }
            let point = { XValue: i, YValue: Math.round(value) };
            series1.push(point);
        }
        let data = { Open: series1 };

        return data;
    }

}
