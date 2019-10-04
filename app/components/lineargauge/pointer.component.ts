import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './pointer.component.html',
    providers: [ChartDataService]
})
export class PointerComponent {
    scale: any;
    data: any[];
    @ViewChild('ScaleGauge') linearIns: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.data = ['diamond', 'rectangle', 'triangle', 'ellipse', 'pentagon', 'circle', 'star', 'slider', 'pointer', 'wedge', 'trapezoid', 'rounded rect'];
        this.scale = [{
            width: 4, border: { color: 'transparent', width: 0 }, showRanges: true, length: 310,
            markerPointers: [{
                value: 50, length: 10, width: 10, distanceFromScale: 8, backgroundColor: '#4D4D4D', border: { color: '#4D4D4D' }
            }],
            barPointers: [{
                value: 50, width: 4, distanceFromScale: 8, backgroundColor: '#6FAAB0'
            }], labels: [{ font: { size: '11px', fontFamily: 'Segoe UI', fontStyle: 'bold' }, distanceFromScale: { x: -13 }, textColor: '#8c8c8c' }],
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
        let linearpointer = this.linearIns;

        if (args.id == 'pointerwidth') {
            linearpointer.widget.setPointerWidth(0, 0, args.value);
        } else if (args.id == 'pointervalue') {
            linearpointer.widget.setPointerValue(0, 0, args.value);
            linearpointer.widget.setBarPointerValue(0, 0, args.value);
        } else if (args.text == 'far' || args.text == 'near' || args.text == 'center') {
            linearpointer.widget.setPointerPlacement(0, 0, args.text);
        } else if (args.text == 'diamond' || args.text == 'rectangle' || args.text == 'triangle' ||
            args.text == 'ellipse' || args.text == 'pentagon' || args.text == 'circle' || args.text == 'star' ||
            args.text == 'slider' || args.text == 'pointer' || args.text == 'wedge' || args.text == 'trapezoid' || args.text == 'rounded rect') {
            if (args.text == 'rounded rect') {
                linearpointer.widget.setMarkerStyle(0, 0, 'roundedrectangle');
            } else {
                linearpointer.widget.setMarkerStyle(0, 0, args.text);
            }
        }
    }
}
