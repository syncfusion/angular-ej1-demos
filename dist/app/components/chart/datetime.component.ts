import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/datetime.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class DatetimeComponent {
    dateTimeData: any;
    Range: any;
    constructor(public chartDataService: ChartDataService) {
        this.Range = { min: new Date(2000, 6, 1), max: new Date(2010, 6, 1), interval: 1 };
        this.dateTimeData = chartDataService.getDateTimeData();
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
