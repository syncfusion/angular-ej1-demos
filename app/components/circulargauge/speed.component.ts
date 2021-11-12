import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './speed.component.html',
    providers: [ChartDataService]
})
export class SpeedComponent {
    customLabels: any[];
    constructor(public chartDataService: ChartDataService) {
        this.customLabels = [
            {
                value: '0',
                position: { x: 200, y: 270 },
                font: { size: '15px', fontFamily: 'Segoe UI', fontStyle: 'Bold' }, color: '#666666'
            }, {
                value: 'KM / H',
                position: { x: 200, y: 290 },
                font: { size: '12px', fontFamily: 'Segoe UI', fontStyle: 'Normal' }, color: '#666666'
            }
        ];
    }

    setMeter() {
        window['timer2'] = {};
        if (window['currentValue'] == undefined) {
            window['currentValue'] = 0;
            window['isSetValue'] = true;
        }
        if (window['isSetValue']) {
            if (window['currentValue'] < 75) {
                window['currentValue'] = window['currentValue'] + 1;
            }
            if (window['currentValue'] >= 75) {
                window['isSetValue'] = false;
                window.clearInterval(window['timer1']);
                window['timer2'] = window.setInterval(window['obj'].decreaseMeter, 70);
            }
            let speed = $('#SpeedGauge').data('ejCircularGauge');
            if (speed != undefined) {
                speed.model.scales[0].pointers[0].value = window['currentValue'];
                speed.model.scales[0].customLabels[0].value = window['currentValue'].toFixed(0);
                speed['refresh']();
            }
        }
    }

    decreaseMeter() {
        if (!window['isSetValue']) {
            window.clearInterval(window['timer1']);
            if (window['currentValue'] > 0) {
                window['currentValue'] = window['currentValue'] - 1;

            }
            if (window['currentValue'] <= 0) {
                window['isSetValue'] = true;
                window.clearInterval(window['timer2']);
                window['timer1'] = window.setInterval(window['obj'].setMeter, 70);
            }
            let speed = $('#SpeedGauge').data('ejCircularGauge');
            if (speed != undefined) {
                speed.model.scales[0].pointers[0].value = window['currentValue'];
                speed.model.scales[0].customLabels[0].value = window['currentValue'].toFixed(0);
                speed['refresh']();
            }
        }
    }

    complete() {
        window['timer1'] = {};
        window['obj'] = this;
        window['timer1'] = window.setInterval(this.setMeter, 70);
    }
}
