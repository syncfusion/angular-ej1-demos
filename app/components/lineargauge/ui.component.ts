import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './ui.component.html',
    providers: [ChartDataService]
})
export class UIComponent {
    scale: any;
    constructor(public chartDataService: ChartDataService) {
        this.scale = [{
            width: 4, backgroundColor: 'transparent', border: { color: 'transparent', width: 0 }, showRanges: true, length: 310,
            position: { x: 51, y: 50 }, markerPointers: [{
                value: 50, length: 10, width: 10, distanceFromScale: 8, backgroundColor: '#4D4D4D', border: { color: '#4D4D4D' }
            }],
            barPointers: [{
                value: 50, width: 4, distanceFromScale: 8, backgroundColor: '#6FAAB0'
            }], labels: [{ font: { size: '11px', fontFamily: 'Segoe UI', fontStyle: 'bold' }, distanceFromScale: { x: -13 } }],
            ticks: [{ type: 'majorinterval', width: 1, color: '#8c8c8c' }],
            ranges: [{
                endValue: 60,
                startValue: 0,
                backgroundColor: '#F6B53F',
                border: { color: '#F6B53F' }, startWidth: 4, endWidth: 4
            }, {
                endValue: 100,
                startValue: 60,
                backgroundColor: '#E94649',
                border: { color: '#E94649' }, startWidth: 4, endWidth: 4
            }]
        }];
    }
}
