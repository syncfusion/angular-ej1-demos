import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './custom.component.html',
    providers: [ChartDataService]
})
export class CustomComponent {
    scale: any;
    tooltip: any;
    constructor(public chartDataService: ChartDataService) {
        this.tooltip = { showCustomLabelTooltip: true };
        this.scale = [
            {
                maximum: 1000, majorIntervalValue: 100, minorIntervalValue: 20,
                width: 30, type: 'rectangle', border: { color: 'balck', width: 0 }, showBarPointers: true, showCustomLabels: true, showRanges: true, length: 310,
                position: { x: 107, y: 50 },
                markerPointers: [{
                    value: 700, length: 20, width: 30, backgroundColor: '#4D4D4D', border: { color: '#4D4D4D' }, type: 'diamond', placement: 'center'
                }],
                labels: [{ font: { size: '11px', fontFamily: 'Segoe UI', fontStyle: 'bold' }, distanceFromScale: { x: -26 } }],
                ticks: [{ type: 'majorinterval', width: 1, color: '#8c8c8c', distanceFromScale: { x: -13 } },
                { type: 'minorinterval', width: 1, height: 4, color: '#8c8c8c', distanceFromScale: { x: -13 } }],
                barPointers: [{
                    value: 700, width: 28, distanceFromScale: 0, backgroundColor: '#66C1DC'
                }],
                ranges: [{
                    endValue: 400,
                    startValue: 0,
                    backgroundColor: '#E94649',
                    border: { color: '#E94649' }, startWidth: 4, endWidth: 4, placement: 'near', distanceFromScale: -5
                }, {
                    endValue: 1000,
                    startValue: 700,
                    backgroundColor: 'Green',
                    border: { color: 'Green' }, startWidth: 4, endWidth: 4, placement: 'near', distanceFromScale: -5
                }, {
                    endValue: 700,
                    startValue: 400,
                    backgroundColor: '#F6B53F',
                    border: { color: '#F6B53F' }, startWidth: 4, endWidth: 4, placement: 'near', distanceFromScale: -5
                }],
                customLabels: [{
                    value: 'Water Level in Liter', position: { x: 82, y: 100 }, color: '#8c8c8c',
                    font: { size: '12px', fontFamily: 'Arial', fontStyle: 'bold' }
                }, {
                    value: '700-1000 L Sufficient', color: 'Green',
                    font: { size: '12px', fontFamily: 'Arial', fontStyle: 'bold' }, positionType: 'outer'
                }, {
                    value: '400-700 L Managable', color: '#F6B53F',
                    font: { size: '12px', fontFamily: 'Arial', fontStyle: 'bold' }, positionType: 'outer'
                }, {
                    value: '0-400 L Inadequate', color: '#E94649',
                    font: { size: '12px', fontFamily: 'Arial', fontStyle: 'bold' }, positionType: 'outer'
                }]
            }
        ];
    }

    onLoad(sender) {
        let label1 = $('.outercustomlbl')[0];
        label1.style.maxWidth = '100px';
        let label2 = $('.outercustomlbl')[1];
        label2.style.maxWidth = '100px';
        let label3 = $('.outercustomlbl')[2];
        label3.style.maxWidth = '100px';
    }
}
