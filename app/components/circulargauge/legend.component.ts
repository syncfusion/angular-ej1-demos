import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './legend.component.html',
    providers: [ChartDataService]
})
export class LegendComponent {
    @ViewChild('gauge') range: EJComponents<any, any>;
    customLabels: any;
    constructor(public chartDataService: ChartDataService) {
    this.customLabels = [
            {
                value: 'Measure of wind speed in km/h', positionType: ej.datavisualization.CircularGauge.CustomLabelPositionType['Outer'],
                font: { fontFamily: 'Segoe UI', fontStyle: 'normal', size: '15px'}
            }
        ];
    }
    onchange1(args) {
     this.range.widget.model.legend.position = args.text.toLowerCase();
     this.range.widget.refresh();
     let pointerLength = this.range.widget.model.scales[0].radius - this.range.widget.model.scales[0].ticks[0].height - (parseInt(this.range.widget.model.scales[0].labels[0].font.size) + 5);
     this.range.widget.setPointerLength(0, 0, pointerLength);
    }
    onchange2(args) {
      this.range.widget.model.legend.alignment = args.text.toLowerCase();
     this.range.widget.refresh();
    }
    onchange3(args) {
     this.range.widget.model.legend.shape = args.text.toLowerCase();
     this.range.widget.refresh();
    }
  }
