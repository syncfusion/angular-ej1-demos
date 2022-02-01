import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';

import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/errorbar.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class ErrorbarComponent {
    errorData: any;
    @ViewChild('errorbar') chart: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.errorData = chartDataService.getErrorData();
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }



    textRender(sender) {
        if (sender.model.AreaType == 'none' && sender.data.text == 0) {
            sender.data.text = '';
        }
    }

    onVisible(sender) {
        if (sender.isChecked) {
            this.chart.widget.model.series[0].errorBar.visibility = 'visible';
        } else {
            this.chart.widget.model.series[0].errorBar.visibility = 'hidden';
        }
        this.chart.widget.redraw();
    }

    onCap(sender) {
        if (sender.isChecked) {
            this.chart.widget.model.series[0].errorBar.cap.visible = true;
        } else {
            this.chart.widget.model.series[0].errorBar.cap.visible = false;
        }
        this.chart.widget.redraw();
    }

    onErrorBarType(sender) {
        switch (sender.text) {
            case 'Fixed Value':
                this.chart.widget.model.series[0].errorBar.type = 'fixedValue';
                this.chart.widget.redraw();
                break;
            case 'Percentage':
                this.chart.widget.model.series[0].errorBar.type = 'percentage';
                this.chart.widget.redraw();
                break;
            case 'Standard Deviation':
                this.chart.widget.model.series[0].errorBar.type = 'standardDeviation';
                this.chart.widget.redraw();
                break;
            case 'Standard Error':
                this.chart.widget.model.series[0].errorBar.type = 'standardError';
                this.chart.widget.redraw();
                break;
            case 'Custom':
                this.chart.widget.model.series[0].errorBar.type = 'custom';
                this.chart.widget.redraw();
                break;
            default:
        }

    }

    onMode(sender) {
        switch (sender.text) {
            case 'Vertical':
                this.chart.widget.model.series[0].errorBar.mode = 'vertical';
                this.chart.widget.redraw();
                break;
            case 'Horizontal':
                this.chart.widget.model.series[0].errorBar.mode = 'horizontal';
                this.chart.widget.redraw();
                break;
            case 'Both':
                this.chart.widget.model.series[0].errorBar.mode = 'both';
                this.chart.widget.redraw();
                break;
            default:
        }
    }

    onDirection(sender) {
        switch (sender.text) {
            case 'Both':
                this.chart.widget.model.series[0].errorBar.direction = 'both';
                this.chart.widget.redraw();
                break;
            case 'Minus':
                this.chart.widget.model.series[0].errorBar.direction = 'minus';
                this.chart.widget.redraw();
                break;
            case 'Plus':
                this.chart.widget.model.series[0].errorBar.direction = 'plus';
                this.chart.widget.redraw();
                break;
            default:
        }
    }

    vertical(sender) {
        this.chart.widget.model.series[0].errorBar.verticalErrorValue = parseInt(sender.value);
        this.chart.widget.redraw();
    }

    horizontal(sender) {
        this.chart.widget.model.series[0].errorBar.horizontalErrorValue = parseInt(sender.value);
        this.chart.widget.redraw();
    }
    verticalPositive(sender) {
        this.chart.widget.model.series[0].errorBar.verticalPositiveErrorValue = parseInt(sender.value);
        this.chart.widget.redraw();
    }

    verticalNegative(sender) {
        this.chart.widget.model.series[0].errorBar.verticalNegativeErrorValue = parseInt(sender.value);
        this.chart.widget.redraw();
    }
    horizontalPositive(sender) {
        this.chart.widget.model.series[0].errorBar.horizontalPositiveErrorValue = parseInt(sender.value);
        this.chart.widget.redraw();
    }

    horizontalNegative(sender) {
        this.chart.widget.model.series[0].errorBar.horizontalNegativeErrorValue = parseInt(sender.value);
        this.chart.widget.redraw();
    }

    capLength(sender) {
        this.chart.widget.model.series[0].errorBar.cap.length = parseInt(sender.value);
        this.chart.widget.redraw();
    }


    capWidth(sender) {
        this.chart.widget.model.series[0].errorBar.cap.width = parseInt(sender.value);
        this.chart.widget.redraw();
    }

    errorBarColorPicker(sender) {
        this.chart.widget.model.series[0].errorBar.fill = sender.currentTarget.value;
        this.chart.widget.redraw();
    }

    capColorPicker(sender) {
        this.chart.widget.model.series[0].errorBar.cap.fill = sender.currentTarget.value;
        this.chart.widget.redraw();
    }




}
