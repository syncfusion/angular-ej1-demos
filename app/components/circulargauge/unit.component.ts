import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './unit.component.html',
    providers: [ChartDataService]
})
export class UnitComponent {
    @ViewChild('gauge') gauge: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
    }

    onchange(args) {
        let chart = this.gauge;
        if (args.type == 'select' && args.text == 'Kilometer/Hour') {
            chart.widget.model.scales[0].labels[0].unitText = 'KmpH';
        }else if (args.type == 'select' && args.text == 'Meter/Hour') {
            chart.widget.model.scales[0].labels[0].unitText = 'MpH';
        }else if (args.type == 'select' && args.text == 'Voltage/Hour') {
            chart.widget.model.scales[0].labels[0].unitText = 'VpH';
        }
        chart.widget.redraw();
    }
}
