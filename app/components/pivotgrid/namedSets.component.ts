import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './namedSets.component.html',
  styleUrls: ['./olap.component.css'],
  providers: [PivotDataService]
})
export class NamedSetsComponent {
  public data; cube; catalog; rows; columns; values; filters;
  constructor(public pivotdataservice: PivotDataService) {
    this.data = pivotdataservice.pivot_datacube();
    this.cube = pivotdataservice.pivot_cube();
    this.catalog = pivotdataservice.pivot_catelog();
    this.rows = pivotdataservice.pivot_Olaprows();
    this.columns = pivotdataservice.pivot_namedsetrows();
    this.values = pivotdataservice.pivot_Olapvalues();
    this.filters = pivotdataservice.pivot_Olapfilters();
  }
}
