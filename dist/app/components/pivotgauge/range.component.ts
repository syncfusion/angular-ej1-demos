import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './range.component.html',
  styleUrls: ['./olap.component.css'],
  providers: [PivotDataService]
})
export class RangeComponent {
  public data; cube; catalog; rows; columns; values; scales; radValue; radMinValue; radMaxValue; sizeValue; sizeMinValue; sizeMaxValue;
  constructor(public pivotdataservice: PivotDataService) {
    this.data = pivotdataservice.pivot_datacube();
    this.cube = pivotdataservice.pivot_cube();
    this.catalog = pivotdataservice.pivot_catelog();
    this.rows = pivotdataservice.pivot_gaugerows();
    this.columns = pivotdataservice.pivot_gaugecolumns();
    this.values = pivotdataservice.pivot_gaugevalues();
    this.scales = pivotdataservice.scales();
    this.radValue = -5;
    this.radMinValue = -20;
    this.radMaxValue = 0;
    this.sizeValue = 5;
    this.sizeMinValue = 2;
    this.sizeMaxValue = 12;
  }
  onchange(args) {
    let pivotGauges = $('.e-pivotgauge').find('.e-circulargauge');
    if (args.id == 'rangesize') {
        $.each(pivotGauges, function (index, value) {
            let gaugeval: any = $('#' + value.id).data('ejCircularGauge');
            for (let i = 0; i <= 2; i++) {
                gaugeval['setRangeSize'](0, i, args.value);
            }
        });
    } else if (args.id == 'distancefromscale') {
        $.each(pivotGauges, function (index, value) {
            let gaugeval: any = $('#' + value.id).data('ejCircularGauge');
            for (let i = 0; i <= 2; i++) {
                gaugeval['setRangeDistanceFromScale'](0, i, args.value);
            }
        });
    }
  }
}
