import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './hyperlink.component.html',
  styleUrls: ['./relational.component.css'],
  providers: [PivotDataService]
})
export class HyperLinkComponent {
  public data; rows; columns; values; hyperLink;
  constructor(public pivotdataservice: PivotDataService) {
    this.data = pivotdataservice.pivot_data();
    this.rows = pivotdataservice.pivot_rows();
    this.columns = pivotdataservice.pivot_columns();
    this.values = pivotdataservice.pivot_values();
    this.hyperLink = {
      enableValueCellHyperlink: true,
      enableRowHeaderHyperlink: true,
      enableColumnHeaderHyperlink: true,
      enableSummaryCellHyperlink: true
    };
  }
  valueCellClick() {
    /* eslint-disable */
    alert('Value Cell Clicked');
  }
  summaryCellClick() {
    /* eslint-disable */
    alert('Sumary Cell Clicked');
  }
  rowCellClick() {
    /* eslint-disable */
    alert('Row Header Cell Clicked');
  }
  columnCellClick() {
    /* eslint-disable */
    alert('Column Header Cell Clicked');
  }
}
