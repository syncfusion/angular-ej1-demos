import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/stackingArea100.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class StackingArea100Component {
    stackingArea100Data1: any;
    stackingArea100Data2: any;
    stackingArea100Data3: any;
    stackingArea100Data4: any;
    constructor(public chartDataService: ChartDataService) {
        let stackingArea100Data1 = 'series1';
        let stackingArea100Data2 = 'series2';
        let stackingArea100Data3 = 'sereis3';
        let stackingArea100Data4 = 'sereis4';
        this.stackingArea100Data1 = chartDataService.getStackingArea100Data(stackingArea100Data1);
        this.stackingArea100Data2 = chartDataService.getStackingArea100Data(stackingArea100Data2);
        this.stackingArea100Data3 = chartDataService.getStackingArea100Data(stackingArea100Data3);
        this.stackingArea100Data4 = chartDataService.getStackingArea100Data(stackingArea100Data4);
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }

}
