import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './olap.component.html',
  styleUrls: ['./olap.component.css'],
  providers: [PivotDataService]
})
export class OlapComponent {
  public data; cube; catalog; rows; columns; values; scales;
  constructor(public pivotdataservice: PivotDataService) {
    this.data = pivotdataservice.pivot_datacube();
    this.cube = pivotdataservice.pivot_cube();
    this.catalog = pivotdataservice.pivot_catelog();
    this.rows = pivotdataservice.pivot_gaugerows();
    this.columns = pivotdataservice.pivot_gaugecolumns();
    this.values = pivotdataservice.pivot_gaugevalues();
    this.scales = pivotdataservice.scales();
  }
}
