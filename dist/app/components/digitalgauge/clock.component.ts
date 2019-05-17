import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './clock.component.html',
    providers: [ChartDataService]
})
export class ClockComponent {
    Item: any;
    constructor(public chartDataService: ChartDataService) {
        this.Item = [{
            segmentSettings: {
                width: 1,
                spacing: 0,
                color: '#8c8c8c'
            },
            characterSettings: {
                opacity: 0.8,
            },
            value: '',
            position: { x: 52, y: 52 }
        }];

    }

    complete(sender) {
        setTimeout(() => {
            this.call();
        }, 1000);
    }

    call() {
        window.setInterval(function () {
            let currentTime: any = new Date();
            let hours: any = currentTime.getHours();
            let minutes: any = currentTime.getMinutes();
            let seconds: any = currentTime.getSeconds();
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            let orighour = hours;
            hours = ((hours + 11) % 12 + 1);
            let v: any = hours + ':' + minutes + ':' + seconds + ' ';
            if (orighour > 11) {
                v += 'PM';
            } else {
                v += 'AM';
            }

            let digiclock = $('#clock').data('ejDigitalGauge');
            if (digiclock != undefined) {
                digiclock.model.items[0].value = v;
                digiclock.refresh();
            }
        });
    }
}
