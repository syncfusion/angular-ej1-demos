import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './pointer.component.html',
  styleUrls: ['./olap.component.css'],
  providers: [PivotDataService]
})
export class PointerComponent {
   public data; cube; catalog; rows; columns; values; scales; radValue; radMinValue; radMaxValue; sizeValue; sizeMinValue; sizeMaxValue; borValue; borMinValue; borMaxValue;
   needleValue; needleMinValue; needleMaxValue; capValue; capMinValue; capMaxValue; needlestyle; markerstyle; value; markerValue;
  constructor(public pivotdataservice: PivotDataService) {
    this.data = pivotdataservice.pivot_datacube();
    this.cube = pivotdataservice.pivot_cube();
    this.catalog = pivotdataservice.pivot_catelog();
    this.rows = pivotdataservice.pivot_gaugerows();
    this.columns = pivotdataservice.pivot_gaugecolumns();
    this.values = pivotdataservice.pivot_gaugevalues();
    this.scales = pivotdataservice.scales();
    this.radValue = 7;
    this.radMinValue = 2;
    this.radMaxValue = 15;
    this.sizeValue = 125;
    this.sizeMinValue = 50;
    this.sizeMaxValue = 130;
    this.borValue = 15;
    this.borMinValue = 10;
    this.borMaxValue = 30;
    this.needleValue = 19;
    this.needleMinValue = 10;
    this.needleMaxValue = 20;
    this.capValue = 12;
    this.capMinValue = 9;
    this.capMaxValue = 15;
    this.needlestyle = ['Triangle', 'Trapezoid', 'Arrow', 'Rectangle'];
    this.markerstyle = ['Diamond', 'Rectangle', 'Triangle', 'Ellipse', 'Pentagon', 'Circle', 'Slider', 'Pointer', 'Wedge', 'Trapezoid', 'RoundedRectangle'];
    this.value = 'Triangle';
    this.markerValue = 'Diamond';
  }
  onPointerchange(args) {
    let pivotGauges = $('.e-pivotgauge').find('.e-circulargauge');
    $.each(pivotGauges, function (index, value) {
        let gaugeval: any = $('#' + value.id).data('ejCircularGauge');
        for (let i = 0; i <= 2; i++) {
            gaugeval['setNeedleStyle'](0, 0, args.text.toLowerCase());
        }
    });
  }
  onMarkerchange(args) {
    let pivotGauges = $('.e-pivotgauge').find('.e-circulargauge');
    $.each(pivotGauges, function (index, value) {
        let gaugeval: any = $('#' + value.id).data('ejCircularGauge');
        for (let i = 0; i <= 2; i++) {
            gaugeval['setMarkerStyle'](0, 1, args.text.toLowerCase());
        }
    });
  }
  onchange(args) {
    let pivotGauges = $('.e-pivotgauge').find('.e-circulargauge');

    if (args.id == 'pointerlength') {
        $.each(pivotGauges, function (index, value) {
            let gaugeval: any = $('#' + value.id).data('ejCircularGauge');
            for (let i = 0; i <= 2; i++) {
                gaugeval['setPointerLength'](0, 0, args.value);
            }
        });
    }   else if (args.id == 'pointerwidth') {
        $.each(pivotGauges, function (index, value) {
            let gaugeval: any = $('#' + value.id).data('ejCircularGauge');
            for (let i = 0; i <= 2; i++) {
                gaugeval['setPointerWidth'](0, 0, args.value);
            }
        });
    }   else if (args.id == 'markerwidth') {
        $.each(pivotGauges, function (index, value) {
            let gaugeval: any = $('#' + value.id).data('ejCircularGauge');
            for (let i = 0; i <= 2; i++) {
                gaugeval['setPointerWidth'](0, 1, args.value);
            }
        });
    }   else if (args.id == 'needlelength') {
        $.each(pivotGauges, function (index, value) {
            let gaugeval: any = $('#' + value.id).data('ejCircularGauge');
            for (let i = 0; i <= 2; i++) {
                gaugeval['setBackNeedleLength'](0, 0, args.value);
            }
        });
    }   else if (args.id == 'pointercapradius') {
        $.each(pivotGauges, function (index, value) {
            let gaugeval: any = $('#' + value.id).data('ejCircularGauge');
            for (let i = 0; i <= 2; i++) {
                gaugeval['setPointerCapRadius'](0, args.value);
            }
        });
    }
  }
}
