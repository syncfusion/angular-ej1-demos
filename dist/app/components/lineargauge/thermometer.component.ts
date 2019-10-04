import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './thermometer.component.html',
    providers: [ChartDataService]
})
export class ThermometerComponent {
    scale: any;
    data: any[];
    @ViewChild('linearCore') linearIns: EJComponents<any, any>;
    @ViewChild('pointervalue') slider: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.data = ['Boiling Point', 'Hot Bath', 'Body Temp', 'Beach Weather', 'Cool Day', 'Freezing Point', 'Extreme Cold'];
        this.scale = [{
            type: 'thermometer', backgroundColor: 'transparent', minimum: -10, maximum: 110, minorIntervalValue: 5, scaleBarSize: 20, position: { x: 50, y: 18 }, length: 355,
            border: { color: '#8c8c8c', width: 0.5 },
            showCustomLabels: true,
            markerPointers: [{ opacity: 0 }],
            barPointers: [{
                width: 10, distanceFromScale: -0.5,
                value: 100, backgroundColor: '#DB3738'
            }],
            labels: [{
                placement: 'near', font: { size: '10px', fontFamily: 'Segoe UI', fontStyle: 'Normal' }, textColor: '#8c8c8c'
            }, {
                placement: 'far',
                distanceFromScale: { x: 10 }, textColor: '#8c8c8c'
            }],
            ticks: [{
                type: 'majorinterval', height: 8, width: 1, color: '#8c8c8c'
            }, {
                type: 'minorinterval', height: 4, width: 1, color: '#8c8c8c'
            }, {
                type: 'majorinterval', placement: 'far', height: 8, width: 1, color: '#8c8c8c'
            }, {
                type: 'minorinterval', placement: 'far', height: 4, width: 1, color: '#8c8c8c'
            }],
            customLabels: [{
                value: '(C)',
                position: { x: 44, y: 78 },
                font: { size: '12px', fontFamily: 'Segoe UI', fontStyle: 'bold' }, color: '#666666'
            }, {
                value: '(F)',
                position: { x: 56, y: 78 },
                font: { size: '12px', fontFamily: 'Segoe UI', fontStyle: 'bold' }, color: '#666666'
            },
            {
                position: { x: 51, y: 90 },
                font: { size: '13px', fontFamily: 'Segoe UI', fontStyle: 'bold' },
                color: '#666666'
            }]
        }];
    }

    DrawLabel(args) {
        if (args.label.index == 1) {
            args.style.textValue = (args.label.value * (9 / 5)) + 32;
            args.style.font = 'Normal 10px Segoe UI';
        }
    }

    DrawCustomLabel(args) {
        if (args.customLabelIndex == 2) {
            let temp = args.scaleElement.barPointers[0].value;
            let fahValue = (temp * (9 / 5)) + 32;
            if (temp == -10) {
                args.style.textValue = 'Very Cold Weather' + '(' + fahValue.toFixed(1) + '� F)';
            } else if ((temp > -10 && temp < 0) || (temp > 0 && temp < 15)) {
                args.style.textValue = 'Cool Weather' + ' (' + fahValue.toFixed(1) + '� F)';
            } else if (temp == 0) {
                args.style.textValue = 'Freezing point of Water' + ' (' + fahValue.toFixed(1) + '� F)';
            } else if (temp >= 15 && temp < 30) {
                args.style.textValue = 'Room Temperature' + ' (' + fahValue.toFixed(1) + '� F)';
            } else if (temp == 30) {
                args.style.textValue = 'Beach Weather' + ' (' + fahValue.toFixed(1) + '� F)';
            } else if (temp == 37) {
                args.style.textValue = 'Body Temperature' + ' (' + fahValue.toFixed(1) + '� F)';
            } else if (temp == 40) {
                args.style.textValue = 'Hot Bath Temperature' + ' (' + fahValue.toFixed(1) + '� F)';
            } else if (temp > 40 && temp < 100) {
                args.style.textValue = 'Very Hot Temperature' + ' (' + fahValue.toFixed(1) + '� F)';
            } else if (temp == 100) {
                args.style.textValue = 'Boiling point of Water' + ' (' + fahValue.toFixed(1) + '� F)';
            }
        }
    }

    change1(args) {
        // let slider = this.slider;
        let thermotarget = this.linearIns;
        if (args.id == 'pointervalue') {
            thermotarget.widget.setBarPointerValue(0, 0, args.value);
        } else if (args.text == 'Boiling Point') {
            thermotarget.widget.setBarPointerValue(0, 0, 100);
        } else if (args.text == 'Hot Bath') {
            thermotarget.widget.setBarPointerValue(0, 0, 40);
        } else if (args.text == 'Body Temp') {
            thermotarget.widget.setBarPointerValue(0, 0, 37);
        } else if (args.text == 'Beach Weather') {
            thermotarget.widget.setBarPointerValue(0, 0, 30);
        } else if (args.text == 'Cool Day') {
            thermotarget.widget.setBarPointerValue(0, 0, 10);
        } else if (args.text == 'Freezing Point') {
            thermotarget.widget.setBarPointerValue(0, 0, 0);
        } else if (args.text == 'Extreme Cold') {
            thermotarget.widget.setBarPointerValue(0, 0, -10);
        }
    }
}
