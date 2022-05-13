import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/radar.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class RadarComponent {

    radarData1: any;
    radarData2: any;
    radarData3: any;
    constructor(public chartDataService: ChartDataService) {
        let radarData1 = 'series1';
        let radarData2 = 'series2';
        let radarData3 = 'sereis3';
        this.radarData1 = chartDataService.getRadarData(radarData1);
        this.radarData2 = chartDataService.getRadarData(radarData2);
        this.radarData3 = chartDataService.getRadarData(radarData3);
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
