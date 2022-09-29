import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './scale.component.html',
    providers: [ChartDataService]
})
export class ScaleComponent {
    @ViewChild('gauge') gauge: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
    }

    onchange(args) {
        let gaugeval = this.gauge;
        if (args.id == 'scalesize') {
            gaugeval.widget.setScaleBarSize(0, args.value);
        } else if (args.id == 'scaleradius') {
            gaugeval.widget.setScaleRadius(0, args.value);
        } else if (args.id == 'borderwidth') {
            gaugeval.widget.setScaleBorderWidth(0, args.value);
        } else if (args.text == 'clockwise') {
            gaugeval.widget.setScaleDirection(0, args.text);
        } else if (args.text == 'counterclockwise') {
            gaugeval.widget.setScaleDirection(0, args.text);
        }
    }

    pointerchange(args) {
        let pointerval = this.gauge;
        pointerval.widget.setPointerValue(0, 0, args.value);
    }
}
