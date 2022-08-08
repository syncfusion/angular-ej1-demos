import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/hilo.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class HiloComponent {
    hiloData: any;
    constructor(public chartDataService: ChartDataService) {
        this.hiloData = chartDataService.getHiloData();
    }
}

