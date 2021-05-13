import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/macd.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class MacdComponent {
   macdData: any;
   Axes: any;
   @ViewChild('macd') chart: EJComponents<any, any>;
   constructor(public chartDataService: ChartDataService) {
        this.macdData = chartDataService.getOnlineData();
        this.Axes = [
           {
                name: 'yaxis',
                opposedPosition: true,
                majorGridLines: { visible: false }
           }
          ];
     }

    onchartload(sender) {
         ChartMobileService.prototype.onchartload(sender);
    }

    onchange1(sender) {
        this.chart.widget.model.indicators[0].shortPeriod = parseInt(sender.value);
        this.chart.widget.redraw();
   }
   onchange2(sender) {
        this.chart.widget.model.indicators[0].longPeriod = parseInt(sender.value);
        this.chart.widget.redraw();
   }

   onchange3(sender) {
        this.chart.widget.model.indicators[0].trigger = parseInt(sender.value);
        this.chart.widget.redraw();
   }

   onchange4(sender) {
        this.chart.widget.model.indicators[0].macdType = sender.text.toLowerCase();
        this.chart.widget.redraw();
   }




    track(sender) {
        sender.data.Location.X = sender.data.Location.X + 1;
        if (sender.data.Series.name == 'Hilo') {
            if (sender.model.indicators[0].segment.length > 0) {
                if ((sender.model.indicators[0].macdType == 'both')) {
                    if (sender.model.indicators[0].segment[0].points[sender.data.pointIndex].y != null) {
                           sender.data.currentText = sender.data.currentText +
                           'Histogram : ' + '$'
                           + sender.model.indicators[0].segment[0].points[sender.data.pointIndex].y.toFixed(2) +
                           '<br/>' + 'MACD ' + ' :' + '  $'
                           + sender.model.indicators[0].segment[2].points[sender.data.pointIndex].y.toFixed(2) +
                           '<br/>' + 'Signal : ' + '$'
                           + sender.model.indicators[0].segment[1].points[sender.data.pointIndex].y.toFixed(2) + '<br/>' + '<br/>';
                    } else {
                       sender.data.currentText = sender.data.currentText +
                         'Histogram : ' + '$' + sender.model.indicators[0].segment[0].points[sender.data.pointIndex].y +
                          '<br/>' + 'MACD ' + ' :' + '  $'
                           + sender.model.indicators[0].segment[2].points[sender.data.pointIndex].y +
                           '<br/>' + 'Signal : ' + '$'
                           + sender.model.indicators[0].segment[1].points[sender.data.pointIndex].y + '<br/>' + '<br/>';
                    }
               }
                if ((sender.model.indicators[0].macdType == 'line')) {
                    if (sender.model.indicators[0].segment[1].points[sender.data.pointIndex].y != null) {
                         sender.data.currentText = sender.data.currentText +
                            'MACD ' + ' :' + '  $'
                            + sender.model.indicators[0].segment[0].points[sender.data.pointIndex].y.toFixed(2) +
                            '<br/>' + 'Signal : ' + '$'
                            + sender.model.indicators[0].segment[1].points[sender.data.pointIndex].y.toFixed(2) + '<br/>' + '<br/>';
                        } else {
                        sender.data.currentText = sender.data.currentText +
                           'MACD ' + ' :' + '  $'
                            + sender.model.indicators[0].segment[0].points[sender.data.pointIndex].y +
                            '<br/>' + 'Signal : ' + '$'
                           + sender.model.indicators[0].segment[1].points[sender.data.pointIndex].y + '<br/>' + '<br/>';
                       }
               }
               if ((sender.model.indicators[0].macdType == 'histogram')) {
                  if (sender.model.indicators[0].segment[0].points[sender.data.pointIndex].y != null) {
                      sender.data.currentText = sender.data.currentText +
                      'Histogram : ' + '$'
                            + sender.model.indicators[0].segment[0].points[sender.data.pointIndex].y.toFixed(2) + '<br/>' + '<br/>';
                       }else {
                        sender.data.currentText = sender.data.currentText +
                        'Histogram : ' + '$'
                        + sender.model.indicators[0].segment[0].points[sender.data.pointIndex].y + '<br/>' + '<br/>';
                    }
                }
            }
        }
    }
}
