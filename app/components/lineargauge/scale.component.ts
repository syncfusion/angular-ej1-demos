import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';

import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './scale.component.html',
    providers: [ChartDataService]

})
export class ScaleComponent {
    scale: any;
    data: any[];
    @ViewChild('ScaleGauge') linearIns: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.data = ['clockwise', 'counterclockwise'];
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
    onChange(args) {
        if (args.id == 'scalesize') {
            this.linearIns.widget.setScaleBarSize(0, args.value);
        } else if (args.id == 'locationX') {
            this.linearIns.widget.setScaleLocation(0, { x: args.value, y: this.linearIns.model.scales[0].position.y });
        } else if (args.id == 'locationY') {
            this.linearIns.widget.setScaleLocation(0, { x: this.linearIns.model.scales[0].position.x, y: args.value });
        } else if (args.id == 'pointervalue') {
            this.linearIns.widget.setPointerValue(0, 0, args.value);
            this.linearIns.widget.setBarPointerValue(0, 0, args.value);
        } else if (args.text == 'clockwise') {
            this.linearIns.widget.setScaleDirection(0, args.text);
        } else if (args.text == 'counterclockwise') {
            this.linearIns.widget.setScaleDirection(0, args.text);
        }
    }
}
