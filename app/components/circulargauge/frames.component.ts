import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './frames.component.html',
    providers: [ChartDataService]
})
export class FramesComponent {
    @ViewChild('gauge') gauge: EJComponents<any, any>;
    @ViewChild('startAngle') startAngle: EJComponents<any, any>;
    @ViewChild('sweepAngle') sweepAngle: EJComponents<any, any>;
    @ViewChild('frameStartAngle') frameStartAngle: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
    }


    onchange(args) {
        if (args.type == 'select' && args.text == 'Semi - Circular') {
            this.frameStartAngle.widget.option('enabled', true);
            this.frameStartAngle.widget.option('selectedItemIndex', 2);
            this.gauge.widget.model.frame.frameType = 'halfcircle';
            this.gauge.widget.model.frame.halfCircleFrameStartAngle = 180;
            this.gauge.widget.model.scales[0].startAngle = 180;
            this.gauge.widget.model.scales[0].sweepAngle = 180;
            this.gauge.widget.redraw();
            this.startAngle.widget.option('value', 180);
            this.startAngle.widget.option('enabled', false);
            this.sweepAngle.widget.option('maxValue', 180);
            this.sweepAngle.widget.option('value', 180);
        }else if (args.type == 'select' && args.text == 'Full - Circular') {
            this.frameStartAngle.widget.option('enabled', false);
            this.gauge.widget.model.frame.frameType = 'fullcircle';
            this.gauge.widget.model.scales[0].startAngle = 122;
            this.gauge.widget.model.scales[0].sweepAngle = 296;
            this.gauge.widget.redraw();
            this.startAngle.widget.option('enabled', true);
            this.startAngle.widget.option('value', 122);
            this.sweepAngle.widget.option('value', 296);
            this.sweepAngle.widget.option('maxValue', 360);
        }else if (args.type == 'select' && args.text == 'Far') {
            for (let i = 0; i < this.gauge.widget.model.scales[0].ranges.length; i++) {
               this.gauge.widget.model.scales[0].ranges[i].placement = 'far';
            }
           this.gauge.widget.redraw();
        }else if (args.type == 'select' && args.text == 'Near') {
              for (let i = 0; i < this.gauge.widget.model.scales[0].ranges.length; i++) {
                this.gauge.widget.model.scales[0].ranges[i].placement = 'near';
            }
             this.gauge.widget.redraw();
        }else if (args.type == 'select') {
            this.gauge.widget.model.frame.halfCircleFrameStartAngle = parseInt(args.text);
            this.gauge.widget.model.frame.halfCircleFrameEndAngle = parseInt(args.text) + 180;
            this.gauge.widget.model.scales[0].startAngle = parseInt(args.text);
            this.gauge.widget.model.scales[0].sweepAngle = 180;
             this.gauge.widget.redraw();
            this.startAngle.widget.option('value', parseInt(args.text));
            this.sweepAngle.widget.option('value', 180);
        }else if (!ej.isNullOrUndefined(args.isChecked)) {
            this.gauge.widget.model.scales[0].direction = args.isChecked ? 'clockwise' : 'counterclockwise';
             this.gauge.widget.redraw();
        }else if (args.id == 'rangeDistance') {
            for (let i = 0; i < this.gauge.widget.model.scales[0].ranges.length; i++) {
            this.gauge.widget.model.scales[0].ranges[i].distanceFromScale = args.value;
            }
            this.gauge.widget.redraw();
        }else if (args.id == 'startAngle') {
            this.gauge.widget.model.scales[0].startAngle = args.value;
             this.gauge.widget.redraw();
        }else if (args.id == 'sweepAngle') {
            this.gauge.widget.model.scales[0].sweepAngle = args.value;
             this.gauge.widget.redraw();
        }
    }
}
