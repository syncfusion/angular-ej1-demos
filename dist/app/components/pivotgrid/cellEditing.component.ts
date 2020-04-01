import { Component, ViewEncapsulation } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './cellEditing.component.html',
  styleUrls: ['./cellEditing.component.css'],
  encapsulation : ViewEncapsulation.None,
  providers: [PivotDataService]
})
export class CellEdiitngComponent {
  public data; rows; columns; values; Reset;
  constructor(public pivotdataservice: PivotDataService) {
    this.data = pivotdataservice.pivot_data();
    this.rows = pivotdataservice.pivot_rows();
    this.columns = pivotdataservice.pivot_columns();
    this.values = pivotdataservice.pivot_values();
    this.Reset = 'Reset';
  }
  onReset(args) {
      let pivotGrid = $('.e-pivotgrid').data('ejPivotGrid');
      pivotGrid.refreshPivotGrid();
  }
}
