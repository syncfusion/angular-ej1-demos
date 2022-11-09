import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './export.component.html',
    providers: [ChartDataService]
})
export class ExportComponent {
    scale: any;
    @ViewChild('linearCore') linearIns: EJComponents<any, any>;
    @ViewChild('fileFormat') file: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.scale = [{
            width: 4, border: { color: 'transparent', width: 0 }, showRanges: true, length: 310,
            position: { x: 52, y: 50 },
            markerPointers: [{
                value: 50, length: 10, width: 10, backgroundColor: '#4D4D4D', border: { color: '#4D4D4D' }
            }],
            barPointers: [{
                value: 50, width: 0, distanceFromScale: 8, backgroundColor: '#6FAAB0'
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

    buttonclickevent() {
        let fileName = document.getElementById('fileName')['value'] == '' ? 'DigitalGauge' : document.getElementById('fileName')['value'];
        let fileFormat = this.file.widget.value();
        let flag = this.linearIns.widget.exportImage(fileName, fileFormat);
        if (!flag) {
           alert('Sorry for the inconvenience. Export is currently not supported in Internet Explorer 9 and below version');
        }
    }
}
