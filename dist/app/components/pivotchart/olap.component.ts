import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './olap.component.html',
  styleUrls: ['./olap.component.css'],
  providers: [PivotDataService]
})
export class OlapComponent {
  public data; cube; catalog; rows; columns; values; size; legend; load; primaryXAxis; primaryYAxis; type; commonSeriesOptions; zooming;
  constructor(public pivotdataservice: PivotDataService) {
    this.data = pivotdataservice.pivot_datacube();
    this.cube = pivotdataservice.pivot_cube();
    this.catalog = pivotdataservice.pivot_catelog();
    this.rows = pivotdataservice.pivot_Olaprows();
    this.columns = pivotdataservice.pivot_Olapcolumns();
    this.values = pivotdataservice.pivot_Olapvalues();
    this.size = pivotdataservice.size();
    this.legend = pivotdataservice.legend();
    this.load = 'loadTheme';
    this.commonSeriesOptions = pivotdataservice.commonSeriesOptions();
    this.primaryYAxis = pivotdataservice.primaryYAxisOlap();
    this.primaryXAxis = pivotdataservice.primaryXAxis();
    this.type = 'column';
    this.zooming = pivotdataservice.zooming();
  }
}
