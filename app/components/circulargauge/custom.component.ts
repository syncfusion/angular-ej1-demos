import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './custom.component.html',
    providers: [ChartDataService]
})
export class CustomComponent {
    customLabels: any;
    constructor(public chartDataService: ChartDataService) {
        this.customLabels = [
            {
                value: 'KM / H', position: { x: 200, y: 220 }, color: 'Green', font: { size: '20px' }
            },
            {
                value: 'Average Driving Speed', positionType: 'outer',
                color: 'Red', font: { size: '20px' }
            }
        ];
    }

    onLoad(sender) {
        let label = $('.outercustomlbl')[0];
        label.style.maxWidth = '100px';
        label.style.marginLeft = '-100px';
    }
}
