import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './default.component.html',
    providers: [ChartDataService]
})
export class DefaultComponent {

    constructor(public chartDataService: ChartDataService) {
    }
}
