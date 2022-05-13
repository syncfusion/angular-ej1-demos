import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/alternategridband.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class AlternategridbandComponent {

    gridBandData1: any;
    gridBandData2: any;
    Alter: any;
    @ViewChild('alternategridband') chart: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        let gridBandData1 = 'series1';
        let gridBandData2 = 'series2';
        this.Alter = {
            even:
            {
                fill: '#A7A9AB',
                opacity: 0.1
            }
        };
        this.gridBandData1 = chartDataService.getGridBandData(gridBandData1);
        this.gridBandData2 = chartDataService.getGridBandData(gridBandData2);
    }

    onchange1(args) {
        let ygridline = this.chart.widget.model.primaryYAxis.alternateGridBand;
        switch (args.text) {
            case 'Even':
                this.chart.widget.model.primaryXAxis.alternateGridBand.odd.fill = 'transparent';
                this.chart.widget.model.primaryXAxis.alternateGridBand.even.fill = '#A7A9AB';
                this.chart.widget.model.primaryXAxis.alternateGridBand.even.opacity = 0.1;
                this.chart.widget.model.primaryXAxis.majorGridLines.color = '#DFDFDF';
                this.chart.widget.model.primaryYAxis.majorGridLines.color = 'transparent';
                this.chart.widget.model.primaryXAxis.axisLine.visible = false;
                this.chart.widget.model.primaryYAxis.axisLine.visible = false;

                this.chart.widget.redraw();
                break;
            case 'Odd':
                this.chart.widget.model.primaryXAxis.alternateGridBand.even.fill = 'transparent';
                this.chart.widget.model.primaryXAxis.alternateGridBand.odd.fill = '#A7A9AB';
                this.chart.widget.model.primaryXAxis.alternateGridBand.odd.opacity = 0.1;
                this.chart.widget.model.primaryXAxis.majorGridLines.color = '#DFDFDF';
                this.chart.widget.model.primaryYAxis.majorGridLines.color = 'transparent';
                this.chart.widget.model.primaryXAxis.axisLine.visible = false;
                this.chart.widget.model.primaryYAxis.axisLine.visible = false;

                this.chart.widget.redraw();
                break;
            case 'None':
                this.chart.widget.model.primaryXAxis.alternateGridBand.even.fill = 'transparent';
                this.chart.widget.model.primaryXAxis.alternateGridBand.odd.fill = 'transparent';
                this.chart.widget.model.primaryYAxis.majorGridLines.color = '#DFDFDF';
                if (ygridline.even.fill != 'transparent' || ygridline.odd.fill != 'transparent') {
                    this.chart.widget.model.primaryXAxis.majorGridLines.color = 'transparent';
                    this.chart.widget.model.primaryXAxis.axisLine.visible = false;
                    this.chart.widget.model.primaryYAxis.axisLine.visible = false;
                }else {
                    this.chart.widget.model.primaryXAxis.axisLine.visible = true;
                    this.chart.widget.model.primaryYAxis.axisLine.visible = true;
                }
                this.chart.widget.redraw();
                break;
            default:

        }
    }

    onchange2(args) {
        let xgridline = this.chart.widget.model.primaryXAxis.alternateGridBand;
        switch (args.text) {
            case 'Even':
                this.chart.widget.model.primaryYAxis.alternateGridBand.odd.fill = 'transparent';
                this.chart.widget.model.primaryYAxis.alternateGridBand.even.fill = '#A7A9AB';
                this.chart.widget.model.primaryYAxis.alternateGridBand.even.opacity = 0.1;
                this.chart.widget.model.primaryYAxis.majorGridLines.color = '#DFDFDF';
                this.chart.widget.model.primaryXAxis.majorGridLines.color = 'transparent';
                this.chart.widget.model.primaryXAxis.axisLine.visible = false;
                this.chart.widget.model.primaryYAxis.axisLine.visible = false;

                this.chart.widget.redraw();
                break;
            case 'Odd':

                this.chart.widget.model.primaryYAxis.alternateGridBand.even.fill = 'transparent';
                this.chart.widget.model.primaryYAxis.alternateGridBand.odd.fill = '#A7A9AB';
                this.chart.widget.model.primaryYAxis.alternateGridBand.odd.opacity = 0.1;
                this.chart.widget.model.primaryYAxis.majorGridLines.color = '#DFDFDF';
                this.chart.widget.model.primaryXAxis.majorGridLines.color = 'transparent';
                this.chart.widget.model.primaryXAxis.axisLine.visible = false;
                this.chart.widget.model.primaryYAxis.axisLine.visible = false;
                this.chart.widget.redraw();
                break;
            case 'None':
                this.chart.widget.model.primaryYAxis.alternateGridBand.even.fill = 'transparent';
                this.chart.widget.model.primaryYAxis.alternateGridBand.odd.fill = 'transparent';
                this.chart.widget.model.primaryXAxis.majorGridLines.color = '#DFDFDF';
                if (xgridline.even.fill != 'transparent' || xgridline.odd.fill != 'transparent') {
                    this.chart.widget.model.primaryYAxis.majorGridLines.color = 'transparent';
                    this.chart.widget.model.primaryYAxis.axisLine.visible = false;
                    this.chart.widget.model.primaryXAxis.axisLine.visible = false;
                }else {
                    this.chart.widget.model.primaryXAxis.axisLine.visible = true;
                    this.chart.widget.model.primaryYAxis.axisLine.visible = true;
                }
                this.chart.widget.redraw();
                break;
            default:
        }
    }



    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
