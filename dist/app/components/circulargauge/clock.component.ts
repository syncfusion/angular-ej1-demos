import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './clock.component.html',
    providers: [ChartDataService]
})
export class ClockComponent {
    segment: any;
    position: any;
    item: any[];
    @ViewChild('clock') chart: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.segment = {
            width: 1,
            spacing: 0,
            color: '#8c8c8c'
        };
        this.item = [
            {
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
            }
        ];
        this.position = {
            x: 52, y: 52
        };
    }

    labelDraw(args) {
        if (args.labelValue == 0) {
            args.style.textValue = '';
        } else if (args.labelValue == 12 || args.labelValue == 3 || args.labelValue == 6 || args.labelValue == 9) {
            args.style.font = 'Bold 20px Segoe UI';
        }
    }

    complete(sender) {
        window.setInterval(function () {
            let estDay: any, estHours: any;
            let time: any = new Date();
            let utcHours: any = time.getUTCHours();
            let utcMinutes: any = time.getUTCMinutes();
            let utcSeconds: any = time.getUTCSeconds();
            if (utcHours - 5 < 0) {
                estHours = (utcHours - 5 + 24);
            } else {
                estHours = (utcHours - 5);
            }
            if (estHours > 12) {
                estDay = 'PM';
                estHours = estHours - 12;
            } else {
                estDay = 'AM';
            }

            utcSeconds = (utcSeconds / 60) * 12;
            utcMinutes = (utcMinutes / 60) * 12 + utcSeconds / 60;
            if (estHours == 12) {
                estHours = 0;
            }
            estHours = estHours + (utcMinutes / 12) + 1;
          //  let estText: any = parseInt(estHours) == 0 ? 12 : parseInt(estHours);
           // let utcmin: any = (parseInt(time.getUTCMinutes()) < 10) ? '0' + parseInt(time.getUTCMinutes()) : parseInt(time.getUTCMinutes());
           // let estTime: any = 'EST Time : ' + estText + ':' + utcmin + ':' + parseInt(time.getUTCSeconds()) + ' ' + estDay;
            let clockgauge = $('#clock').data('ejCircularGauge');
            if (clockgauge != undefined) {
                clockgauge.model.scales[0].pointers[0].value = estHours;
                clockgauge.model.scales[0].pointers[1].value = utcMinutes;
                clockgauge.model.scales[0].pointers[2].value = utcSeconds;
                clockgauge['refresh']();
            }
        }, 1);
    }




}
