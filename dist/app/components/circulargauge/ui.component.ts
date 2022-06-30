import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './ui.component.html',
    providers: [ChartDataService]
})
export class UIComponent {

    constructor(public chartDataService: ChartDataService) {
    }
}
