import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/stochastic.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class StochasticComponent {
    stochasticData: any;
    Axes: any;
    @ViewChild('stochastic') chart: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.stochasticData = chartDataService.getOnlineData();
        this.Axes = [
        {
                name: 'yaxis',
                opposedPosition: true,
                majorGridLines: { visible: false },
                range: { min: 0, max: 100, interval: 10 }
          }
       ];
   }


    onchange1(sender) {
        this.chart.widget.model.indicators[0].period = parseInt(sender.value);
        this.chart.widget.redraw();
   }

    onchange2(sender) {
        this.chart.widget.model.indicators[0].kPeriod = parseInt(sender.value);
        this.chart.widget.redraw();
   }

    onchange3(sender) {
        this.chart.widget.model.indicators[0].dPeriod = parseInt(sender.value);
        this.chart.widget.redraw();
     }

     onchange4(sender) {
        // let value = this.getColorValue(sender.text);
        this.chart.widget.model.indicators[0].upperLine.fill = sender.text.toLowerCase();
        this.chart.widget.redraw();
     }

    onchange5(sender) {
        // let value = this.getColorValue(sender.text);
        this.chart.widget.model.indicators[0].periodLine.fill = sender.text.toLowerCase();
        this.chart.widget.redraw();
    }

     onchange6(sender) {

        this.chart.widget.model.indicators[0].fill = sender.text.toLowerCase();
        this.chart.widget.redraw();
    }
    onchange7(sender) {
        this.chart.widget.model.indicators[0].lowerLine.fill = sender.text.toLowerCase();
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
                val = '#FFFF00';
                break;
           case 'Gold':
                val = '#FFD700';
                break;
           case 'Silver':
               val = '#C0C0C0';
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
         if (sender.data.Series.name == 'Hilo') {
            if (sender.model.indicators[0].segment.length > 0) {
            if (sender.model.indicators[0].segment[3].points[sender.data.pointIndex].y != null) {
                 sender.data.currentText = sender.data.currentText + 'Stochastic : ' + '$'
                        + sender.model.indicators[0].segment[2].points[sender.data.pointIndex].y.toFixed(2)
                        + '<br/>Signal : ' + '$'
                        + sender.model.indicators[0].segment[3].points[sender.data.pointIndex].y.toFixed(2) + '<br/>';
                    } else {
                        sender.data.currentText = sender.data.currentText + 'Stochastic : ' + '$'
                        + sender.model.indicators[0].segment[2].points[sender.data.pointIndex].y
                        + '<br/>Signal : ' + '$'
                        + sender.model.indicators[0].segment[3].points[sender.data.pointIndex].y + '<br/>';
                   }
            }
       }
   }
}
