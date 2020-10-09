import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/tma.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class TmaComponent {
    tmaData: any;
    Axes: any;
    @ViewChild('tma') chart: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.tmaData = chartDataService.getOnlineData();
        this.Axes = [
           {
                name: 'yaxis',
                labelFormat: '{value}',
                opposedPosition: true,
                range: { min: 55, max: 75, interval: 5 }
            }
        ];
   }

   onchange2(sender) {
        this.chart.widget.model.indicators[0].period = parseInt(sender.value);
        this.chart.widget.redraw();
    }

    onchange1(sender) {
        // let value = this.getColorValue(sender.text);
        this.chart.widget.model.indicators[0].fill = sender.text;
        this.chart.widget.redraw();
    }

    getColorValue(name) {
       let val;
       switch (name) {
            case 'Red':
               val = '#FF0000';
               break;
            case 'Green':
                val = '#009900';
                break;
            case 'Yellow':
                val = '#D8B213';
                break;
            case 'Blue':
                val = '#0000FF';
                break;
         }
         return val;
   }

    onchartload(sender) {
          ChartMobileService.prototype.onchartload(sender);
    }

    track(sender) {
        sender.data.Location.X = sender.data.Location.X + 1;
        if (sender.data.Series.name == 'indicator') {
            if (sender.model.indicators[0].segment.length > 0) {
                if (sender.model.indicators[0].segment.length > 0) {
                   if (sender.model.indicators[0].segment[0].points[sender.data.pointIndex].y != null) {
                        sender.data.currentText = sender.data.currentText + 'Signal Line ' + ' :' + '  $'
                           + sender.model.indicators[0].segment[0].points[sender.data.pointIndex].y.toFixed(2) + '<br/>';
                    } else {
                       sender.data.currentText = sender.data.currentText + 'Signal Line ' + ' :' + '  $'
                           + sender.model.indicators[0].segment[0].points[sender.data.pointIndex].y + '<br/>';
                     }
               }
           }
       }
   }
}
