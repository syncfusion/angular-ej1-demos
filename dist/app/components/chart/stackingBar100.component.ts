import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/stackingBar100.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class StackingBar100Component {
    stackingBar100Data1: any;
    stackingBar100Data2: any;
    stackingBar100Data3: any;
    stackingBar100Data4: any;
    constructor(public chartDataService: ChartDataService) {
        let stackingBar100Data1 = 'series1';
        let stackingBar100Data2 = 'series2';
        let stackingBar100Data3 = 'sereis3';
        let stackingBar100Data4 = 'sereis4';
        this.stackingBar100Data1 = chartDataService.getStackingBar100Data(stackingBar100Data1);
        this.stackingBar100Data2 = chartDataService.getStackingBar100Data(stackingBar100Data2);
        this.stackingBar100Data3 = chartDataService.getStackingBar100Data(stackingBar100Data3);
        this.stackingBar100Data4 = chartDataService.getStackingBar100Data(stackingBar100Data4);
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }

}
