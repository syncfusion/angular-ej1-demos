import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/stripline.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class StriplineComponent {
    striplineData: any;
    Strip: any;
    Tooltip: any;
    @ViewChild('stripLine') chart: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.striplineData = chartDataService.getStriplineData();
        this.Tooltip = {
            visible: true,
            format: '#point.x# : #point.y#',
            fill: 'white',
            border: { width: 1, color: 'black' },
            font: { color: 'black' }
        };
        this.Strip = [
            {
                start: 30,
                end: 40,
                text: 'High Temperature',
                textAlignment: 'middlecenter',
                color: '#0D97D4',
                font: { size: '18px', color: 'white' },
                zIndex: 'behind',
                borderWidth: 0,
                visible: true
            },
            {
                start: 20,
                end: 30,
                text: 'Average Temperature',
                color: '#00AEFF',
                zIndex: 'behind',
                font: { size: '18px', color: 'white' },
                borderWidth: 0,
                textAlignment: 'middlecenter',
                visible: true
            },
            {
                start: 10,
                end: 20,
                text: 'Low Temperature',
                textAlignment: 'middlecenter',
                font: { size: '18px', color: 'white' },
                color: '#14B9FF',
                zIndex: 'behind',
                borderWidth: 0,
                visible: true
            }
        ];
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }

    onchange1(sender) {
        let option = sender.text;
        if (option.toLowerCase() == 'vertical') {
           // let color : Array<Object> = ['#0D97D4', '#00AEFF', '#14B9FF', '#14B9EE', '#0D97D4'];
            this.chart.widget.model.primaryXAxis.labelPlacement = 'betweenticks';
            for (let i = 0; i <= 4; i++) {
                if (i == 3 || i == 4) {
                    this.chart.widget.model.primaryYAxis.stripLine[i] = {};
                }
                this.chart.widget.model.primaryYAxis.stripLine[i].visible = false;
                this.chart.widget.model.primaryXAxis.stripLine[i] = {};
                switch (i) {
                    case 0:
                        this.chart.widget.model.primaryXAxis.stripLine[i].start = -1;
                        this.chart.widget.model.primaryXAxis.stripLine[i].end = 1.5;
                        this.chart.widget.model.primaryXAxis.stripLine[i].text = 'Winter';
                        this.chart.widget.model.primaryXAxis.stripLine[i].color = '#1e88e5';
                        break;
                    case 1:
                        this.chart.widget.model.primaryXAxis.stripLine[i].start = 1.5;
                        this.chart.widget.model.primaryXAxis.stripLine[i].text = 'Summer';
                        this.chart.widget.model.primaryXAxis.stripLine[i].end = 4.5;
                        this.chart.widget.model.primaryXAxis.stripLine[i].color = '#2196f3';
                        break;
                    case 2:
                        this.chart.widget.model.primaryXAxis.stripLine[i].start = 4.5;
                        this.chart.widget.model.primaryXAxis.stripLine[i].end = 7.5;
                        this.chart.widget.model.primaryXAxis.stripLine[i].text = 'Spring';
                        this.chart.widget.model.primaryXAxis.stripLine[i].color = '#42a5f5';
                        break;
                    case 3:
                        this.chart.widget.model.primaryXAxis.stripLine[i].start = 7.5;
                        this.chart.widget.model.primaryXAxis.stripLine[i].end = 10.5;
                        this.chart.widget.model.primaryXAxis.stripLine[i].color = '#64b5f6';
                        this.chart.widget.model.primaryXAxis.stripLine[i].text = 'Autumn';
                        break;
                    case 4:
                        this.chart.widget.model.primaryXAxis.stripLine[i].start = 10.5;
                        this.chart.widget.model.primaryXAxis.stripLine[i].end = 12;
                        this.chart.widget.model.primaryXAxis.stripLine[i].text = 'Winter';
                        this.chart.widget.model.primaryXAxis.stripLine[i].color = '#1e88e5';
                        break;
                }

                this.chart.widget.model.primaryXAxis.stripLine[i].textAlignment = 'middlecenter';
                this.chart.widget.model.primaryXAxis.stripLine[i].font = {};
                this.chart.widget.model.primaryXAxis.stripLine[i].font.size = '18px';
                this.chart.widget.model.primaryXAxis.stripLine[i].font.color = 'white';
                this.chart.widget.model.primaryXAxis.stripLine[i].zIndex = 'behind';
                this.chart.widget.model.primaryXAxis.stripLine[i].borderWidth = 0;
                this.chart.widget.model.primaryXAxis.stripLine[i].visible = true;
            }
            this.chart.widget.redraw();
        } else {
            let text: Array<Object> = ['High Temperature', 'Average Temperature', 'Low Temperature'];
            let color: Array<Object> = ['#0D97D4', '#00AEFF', '#14B9FF'];
            for (let i = 0; i <= 3; i++) {
                this.chart.widget.model.primaryXAxis.stripLine[i] = {};
                this.chart.widget.model.primaryXAxis.stripLine[i].visible = false;
                if (i == 3) {
                    break;
                };
                switch (i) {
                    case 0:
                        this.chart.widget.model.primaryYAxis.stripLine[i].start = 30;
                        this.chart.widget.model.primaryYAxis.stripLine[i].end = 40;
                        break;
                    case 1:
                        this.chart.widget.model.primaryYAxis.stripLine[i].start = 20;
                        this.chart.widget.model.primaryYAxis.stripLine[i].end = 30;
                        break;
                    case 2:
                        this.chart.widget.model.primaryYAxis.stripLine[i].start = 10;
                        this.chart.widget.model.primaryYAxis.stripLine[i].end = 20;
                        break;
                }
                this.chart.widget.model.primaryYAxis.stripLine[i].text = text[i];
                this.chart.widget.model.primaryYAxis.stripLine[i].textAlignment = 'middlecenter';
                this.chart.widget.model.primaryYAxis.stripLine[i].color = color[i];
                this.chart.widget.model.primaryYAxis.stripLine[i].font = {};
                this.chart.widget.model.primaryYAxis.stripLine[i].font.size = '18px';
                this.chart.widget.model.primaryYAxis.stripLine[i].font.color = 'white';
                this.chart.widget.model.primaryYAxis.stripLine[i].zIndex = 'behind';
                this.chart.widget.model.primaryYAxis.stripLine[i].borderWidth = 0;
                this.chart.widget.model.primaryYAxis.stripLine[i].visible = true;
            }
            this.chart.widget.redraw();
        }
    }


}
