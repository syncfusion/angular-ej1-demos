import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from'../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/pieofpie.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class PieofPieComponent {
        chartData: any;
        marker: any;
    @ViewChild('pieofpie') chart: EJComponents<any, any>;
    @ViewChild('spilitValue') textbox: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
    this.chartData = chartDataService.getPieofPieData();
    this.marker = { dataLabel: { visible: true, textMappingName: 'text', font: { size: '13px', color: 'white'}}};
    }
    onchartload(sender) {
     ChartMobileService.prototype.onchartload(sender);
    }
    onChange1(sender) {
      let split = $('#splitValue')[0];
      let option = sender.text.toLowerCase();
      if (option == 'value') {
         split['value'] = '10';
         this.chart.widget.model.series[0].splitValue = '10';
        } else if (option == 'position') {
            split['value'] = '3';
            this.chart.widget.model.series[0].splitValue = '3';
        } else if (option == 'percentage') {
           split['value'] = '15';
           this.chart.widget.model.series[0].splitValue = '15';
        } else if (option == 'indexes') {
           split['value'] = '1,4,5,2';
           this.chart.widget.model.series[0].splitValue = '1,4,5,2';
       }
        this.chart.widget.model.series[0].splitMode = option;
        this.chart.widget.redraw();
     }
     onChange2(sender) {
       if ( this.chart.widget.model.series[0].splitMode != 'indexes') {
          this.chart.widget.model.series[0].splitValue = parseFloat($('#splitValue').val());
       } else {
           this.chart.widget.model.series[0].splitValue = JSON.parse('[' + $('#splitValue').val() + ']');
        }
       this.chart.widget.redraw();
      }
   onChange3(sender) {
      this.chart.widget.model.series[0].gapWidth = parseInt(sender.value);
      this.chart.widget.redraw();
    }
}
