import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/multilevel.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class MultilevelComponent {
    Multilevel: any;
    Multilevel1: any;
    multiData: any;
    @ViewChild('multi') chart: EJComponents<any, any>;
    @ViewChild('textalign') drop1: EJComponents<any, any>;
    @ViewChild('borderstyle') drop2: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
      this.Multilevel = [
            {
               visible: true, text: 'Quater 1', start: -0.5, end: 2.5
            },
            {
               visible: true, text: 'Quater 2', start: 2.5, end: 5.5
            },
            {
               visible: true, text: 'Quater 3', start: 5.5, end: 8.5
            },
            {
                visible: true, text: 'Quater 4', start: 8.5, end: 11.5
            },
            {
                visible: true, text: 'Half Yearly 1', start: -0.5, end: 5.5, level: 1
            },
            {
                visible: true, text: 'Half Yearly 2', start: 5.5, end: 11.5, level: 1
            },
            {
               visible: true, text: '2015', start: -0.5, end: 11.5, level: 2
            }];
        this.Multilevel1 = [
           {
               visible: true, text: 'Low', start: 0, end: 10
           },
           {
               visible: true, text: 'Medium', start: 10, end: 25
            },
            {
                visible: true, text: 'High', start: 25, end: 40
            }];
            this.multiData = chartDataService.getMultiData();
    }

      onchartload(sender) {
          ChartMobileService.prototype.onchartload(sender);
      }

     onchange1(sender) {
        let textAlign = this.drop1.widget._currentText;
        let borderstyle = this.drop2.widget._currentText;
        for (let i = 0; i < 7; i++) {
            this.chart.widget.model._axes[0].multiLevelLabels[i].border.type = borderstyle;
            this.chart.widget.model._axes[0].multiLevelLabels[i].textAlignment = textAlign;
        }
        for (let i = 0; i < 3; i++) {
            this.chart.widget.model._axes[1].multiLevelLabels[i].border.type = borderstyle;
            this.chart.widget.model._axes[1].multiLevelLabels[i].textAlignment = textAlign;
        }
        this.chart.widget.redraw();
    }

    onchange2(sender) {
       for (let i = 0; i < 7; i++) {
          this.chart.widget.model._axes[0].multiLevelLabels[i].border.color = sender.currentTarget.value;
        }
        for (let i = 0; i < 3; i++) {
            this.chart.widget.model._axes[1].multiLevelLabels[i].border.color = sender.currentTarget.value;
        }
        this.chart.widget.redraw();
     }

}
