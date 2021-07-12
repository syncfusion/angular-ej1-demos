import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/smartAxis.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class SmartAxisComponent {
    SmartAxisData: any;
    @ViewChild('smartAxis') chart: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.SmartAxisData = chartDataService.getSmartAxisData();
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }

    onchange1(sender) {
        switch (sender.text) {
            case 'None':
                this.chart.widget.model.primaryXAxis.edgeLabelPlacement = 'none';
                this.chart.widget.redraw();
                break;
            case 'Shift':
                this.chart.widget.model.primaryXAxis.edgeLabelPlacement = 'shift';
                this.chart.widget.redraw();
                break;
            case 'Hide':
                this.chart.widget.model.primaryXAxis.edgeLabelPlacement = 'hide';
                this.chart.widget.redraw();
                break;
            default:
        }
    }

    onchange2(sender) {
        switch (sender.text) {
            case 'None':
                this.chart.widget.model.primaryXAxis.labelIntersectAction = 'none';
                this.chart.widget.redraw();
                break;
            case 'Rotate90':
                this.chart.widget.model.primaryXAxis.labelIntersectAction = 'rotate90';
                this.chart.widget.redraw();
                break;
            case 'Rotate45':
                this.chart.widget.model.primaryXAxis.labelIntersectAction = 'rotate45';
                this.chart.widget.redraw();
                break;
            case 'WrapByWord':
                this.chart.widget.model.primaryXAxis.labelIntersectAction = 'wrapByWord';
                this.chart.widget.redraw();
                break;
            case 'Wrap':
                this.chart.widget.model.primaryXAxis.labelIntersectAction = 'wrap';
                this.chart.widget.redraw();
                break;
            case 'Hide':
                this.chart.widget.model.primaryXAxis.labelIntersectAction = 'hide';
                this.chart.widget.redraw();
                break;
            case 'Trim':
                this.chart.widget.model.primaryXAxis.labelIntersectAction = 'trim';
                this.chart.widget.redraw();
                break;
            case 'MultipleRows':
                this.chart.widget.model.primaryXAxis.labelIntersectAction = 'multiplerows';
                this.chart.widget.redraw();
                break;
            default:
        }

    }

    onchange3(sender) {
        switch (sender.text) {
            case 'None':
                this.chart.widget.model.primaryXAxis.tickLinesPosition = 'outside';
                this.chart.widget.redraw();
                break;
            case 'Inside':
                this.chart.widget.model.primaryXAxis.tickLinesPosition = 'inside';
                this.chart.widget.redraw();
                break;
            case 'Outside':
                this.chart.widget.model.primaryXAxis.tickLinesPosition = 'outside';
                this.chart.widget.redraw();
                break;
            default:
        }
    }

    onchange4(sender) {
        switch (sender.text) {
            case 'None':
                this.chart.widget.model.primaryXAxis.labelPosition = 'outside';
                this.chart.widget.redraw();
                break;
            case 'Inside':
                this.chart.widget.model.primaryXAxis.labelPosition = 'inside';
                this.chart.widget.redraw();
                break;
            case 'Outside':
                this.chart.widget.model.primaryXAxis.labelPosition = 'outside';
                this.chart.widget.redraw();
                break;
            default:
        }
    }

    onchange5(sender) {
        switch (sender.text.toLowerCase()) {
            case 'true':
                this.chart.widget.model.primaryXAxis.enableTrim = true;
                this.chart.widget.redraw();
                break;
            case 'false':
                this.chart.widget.model.primaryXAxis.enableTrim = false;
                this.chart.widget.redraw();
                break;
        }
    }

    onchange6(sender) {
        this.chart.widget.model._axes[0].maximumLabelWidth = parseFloat(sender.value);
        this.chart.widget.redraw();
    }

    onchange7(sender) {
        switch (sender.text) {
            case 'None':
                this.chart.widget.model.primaryYAxis.edgeLabelPlacement = 'none';
                this.chart.widget.redraw();
                break;
            case 'Shift':
                this.chart.widget.model.primaryYAxis.edgeLabelPlacement = 'shift';
                this.chart.widget.redraw();
                break;
            case 'Hide':
                this.chart.widget.model.primaryYAxis.edgeLabelPlacement = 'hide';
                this.chart.widget.redraw();
                break;
            default:
        }

    }

    onchange8(sender) {
        switch (sender.text) {
            case 'None':
                this.chart.widget.model.primaryYAxis.labelIntersectAction = 'none';
                this.chart.widget.redraw();
                break;
            case 'Hide':
                this.chart.widget.model.primaryYAxis.labelIntersectAction = 'hide';
                this.chart.widget.redraw();
                break;
            case 'MultipleRows':
                this.chart.widget.model.primaryYAxis.labelIntersectAction = 'multiplerows';
                this.chart.widget.redraw();
                break;
            default:
        }
    }

    onchange9(sender) {
        switch (sender.text) {
            case 'None':
                this.chart.widget.model.primaryYAxis.tickLinesPosition = 'outside';
                this.chart.widget.redraw();
                break;
            case 'Inside':
                this.chart.widget.model.primaryYAxis.tickLinesPosition = 'inside';
                this.chart.widget.redraw();
                break;
            case 'Outside':
                this.chart.widget.model.primaryYAxis.tickLinesPosition = 'outside';
                this.chart.widget.redraw();
                break;
            default:
        }
    }

    onchange10(sender) {
        switch (sender.text) {
            case 'None':
                this.chart.widget.model.primaryYAxis.labelPosition = 'outside';
                this.chart.widget.redraw();
                break;
            case 'Inside':
                this.chart.widget.model.primaryYAxis.labelPosition = 'inside';
                this.chart.widget.redraw();
                break;
            case 'Outside':
                this.chart.widget.model.primaryYAxis.labelPosition = 'outside';
                this.chart.widget.redraw();
                break;
            default:
        }
    }

    onchange11(sender) {
        switch (sender.text) {
            case 'false':
                this.chart.widget.model.primaryYAxis.enableTrim = false;
                this.chart.widget.redraw();
                break;
            case 'true':
                this.chart.widget.model.primaryYAxis.enableTrim = true;
                this.chart.widget.redraw();
                break;

        }
    }

    onchange12(sender) {
        this.chart.widget.model._axes[1].maximumLabelWidth = parseFloat(sender.text);
        this.chart.widget.redraw();
    }



}
