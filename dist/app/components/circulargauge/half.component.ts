import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './half.component.html',
    providers: [ChartDataService]
})
export class HalfComponent {
    frameVal: any;
    pointerText: any;
    scales: any[];
    data: any[];
    @ViewChild('gauge') gauge: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.data = ['center', 'topright', 'topleft', 'topcenter', 'middleleft', 'middleright', 'bottomleft', 'bottomright', 'bottomcenter'];
        this.frameVal = {
            frameType: 'halfcircle', halfCircleFrameStartAngle: 180, halfCircleFrameEndAngle: 360
        };
        this.scales = [
            {
                showRanges: true,
                startAngle: 180, sweepAngle: 180, radius: 130, showScaleBar: true,
                size: 10, backgroundColor: '#CBCFCE', border: { color: '#FEA501', width: 2 },
                maximum: 120, majorIntervalValue: 20, minorIntervalValue: 10,
                pointers: [{
                    value: 70,
                    showBackNeedle: false,
                    length: 85,
                    width: 10,

                    backgroundColor: '#FEA501',
                    border: { color: '#FEA501' }
                }],
                pointerCap: {
                    radius: 10,
                    backgroundColor: '#0000F0',
                    borderColor: '#262F36',
                    borderWidth: 2,
                },
                ticks: [{
                    type: 'major',
                    distanceFromScale: 0,
                    height: 16,
                    width: 3, color: '#FEA501'
                }, { type: 'minor', height: 8, width: 2, distanceFromScale: 0, color: '#FEA501' }],
                labels: [{
                    color: 'Red', distanceFromScale: 0, autoAngle: true,
                }],
                ranges: [{
                    distanceFromScale: 30,
                    startValue: 0,
                    endValue: 70,
                    backgroundColor: '#0000F0',
                    border: { color: '#0000F0', width: 0 }
                }]
            }
        ];
    }

    onchange(args) {
        if (args.id == 'distanceFromCorner') {
            this.gauge.widget.option('distanceFromCorner', args.value);
        } else if (args.type == 'select') {
            this.gauge.widget.model.gaugePosition = args.value;
            this.gauge.widget.refresh();
        } else if (args.type == 'change') {
            this.gauge.widget.option('scales', [{ labels: [{ autoAngle: args.isChecked }] }]);
        }
        this.gauge.widget.redraw();
    }
    complete(args) {
       args.object.canvasEl[0].style.border = '1px solid';
    }
}
