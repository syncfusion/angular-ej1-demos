import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';
import { NorthwindService } from '../../services/northwind.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/remote.component.html',
    providers: [ChartDataService, ChartMobileService, NorthwindService]
})
export class RemoteComponent {

    DataManger: any;
    constructor(northwindService: NorthwindService) {
        let dataManger = northwindService.getOrders();
        let data: Array<Object> = [];
        for (let i = 0; i < 10; i++) {
            data.push(dataManger[i]);
        }
        this.DataManger = data;
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
