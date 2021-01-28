import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './needle.component.html',
    providers: [ChartDataService]
})
export class NeedleComponent {
    @ViewChild('gauge') gauge: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
    }

    pointerchange(args) {

        let circular = this.gauge;
        let currentValue = circular.model.scales[0].pointers[0].value;
        let handleValue = Math.round(args.value);
        window['timer'] = setInterval(function pointerchan() {
            if (currentValue < handleValue) {
                currentValue = currentValue + 1;
                circular.widget.setPointerValue(0, 0, currentValue);
            } else if (currentValue > handleValue) {
                currentValue = currentValue - 1;
                circular.widget.setPointerValue(0, 0, currentValue);
            } else if (currentValue == handleValue) {
                window.clearInterval(window['timer']);
            }
        }, 1);
    }

    onchange1(args) {
        let circular = this.gauge;
        circular.widget.setNeedleStyle(0, 0, args.text);
    }

    onchange(args) {
        let circular = this.gauge;

        if (args.id == 'pointerlength') {
            circular.widget.setPointerLength(0, 0, args.value);
        } else if (args.id == 'pointerwidth') {
            circular.widget.setPointerWidth(0, 0, args.value);
        } else if (args.id == 'needlelength') {
            circular.widget.setBackNeedleLength(0, 0, args.value);
        } else if (args.id == 'pointercapradius') {
            circular.widget.setPointerCapRadius(0, args.value);
        }
    }
}
