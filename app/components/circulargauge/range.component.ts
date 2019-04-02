import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './range.component.html',
    providers: [ChartDataService]
})
export class RangeComponent {
    @ViewChild('gauge') gauge: EJComponents<any, any>;
    @ViewChild('startvalue') startvalue: EJComponents<any, any>;
    @ViewChild('endvalue') endvalue: EJComponents<any, any>;
    @ViewChild('rangeid') range: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
    }

    pointerchange(args) {
        let pointerg = this.gauge;
        pointerg.widget.setPointerValue(0, 0, args.value);
    }

    onchange1(args) {
        let startslide = this.startvalue;
        let endslide = this.endvalue;
        let gaugestart = this.gauge;

        if (args.text == 'Range1') {
            startslide.widget.setModel({ maxValue: gaugestart.model.scales[0].ranges[0].startValue, value: gaugestart.model.scales[0].ranges[0].startValue });
            endslide.widget.setModel({ minValue: gaugestart.model.scales[0].ranges[0].endValue, value: gaugestart.model.scales[0].ranges[0].endValue });
        } else if (args.text == 'Range2') {
            startslide.widget.setModel({ maxValue: gaugestart.model.scales[0].ranges[1].endValue, value: gaugestart.model.scales[0].ranges[1].startValue });
            endslide.widget.setModel({ minValue: gaugestart.model.scales[0].ranges[1].startValue, value: gaugestart.model.scales[0].ranges[1].endValue });
        } else if (args.text == 'Range3') {
            startslide.widget.setModel({ maxValue: gaugestart.model.scales[0].ranges[2].endValue, value: gaugestart.model.scales[0].ranges[2].startValue });
            endslide.widget.setModel({ minValue: gaugestart.model.scales[0].ranges[2].startValue, value: gaugestart.model.scales[0].ranges[2].endValue });
        }
    }


    onchange(args) {
        let rangetarget = this.range;
        let target1 = this.gauge;
        let endslide = this.endvalue;
        let startslide = this.startvalue;

        if (args.id == 'startvalue') {
            endslide.widget.setModel({ minValue: args.value });
            target1.widget.setRangeStartValue(0, rangetarget.widget.selectedIndexValue, args.value);
        } else if (args.id == 'endvalue') {
            startslide.widget.setModel({ maxValue: args.value });
            target1.widget.setRangeEndValue(0, rangetarget.widget.selectedIndexValue, args.value);
        }
        if (args.id == 'rangesize') {
            for (let i = 0; i <= 2; i++) {
                target1.widget.setRangeSize(0, i, args.value);
            }
        } else if (args.id == 'distancefromscale') {
            for (let j = 0; j <= 2; j++) {
                target1.widget.setRangeDistanceFromScale(0, j, args.value);
            }
        }
    }

}
