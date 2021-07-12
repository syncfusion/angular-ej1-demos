import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
     selector: 'sd-home',
    templateUrl: '/title.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class TitleComponent {
    titleData: any;
    @ViewChild('title') chart: EJComponents<any, any>;
    @ViewChild('axis') axis: EJComponents<any, any>;
    @ViewChild('xmaxTitleWidth') xmaxTitleWidth: EJComponents<any, any>;
    @ViewChild('enabletrim') enabletrim: EJComponents<any, any>;
    @ViewChild('alignment') alignment: EJComponents<any, any>;
    @ViewChild('position') position: EJComponents<any, any>;
    @ViewChild('offset') offset: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.titleData = chartDataService.getTitleData();
    }

    onchartload(sender) {
      ChartMobileService.prototype.onchartload(sender);
    }

    onchange(sender) {
        let xmaxTitleWidth = document.getElementById('xmaxTitleWidth');
        let offset = document.getElementById('offset');
        if (this.axis.widget._currentText == 'XAxis') {
             if (this.enabletrim.widget._currentText == 'True') {
                 this.chart.widget.model.primaryXAxis.title.enableTrim = true;
            } else {
               this.chart.widget.model.primaryXAxis.title.enableTrim = false;
            }
            this.chart.widget.model.primaryXAxis.title.maximumTitleWidth = parseInt(xmaxTitleWidth['value']);
            this.chart.widget.model.primaryXAxis.title.alignment = this.alignment.widget._currentText.toLowerCase();
            this.chart.widget.model.primaryXAxis.title.position = this.position.widget._currentText.toLowerCase();
            this.chart.widget.model.primaryXAxis.title.offset = parseInt(offset['value']);
            } else if (this.axis.widget._currentText == 'YAxis') {
            if (this.enabletrim.widget._currentText == 'True') {
            this.chart.widget.model.primaryYAxis.title.enableTrim = true;
           } else {
              this.chart.widget.model.primaryYAxis.title.enableTrim = false;
            }
            this.chart.widget.model.primaryYAxis.title.maximumTitleWidth = parseInt(xmaxTitleWidth['value']);
            this.chart.widget.model.primaryYAxis.title.alignment = this.alignment.widget._currentText.toLowerCase();
            this.chart.widget.model.primaryYAxis.title.position = this.position.widget._currentText.toLowerCase();
            this.chart.widget.model.primaryYAxis.title.offset = parseInt(offset['value']);
            }
           this.chart.widget.redraw();
        }
}
