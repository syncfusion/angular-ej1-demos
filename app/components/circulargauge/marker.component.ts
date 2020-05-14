import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './marker.component.html',
    providers: [ChartDataService]
})
export class MarkerComponent {
    frame: any;
    data: any[];
    pointerText: any;
    customLabels: any[];
    @ViewChild('gauge') gauge: EJComponents<any, any>;
    @ViewChild('animationSpeed') slider: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.frame = {
            frameType: 'halfcircle', frameStartAngle: 180, frameEndAngle: 360
        };
        this.data = ['rectangle', 'triangle', 'ellipse', 'diamond', 'pentagon', 'circle', 'slider', 'pointer', 'wedge', 'trapezoid', 'roundedrectangle'];
        this.pointerText = {
            showValue: true, distance: -5, color: 'Red', opacity: 1, angle: 0,
            font: {
                size: '15px',
                fontStyle: 'Normal',
                fontFamily: 'Arial',

            }
        };
        this.customLabels = [
            {
                value: '', font: { size: '25px', fontFamily: 'Arial', fontStyle: 'Bold' },
                position: { x: 200, y: 150 }, color: '#8c8c8c'
            }
        ];
    }
    ondrawCustomLabel(args) {

        args.style.textValue = parseInt(args.model.scales[0].pointers[0].value).toFixed(2).toString();
    }

    onchange(args) {
        if (args.type == 'select') {
            this.gauge.widget.model.scales[0].pointers[0].markerType = args.value;
        }else if (!ej.isNullOrUndefined(args.isChecked)) {
            this.slider.widget.option('enabled', args.isChecked);
            this.gauge.widget.model.enableAnimation = args.isChecked;
        }else if (args.id == 'pointerWidth') {
            this.gauge.widget.model.scales[0].pointers[0].width = args.value;
        }else if (args.id == 'pointerLength') {
            this.gauge.widget.model.scales[0].pointers[0].length = args.value;
        }else if (args.id == 'animationSpeed') {
            this.gauge.widget.model.animationSpeed = args.value;
        }else if (args.id == 'distanceFromScale') {
            this.gauge.widget.model.scales[0].pointers[0].distanceFromScale = args.value;
        }else if (args.id == 'pointerValue') {
            this.gauge.widget.model.scales[0].pointers[0].value = args.value;
        }
        this.gauge.widget.refresh();
    }
}
