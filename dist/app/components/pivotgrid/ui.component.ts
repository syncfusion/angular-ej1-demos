import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';
declare var ej: any;

@Component({
  selector: 'ej-app',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css'],
  providers: [PivotDataService]
})
export class UIComponent {
  public data; rows; columns; values;
  constructor(public pivotdataservice: PivotDataService) {
    this.data = pivotdataservice.pivot_data();
    this.rows = pivotdataservice.pivot_rows();
    this.columns = pivotdataservice.pivot_columns();
    this.values = pivotdataservice.pivot_values();
  }
  onChange(args) {
    let relationalRadioBtn = $('#rdbRelational').data('ejRadioButton'); let olapRadioBtn = $('#rdbOlap').data('ejRadioButton');
    let pivotdataSource = {
      data: this.data, cube: '',
      rows: [{ fieldName: 'Country', fieldCaption: 'Country' }, { fieldName: 'State', fieldCaption: 'State' }],
      columns: [{ fieldName: 'Product', fieldCaption: 'Product' }],
      values: [{ fieldName: 'Amount', fieldCaption: 'Amount' }, { fieldName: 'Quantity', fieldCaption: 'Quantity' }],
      filters: []
    };
    let olapDataSource = {
      data: '//bi.syncfusion.com/olap/msmdpump.dll', catalog: 'Adventure Works DW 2008 SE', cube: 'Adventure Works',
      rows: [{ fieldName: '[Date].[Fiscal]' }],
      columns: [{ fieldName: '[Customer].[Customer Geography]' }],
      values: [{ measures: [{ fieldName: '[Measures].[Internet Sales Amount]' }], axis: 'columns' }],
      filters: []
    };
    $('.e-pivotgrid').remove();
    $('.e-pivotschemadesigner').remove();
    let gridPanel = ej.buildTag('div#PivotGrid', '', { height: '500px', width: '55%', 'overflow': 'auto', 'float': 'left', 'display': 'block', 'padding-right': '15px' })[0].outerHTML;
    let gridSchemaPanel = ej.buildTag('div#PivotSchemaDesigner', '', { height: '500px', 'float': 'right', 'display': 'block', 'margin-top': '20px' })[0].outerHTML;
    $(gridPanel).appendTo('.control');
    $(gridSchemaPanel).appendTo('.control');

    $('#PivotGrid').ejPivotGrid({
        dataSource: relationalRadioBtn.model.checked ? pivotdataSource : olapRadioBtn.model.checked ? olapDataSource : pivotdataSource, pivotTableFieldListID: 'PivotSchemaDesigner',
        enableGroupingBar: true
    });
    if (olapRadioBtn.model.checked) {
        $('#PivotSchemaDesigner').ejPivotSchemaDesigner({ olap: { showKPI: false, showNamedSets: true } });
    } else {
        $('#PivotSchemaDesigner').ejPivotSchemaDesigner();
    }
  }
}
