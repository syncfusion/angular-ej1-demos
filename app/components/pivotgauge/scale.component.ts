import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './scale.component.html',
  styleUrls: ['./olap.component.css'],
  providers: [PivotDataService]
})
export class ScaleComponent {
  public data; cube; catalog; rows; columns; values; scales; radValue; radMinValue; radMaxValue; sizeValue; sizeMinValue; sizeMaxValue; borValue; borMinValue; borMaxValue; scaledirection; value;
  constructor(public pivotdataservice: PivotDataService) {
    this.data = pivotdataservice.pivot_datacube();
    this.cube = pivotdataservice.pivot_cube();
    this.catalog = pivotdataservice.pivot_catelog();
    this.rows = pivotdataservice.pivot_gaugerows();
    this.columns = pivotdataservice.pivot_gaugecolumns();
    this.values = pivotdataservice.pivot_gaugevalues();
    this.scales = pivotdataservice.scales();
    this.radValue = 150;
    this.radMinValue = 120;
    this.radMaxValue = 170;
    this.sizeValue = 1;
    this.sizeMinValue = 0;
    this.sizeMaxValue = 10;
    this.borValue = 0.5;
    this.borMinValue = 0;
    this.borMaxValue = 5;
    this.scaledirection = ['Clockwise', 'Counterclockwise'];
    this.value = 'Clockwise';
  }
  onchange(args) {
    let pivotGauges = $('.e-pivotgauge').find('.e-circulargauge');
    if (args.id == 'scalesize') {
        $.each(pivotGauges, function (index, value) {
            let gaugeval: any = $('#' + value.id).data('ejCircularGauge');
            for (let i = 0; i <= 2; i++) {
                gaugeval['setScaleBarSize'](0, args.value);
            }
        });

    }   else if (args.id == 'scaleradius') {
        $.each(pivotGauges, function (index, value) {
            let gaugeval: any = $('#' + value.id).data('ejCircularGauge');
            for (let i = 0; i <= 2; i++) {
                gaugeval['setScaleRadius'](0, args.value);
            }
        });
    }   else if (args.id == 'borderwidth') {
        $.each(pivotGauges, function (index, value) {
            let gaugeval: any = $('#' + value.id).data('ejCircularGauge');
            for (let i = 0; i <= 2; i++) {
                gaugeval['setScaleBorderWidth'](0, args.value);
            }
        });
    }   else if (args.text) {
        $.each(pivotGauges, function (index, value) {
            let gaugeval: any = $('#' + value.id).data('ejCircularGauge');
            let direction = args.text == 'Clockwise' ? 'clockwise' : 'counterClockwise';
            for (let i = 0; i <= 2; i++) {
                gaugeval['setScaleDirection'](0, direction);
            }
        });
    }
  }
}
