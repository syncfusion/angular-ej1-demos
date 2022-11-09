import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
    selector: 'ej-app',
    templateUrl: './customization.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class CustomizationComponent {
    RangeSetting1: any;
    Tooltip1: any;
    Series1: any;
    SeriesSetting1: any;
    AxisSetting1: any;
    Label1: any;
    Navigator1: any;
    data: any;
    RangeSetting2: any;
    Tooltip2: any;
    Series2: any;
    SeriesSetting2: any;
    AxisSetting2: any;
    Label2: any;
    Navigator2: any;
    constructor(public chartDataService: ChartDataService) {
        this.data = this.generateData();
        this.RangeSetting1 = {
            start: '2010/7/1', end: '2011/4/1'
        };
        this.Tooltip1 = {
            visible: true, labelFormat: 'MM/dd/yyyy', backgroundColor: 'gray', tooltipDisplayMode: 'ondemand',
            font: {
                color: 'white',
                fontFamily: 'Segoe UI',
                fontStyle: 'Normal',
                size: '12px',
                opacity: 1,
                fontWeight: 'regular'
            }

        };
        this.Series1 = [
            {

                name: 'Product A',
                enableAnimation: false,
                type: 'area',
                dataSource: this.data[0].Close, xName: 'XValue', yName: 'YValue',
                border: { color: 'transparent', width: 2 },
                opacity: 1, fill: '#45eded',

            },

            {

                name: 'Product B',
                enableAnimation: false,
                type: 'area',
                dataSource: this.data[0].Open, xName: 'XValue', yName: 'YValue',
                border: { color: 'transparent', width: 2 },
                opacity: 1, fill: '#41d335',

            }

        ];

        this.SeriesSetting1 = {
            type: 'column', enableAnimation: true,
        };

        this.AxisSetting1 = {
            rangePadding: 'none',
            axisLine: { visible: false },
            font: { size: '0px', },
            majorTickLines:
            {
                lineWidth: 0, size: 0, visible: true
            },
            range: { min: 0, max: 50, interval: 10 },
            majorGridLines: { visible: false },
            visible: false
        };

        this.Label1 = {

            higherLevel: {
                style: { font: { color: 'black', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' }, horizontalAlignment: 'left' },
                intervalType: 'years',
                gridLineStyle: { color: 'black', width: 1, dashArray: '17 5 0' },
                labelPlacement: 'inside'
            },
            lowerLevel: {
                style: { font: { color: 'black', family: 'Segoe UI', style: 'Normal', size: '12px', opacity: 1, weight: 'regular' }, horizontalAlignment: 'center' },
                intervalType: 'quarters',
                gridLineStyle: { color: 'black', width: 1, dashArray: '0 13 5' },
                labelPlacement: 'inside'
            }
        };

        this.Navigator1 = {

            unselectedRegionColor: 'white',
            thumbColor: 'white',
            background: 'transparent',
            leftThumbTemplate: 'rectlight',
            rightThumbTemplate: 'rectlight',
            border: { color: 'black', width: 3 },
            majorGridLineStyle: { color: 'transparent' },
            minorGridLineStyle: { color: 'transparent' }
        };

        this.RangeSetting2 = {
            start: '2011/1/1', end: '2011/10/1'
        };

        this.Tooltip2 = {
            visible: true, labelFormat: 'MM/dd/yyyy', backgroundColor: 'gray', tooltipDisplayMode: 'ondemand',
            font: {
                color: 'white',
                fontFamily: 'Segoe UI',
                fontStyle: 'Normal',
                size: '12px',
                opacity: 1,
                fontWeight: 'regular'
            }

        };

        this.Series2 = [
            {

                name: 'Product A',
                enableAnimation: false,
                type: 'splinearea',
                dataSource: this.data[0].Close, xName: 'XValue', yName: 'YValue',
                border: { color: 'transparent', width: 2 },
                opacity: 1, fill: '#4EC9DD',

            },

            {

                name: 'Product B',
                enableAnimation: false,
                type: 'splinearea',
                dataSource: this.data[0].Open, xName: 'XValue', yName: 'YValue',
                border: { color: 'transparent', width: 2 },
                opacity: 1, fill: '#DD4A4A',

            }

        ];

        this.AxisSetting2 = {
            rangePadding: 'none',
            axisLine: { visible: false },
            font: { size: '0px', },
            majorTickLines:
            {
                lineWidth: 0, size: 0, visible: true
            },
            range: { min: 0, max: 50, interval: 10 },
            majorGridLines: { visible: false },
            visible: false
        };

        this.SeriesSetting2 = {
            type: 'column', enableAnimation: true,
        };

        this.Label2 = {

            higherLevel: {
                style: { font: { color: 'black', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' }, horizontalAlignment: 'left' },
                intervalType: 'years',
                gridLineStyle: { color: 'black', width: 1, dashArray: '17 5 0' },
                labelPlacement: 'inside'
            },
            lowerLevel: {
                style: { font: { color: 'black', family: 'Segoe UI', style: 'Normal', size: '12px', opacity: 1, weight: 'regular' }, horizontalAlignment: 'center' },
                intervalType: 'quarters',
                gridLineStyle: { color: 'black', width: 1, dashArray: '0 13 5' },
                labelPlacement: 'inside'
            }
        };

        this.Navigator2 = {

            thumbStroke: 'black',
            unselectedRegionColor: 'white',
            thumbColor: 'gray',
            leftThumbTemplate: 'leftlight',
            rightThumbTemplate: 'rightlight',
            background: 'transparent',
            border: { color: 'gray', width: 3 },
            majorGridLineStyle: { color: 'transparent' },
            minorGridLineStyle: { color: 'transparent' }
        };



    }

    generateData(): Array<any> {
        let series1: Array<Object> = [];
        let series2: Array<Object> = [];
        let data: Array<Object> = [];
        series1.push({ XValue: new Date(2010, 0, 1), YValue: 5 });
        series1.push({ XValue: new Date(2010, 0, 20), YValue: 5 });
        series1.push({ XValue: new Date(2010, 0, 40), YValue: 20 });
        series1.push({ XValue: new Date(2010, 0, 80), YValue: 15 });
        series1.push({ XValue: new Date(2010, 0, 100), YValue: 20 });
        series1.push({ XValue: new Date(2010, 0, 120), YValue: 15 });
        series1.push({ XValue: new Date(2010, 0, 140), YValue: 15 });
        series1.push({ XValue: new Date(2010, 0, 160), YValue: 30 });
        series1.push({ XValue: new Date(2010, 0, 180), YValue: 20 });
        series1.push({ XValue: new Date(2010, 0, 200), YValue: 25 });
        series1.push({ XValue: new Date(2010, 0, 220), YValue: 15 });
        series1.push({ XValue: new Date(2010, 0, 240), YValue: 20 });
        series1.push({ XValue: new Date(2010, 0, 260), YValue: 15 });
        series1.push({ XValue: new Date(2010, 0, 280), YValue: 25 });
        series1.push({ XValue: new Date(2010, 0, 300), YValue: 5 });
        series1.push({ XValue: new Date(2010, 0, 320), YValue: 35 });
        series1.push({ XValue: new Date(2010, 0, 340), YValue: 25 });
        series1.push({ XValue: new Date(2010, 0, 363), YValue: 15 });
        series1.push({ XValue: new Date(2011, 0, 1), YValue: 5 });
        series1.push({ XValue: new Date(2011, 0, 20), YValue: 5 });
        series1.push({ XValue: new Date(2011, 0, 40), YValue: 20 });
        series1.push({ XValue: new Date(2011, 0, 80), YValue: 15 });
        series1.push({ XValue: new Date(2011, 0, 100), YValue: 20 });
        series1.push({ XValue: new Date(2011, 0, 120), YValue: 15 });
        series1.push({ XValue: new Date(2011, 0, 140), YValue: 15 });
        series1.push({ XValue: new Date(2011, 0, 160), YValue: 30 });
        series1.push({ XValue: new Date(2011, 0, 180), YValue: 20 });
        series1.push({ XValue: new Date(2011, 0, 200), YValue: 25 });
        series1.push({ XValue: new Date(2011, 0, 220), YValue: 15 });
        series1.push({ XValue: new Date(2011, 0, 240), YValue: 20 });
        series1.push({ XValue: new Date(2011, 0, 260), YValue: 15 });
        series1.push({ XValue: new Date(2011, 0, 280), YValue: 25 });
        series1.push({ XValue: new Date(2011, 0, 300), YValue: 5 });
        series1.push({ XValue: new Date(2011, 0, 320), YValue: 35 });
        series1.push({ XValue: new Date(2011, 0, 340), YValue: 25 });
        series1.push({ XValue: new Date(2012, 0, 60), YValue: 15 });
        series2.push({ XValue: new Date(2010, 0, 1), YValue: 5 });
        series2.push({ XValue: new Date(2010, 0, 20), YValue: 15 });
        series2.push({ XValue: new Date(2010, 0, 40), YValue: 20 });
        series2.push({ XValue: new Date(2010, 0, 80), YValue: 25 });
        series2.push({ XValue: new Date(2010, 0, 100), YValue: 20 });
        series2.push({ XValue: new Date(2010, 0, 120), YValue: 35 });
        series2.push({ XValue: new Date(2010, 0, 140), YValue: 15 });
        series2.push({ XValue: new Date(2010, 0, 160), YValue: 30 });
        series2.push({ XValue: new Date(2010, 0, 180), YValue: 10 });
        series2.push({ XValue: new Date(2010, 0, 200), YValue: 35 });
        series2.push({ XValue: new Date(2010, 0, 220), YValue: 25 });
        series2.push({ XValue: new Date(2010, 0, 240), YValue: 10 });
        series2.push({ XValue: new Date(2010, 0, 260), YValue: 25 });
        series2.push({ XValue: new Date(2010, 0, 280), YValue: 35 });
        series2.push({ XValue: new Date(2010, 0, 300), YValue: 15 });
        series2.push({ XValue: new Date(2010, 0, 320), YValue: 25 });
        series2.push({ XValue: new Date(2010, 0, 340), YValue: 35 });
        series2.push({ XValue: new Date(2010, 0, 363), YValue: 25 });
        series2.push({ XValue: new Date(2011, 0, 1), YValue: 35 });
        series2.push({ XValue: new Date(2011, 0, 20), YValue: 15 });
        series2.push({ XValue: new Date(2011, 0, 40), YValue: 20 });
        series2.push({ XValue: new Date(2011, 0, 80), YValue: 25 });
        series2.push({ XValue: new Date(2011, 0, 100), YValue: 20 });
        series2.push({ XValue: new Date(2011, 0, 120), YValue: 35 });
        series2.push({ XValue: new Date(2011, 0, 140), YValue: 15 });
        series2.push({ XValue: new Date(2011, 0, 160), YValue: 30 });
        series2.push({ XValue: new Date(2011, 0, 180), YValue: 10 });
        series2.push({ XValue: new Date(2011, 0, 200), YValue: 35 });
        series2.push({ XValue: new Date(2011, 0, 220), YValue: 25 });
        series2.push({ XValue: new Date(2011, 0, 240), YValue: 10 });
        series2.push({ XValue: new Date(2011, 0, 260), YValue: 25 });
        series2.push({ XValue: new Date(2011, 0, 280), YValue: 35 });
        series2.push({ XValue: new Date(2011, 0, 300), YValue: 15 });
        series2.push({ XValue: new Date(2011, 0, 320), YValue: 25 });
        series2.push({ XValue: new Date(2011, 0, 340), YValue: 35 });
        series2.push({ XValue: new Date(2012, 0, 60), YValue: 25 });
        // series2.push({XValue: new Date(2010, 0, 375), YValue: 15   });
        data.push({ Open: series1, Close: series2 });
        return data;
    }
}
