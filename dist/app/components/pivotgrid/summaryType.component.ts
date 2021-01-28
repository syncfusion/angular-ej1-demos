import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './summaryType.component.html',
  styleUrls: ['./relational.component.css'],
  providers: [PivotDataService]
})
export class SummaryTypeComponent {
  public data; rows; columns; values; summaryType; value;
  constructor(public pivotdataservice: PivotDataService) {
    this.data = pivotdataservice.pivot_data();
    this.rows = pivotdataservice.pivot_rows();
    this.columns = pivotdataservice.pivot_columns();
    this.values = pivotdataservice.pivot_chartvalues();
    this.summaryType = ['Sum', 'Average', 'Count', 'Min', 'Max'];
    this.value = 'Sum';
  }
  onSummaryTypeChange(args) {
    let pivotGrid = $('.e-pivotgrid').data('ejPivotGrid');
    if (pivotGrid.model.dataSource && pivotGrid.model.dataSource.values) {
      for (let i = 0; i < pivotGrid.model.dataSource.values['length']; i++) {
        pivotGrid.model.dataSource.values[i].summaryType = args.text.toLowerCase();
      }
      pivotGrid['_populatePivotGrid']();
    }
  }
}
