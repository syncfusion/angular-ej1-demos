import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './relational.component.html',
  styleUrls: ['./relational.component.css'],
  providers: [PivotDataService]
})
export class RelationalComponent {
  public data; rows; columns; values; size; legend; load; primaryYAxis; type; commonSeriesOptions; zooming;
  constructor(public pivotdataservice: PivotDataService) {
    this.data = pivotdataservice.pivot_data();
    this.rows = pivotdataservice.pivot_rows();
    this.columns = pivotdataservice.pivot_columns();
    this.values = pivotdataservice.pivot_chartvalues();
    this.size = pivotdataservice.size();
    this.legend = pivotdataservice.legend();
    this.load = 'loadTheme';
    this.commonSeriesOptions = pivotdataservice.commonSeriesOptions();
    this.primaryYAxis = pivotdataservice.primaryYAxis();
    this.type = 'column';
    this.zooming = pivotdataservice.zooming();
  }
}
