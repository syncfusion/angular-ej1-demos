import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './numberFormat.component.html',
  styleUrls: ['./relational.component.css'],
  providers: [PivotDataService]
})
export class NumberFormatComponent {
  public data; rows; columns; values; numberFormat; value;
  constructor(public pivotdataservice: PivotDataService) {
    this.data = pivotdataservice.pivot_data();
    this.rows = pivotdataservice.pivot_rows();
    this.columns = pivotdataservice.pivot_columns();
    this.values = pivotdataservice.pivot_chartvalues();
    this.numberFormat = ['Decimal', 'Currency', 'Percentage', 'Number', 'Date', 'Time', 'Scientific', 'Accounting', 'Fraction'];
    this.value = 'Decimal';
  }
  onNumberFormatChange(args) {
    let pivotGrid = $('.e-pivotgrid').data('ejPivotGrid');
    if (pivotGrid.model.dataSource && pivotGrid.model.dataSource.values) {
      for (let i = 0; i < pivotGrid.model.dataSource.values['length']; i++) {
        pivotGrid.model.dataSource.values[i].format = args.text.toLowerCase();
      }
    }
    pivotGrid['_populatePivotGrid']();
  }
}
