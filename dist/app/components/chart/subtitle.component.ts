import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/subtitle.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class SubtitleComponent {
    subtitleData1: any;
    subtitleData2: any;
    @ViewChild('subtitle') chart: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        let subtitleData1 = 'series1';
        let subtitleData2 = 'series2';
        this.subtitleData1 = chartDataService.getSubtitleData(subtitleData1);
        this.subtitleData2 = chartDataService.getSubtitleData(subtitleData2);
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }

    onchange1(sender) {
        switch (sender.text.toLowerCase()) {
            case 'center':
                this.chart.widget.model.title.textAlignment = 'center';
                this.chart.widget.redraw();
                break;
            case 'near':
                this.chart.widget.model.title.textAlignment = 'near';
                this.chart.widget.redraw();
                break;
            case 'far':
                this.chart.widget.model.title.textAlignment = 'far';
                this.chart.widget.redraw();
                break;
            default:
        }
    }

    onchange2(sender) {
        switch (sender.text) {
            case 'true':
                this.chart.widget.model.title.visible = true;
                this.chart.widget.redraw();
                break;
            case 'false':
                this.chart.widget.model.title.visible = false;
                this.chart.widget.redraw();
                break;
            default:
        }
    }

    onchange3(sender) {
        switch (sender.text.toLowerCase()) {
            case 'true':
                this.chart.widget.model.title.enableTrim = true;
                this.chart.widget.redraw();
                break;
            case 'false':
                this.chart.widget.model.title.enableTrim = false;
                this.chart.widget.redraw();
                break;
            default:
        }
    }
    onchange4(sender) {
        this.chart.widget.model.title.maximumWidth = parseInt(sender.value);
        this.chart.widget.redraw();
    }

    onchange5(sender) {
        switch (sender.text) {
            case 'trim':
                this.chart.widget.model.title.textOverflow = 'trim';
                this.chart.widget.redraw();
                break;
            case 'wrap':
                this.chart.widget.model.title.textOverflow = 'wrap';
                this.chart.widget.redraw();
                break;
            case 'wrapandtrim':
                this.chart.widget.model.title.textOverflow = 'wrapandtrim';
                this.chart.widget.redraw();
                break;
            default:
        }
    }

    onchange6(sender) {
        switch (sender.text.toLowerCase()) {
            case 'center':
                this.chart.widget.model.title.subTitle.textAlignment = 'center';
                this.chart.widget.redraw();
                break;
            case 'near':
                this.chart.widget.model.title.subTitle.textAlignment = 'near';
                this.chart.widget.redraw();
                break;
            case 'far':
                this.chart.widget.model.title.subTitle.textAlignment = 'far';
                this.chart.widget.redraw();
                break;
            default:
        }
    }

    onchange7(sender) {
        switch (sender.text) {
            case 'true':
                this.chart.widget.model.title.subTitle.visible = true;
                this.chart.widget.redraw();
                break;
            case 'false':
                this.chart.widget.model.title.subTitle.visible = false;
                this.chart.widget.redraw();
                break;
            default:
        }
    }
    onchange8(sender) {
        switch (sender.text.toLowerCase()) {
            case 'true':
                this.chart.widget.model.title.subTitle.enableTrim = true;
                this.chart.widget.redraw();
                break;
            case 'false':
                this.chart.widget.model.title.subTitle.enableTrim = false;
                this.chart.widget.redraw();
                break;
            default:
        }
    }

    onchange9(sender) {
        this.chart.widget.model.title.subTitle.maximumWidth = parseInt(sender.value);
        this.chart.widget.redraw();
    }

    onchange10(sender) {
        switch (sender.text) {
            case 'trim':
                this.chart.widget.model.model.title.subTitle.textOverflow = 'trim';
                this.chart.widget.model.redraw();
                break;
            case 'wrap':
                this.chart.widget.model.model.title.subTitle.textOverflow = 'wrap';
                this.chart.widget.model.redraw();
                break;
            case 'wrapandtrim':
                this.chart.widget.model.model.title.subTitle.textOverflow = 'wrapandtrim';
                this.chart.widget.model.redraw();
                break;
            default:
        }
    }



}
