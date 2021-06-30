import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/tooltip.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class TooltipComponent {
    tooltipData: any;
    constructor(public chartDataService: ChartDataService) {
        this.tooltipData = chartDataService.getTooltipData();
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
