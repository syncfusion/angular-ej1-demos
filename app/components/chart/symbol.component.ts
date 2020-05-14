import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/symbol.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class SymbolComponent {
    symbolData1: any;
    symbolData2: any;
    symbolData3: any;
    constructor(public chartDataService: ChartDataService) {
        let symbolData1 = 'series1';
        let symbolData2 = 'series2';
        let symbolData3 = 'series3';
        this.symbolData1 = chartDataService.getSymbolData(symbolData1);
        this.symbolData2 = chartDataService.getSymbolData(symbolData2);
        this.symbolData3 = chartDataService.getSymbolData(symbolData3);
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }


}
