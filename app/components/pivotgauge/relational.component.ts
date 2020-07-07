import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './relational.component.html',
  styleUrls: ['./relational.component.css'],
  providers: [PivotDataService]
})
export class RelationalComponent {
  public data; rows; columns; values; scales;
  constructor(public pivotdataservice: PivotDataService) {
    this.data = pivotdataservice.pivot_data();
    this.rows = pivotdataservice.pivot_rows();
    this.columns = pivotdataservice.pivot_columns();
    this.values = pivotdataservice.pivot_chartvalues();
    this.scales = pivotdataservice.scales();
  }
}
