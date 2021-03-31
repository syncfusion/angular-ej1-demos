import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/datetimeCategory.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class DatetimeCategoryComponent {
    dateTimeCategoryData: any;
    constructor(public chartDataService: ChartDataService) {
        this.dateTimeCategoryData = chartDataService.getDateTimeCategoryData();
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
