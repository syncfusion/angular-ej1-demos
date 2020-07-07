import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './range.component.html',
    providers: [ChartDataService]
})
export class RangeComponent {
    scale: any;
    @ViewChild('linearCore') linearIns: EJComponents<any, any>;
    @ViewChild('rangeid') range: EJComponents<any, any>;
    @ViewChild('startvalue') start: EJComponents<any, any>;
    @ViewChild('endvalue') end: EJComponents<any, any>;
    @ViewChild('startwidth') startwidth: EJComponents<any, any>;
    @ViewChild('endwidth') endwidth: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.scale = [{
            width: 4, backgroundColor: 'transparent', border: { color: 'transparent', width: 0 }, showRanges: true, showMarkerPointers: false, length: 310,

            position: { x: 50, y: 50 }, barPointers: [{
                value: 100, width: 4, backgroundColor: '#6FAAB0'
            }], labels: [{ font: { size: '11px', fontFamily: 'Segoe UI', fontStyle: 'bold' }, distanceFromScale: { x: -12 }, textColor: '#8c8c8c' }],
            ticks: [{ type: 'majorinterval', width: 1, color: '#8c8c8c' }],
            ranges: [{
                distanceFromScale: 8,
                endValue: 50,
                startValue: 0,
                backgroundColor: '#F6B53F',
                border: { color: '#F6B53F' }, startWidth: 3, endWidth: 18
            }, {
                distanceFromScale: 8,
                endValue: 100,
                startValue: 70,
                backgroundColor: '#E94649',
                border: { color: '#E94649' }, startWidth: 18, endWidth: 3
            }]
        }];
    }

    onchange1(args) {
        let startslide = this.start;
        let endslide = this.end;
        let startwidth = this.startwidth;
        let endwidth = this.endwidth;
        let gaugestart = this.linearIns;
        startslide.widget.setModel({ maxValue: gaugestart.model.scales[0].ranges[args.itemId].endValue, value: gaugestart.model.scales[0].ranges[args.itemId].startValue });
        endslide.widget.setModel({ minValue: gaugestart.model.scales[0].ranges[args.itemId].startValue, value: gaugestart.model.scales[0].ranges[args.itemId].endValue });
        startwidth.widget.setModel({ value: gaugestart.model.scales[0].ranges[args.itemId].startWidth });
        endwidth.widget.setModel({ value: gaugestart.model.scales[0].ranges[args.itemId].endWidth });
    }

    onchange(args) {
        let gaugetarget = this.linearIns;
        let target1 = this.range;
        let endslide = this.end;
        let startslide = this.start;
        if (args.id == 'startvalue') {
            endslide.widget.setModel({ minValue: args.value });
            gaugetarget.widget.setRangeStartValue(0, target1.widget.selectedIndexValue, args.value);
        } else if (args.id == 'endvalue') {
            startslide.widget.setModel({ maxValue: args.value });
            gaugetarget.widget.setRangeEndValue(0, target1.widget.selectedIndexValue, args.value);
        } if (args.id == 'startwidth') {
            gaugetarget.widget.setRangeStartWidth(0, target1.widget.selectedIndexValue, args.value);
        }
        if (args.id == 'endwidth') {
            gaugetarget.widget.setRangeEndWidth(0, target1.widget.selectedIndexValue, args.value);
        }
        if (args.id == 'pointervalue') {
            gaugetarget.widget.setBarPointerValue(0, 0, args.value);
        }
        if (args.text == 'far' || args.text == 'near' || args.text == 'center') {
            gaugetarget.widget.setRangePosition(0, 0, args.text);
            gaugetarget.widget.setRangePosition(0, 1, args.text);
        }
    }
}
