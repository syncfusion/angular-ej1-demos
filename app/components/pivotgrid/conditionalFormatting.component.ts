import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './conditionalFormatting.component.html',
  styleUrls: ['./relational.component.css'],
  providers: [PivotDataService]
})
export class ConditionalFormattingComponent {
  public data; rows; columns; values; Apply; Reset;
  constructor(public pivotdataservice: PivotDataService) {
    this.data = pivotdataservice.pivot_data();
    this.rows = pivotdataservice.pivot_rows();
    this.columns = pivotdataservice.pivot_columns();
    this.values = pivotdataservice.pivot_values();
    this.Apply = 'Apply';
    this.Reset = 'Reset';
  }
  onConFormat(args) {
      let pivotGrid = $('.e-pivotgrid').data('ejPivotGrid');
      if (pivotGrid.model.enableConditionalFormatting) {
        pivotGrid['openConditionalFormattingDialog']();
      }
  }
  onReset(args) {
      let pivotGridObj = $('.e-pivotgrid').data('ejPivotGrid');
      pivotGridObj['_removeCellFormatting'](true, false);
      pivotGridObj['_list'] = ['Add New'];
  }
}
