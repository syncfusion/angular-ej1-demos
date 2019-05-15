import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/stackingColumn100.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class ColumnStack100Component {
    stackingColumn100Data1: any;
    stackingColumn100Data2: any;
    stackingColumn100Data3: any;
    stackingColumn100Data4: any;
    constructor(public chartDataService: ChartDataService) {
        let stackingColumn100Data1 = 'series1';
        let stackingColumn100Data2 = 'series2';
        let stackingColumn100Data3 = 'sereis3';
        let stackingColumn100Data4 = 'sereis4';
        this.stackingColumn100Data1 = chartDataService.getStackingColumn100Data(stackingColumn100Data1);
        this.stackingColumn100Data2 = chartDataService.getStackingColumn100Data(stackingColumn100Data2);
        this.stackingColumn100Data3 = chartDataService.getStackingColumn100Data(stackingColumn100Data3);
        this.stackingColumn100Data4 = chartDataService.getStackingColumn100Data(stackingColumn100Data4);
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }

}
