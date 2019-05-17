import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/smartLabel.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class SmartLabelComponent {
    SmartLabelData: any;
    @ViewChild('smartLabel') chart: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.SmartLabelData = chartDataService.getSmartLabelData();
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }

    onchange1(sender) {
        if (sender.isChecked) {
            this.chart.widget.model.series[0].enableSmartLabels = true;
          }  else {
            this.chart.widget.model.series[0].enableSmartLabels = false;
          }
        this.chart.widget.redraw();
    }

}
