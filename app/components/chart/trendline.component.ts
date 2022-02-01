import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/trendline.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class TrendlineComponent {
    Trend: any;
    @ViewChild('trendline') chart: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.Trend = [{ visibility: 'visible', fill: '#99CCFF', name: 'Linear' }];
    }

    onchange1(sender) {
         this.chart.widget.model.series[0].points = [];
         if ( sender.text.toLowerCase() != 'power') {
           ChartDataService.prototype.trendData(this.chart.widget);
           this.chart.widget.model.series[0].name = 'Rupees';
           this.chart.widget.model.series[0].trendlines[0].name = sender.text;
           this.chart.widget.model.primaryXAxis.title.text = 'Years';
           this.chart.widget.model.primaryYAxis.title.text = 'Rupees against Dollars';
           this.chart.widget.model.title.text = 'Historical Indian Rupee Rate (INR USD)';
        } else {
           this.chart.widget.model.series[0].dataSource = ChartDataService.prototype.powerTrendData();
           this.chart.widget.model.series[0].name = 'Meters';
           this.chart.widget.model.series[0].trendlines[0].name = sender.text + '(Meters)';
           this.chart.widget.model.primaryXAxis.title.text = 'Seconds';
           this.chart.widget.model.primaryYAxis.title.text = 'Meters';
           this.chart.widget.model.title.text = 'Distance Measurement';
        }
        this.chart.widget.model.series[0].trendlines[0].type = sender.text.toLowerCase();
        this.chart.widget.redraw();
    }

    onchange2(sender) {
        this.chart.widget.model.series[0].trendlines[0].forwardForecast = sender.value;
        this.chart.widget.redraw();
    }

    onchange3(sender) {
        this.chart.widget.model.series[0].trendlines[0].backwardForecast = sender.value;
        this.chart.widget.redraw();
    }

    onchange4(sender) {
        this.chart.widget.model.series[0].trendlines[0].polynomialOrder = sender.value;
        this.chart.widget.redraw();
    }
    onchange5(sender) {
        this.chart.widget.model.series[0].trendlines[0].period = sender.value;
        this.chart.widget.redraw();
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
        ChartDataService.prototype.trendData(sender);
    }
}
