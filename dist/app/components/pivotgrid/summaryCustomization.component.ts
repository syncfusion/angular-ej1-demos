import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';
declare let ej: any;

@Component({
  selector: 'ej-app',
  templateUrl: './summaryCustomization.component.html',
  styleUrls: ['./relational.component.css'],
  providers: [PivotDataService]
})
export class SummaryCustomizatioComponent {
  public data; rows; columns; values; Export; dataValue; watermarkText;
  constructor(public pivotdataservice: PivotDataService) {
    this.data = pivotdataservice.pivot_data();
    this.rows = pivotdataservice.pivot_rows();
    this.columns = pivotdataservice.pivot_columns();
    this.values = pivotdataservice.pivot_values();
    this.Export = 'Export';
    this.dataValue = ['Date', 'Product', 'State', 'Country'];
    this.watermarkText = 'Hide SubTotals';
  }
  renderPivotGrid(args) {
    let pivotGrid = $('.e-pivotgrid').data('ejPivotGrid');
    let rdbRelational = $('#rdbRelational').data('ejRadioButton'); let rdbOlap = $('#rdbOlap').data('ejRadioButton');
    let ddlTarget = $('#dataValue').data('ejDropDownList');
    let rdbRowHide = $('#hiderowgdtot').data('ejRadioButton'); let rdbColumnHide = $('#hidecolumngdtot').data('ejRadioButton');
    let pivotdataSource = { data: this.data, cube: '', rows: [{ fieldName: 'Country', fieldCaption: 'Country' }, { fieldName: 'State', fieldCaption: 'State' }],
    columns: [{ fieldName: 'Product', fieldCaption: 'Product' }], values: [{ fieldName: 'Amount', fieldCaption: 'Amount' }, { fieldName: 'Quantity', fieldCaption: 'Quantity' }], filters: [] };
    let olapDataSource = { data: '//bi.syncfusion.com/olap/msmdpump.dll', catalog: 'Adventure Works DW 2008 SE', cube: 'Adventure Works', rows: [{ fieldName: '[Date].[Fiscal]' }],
    columns: [{ fieldName: '[Customer].[Customer Geography]' }], values: [{ measures: [{ fieldName: '[Measures].[Internet Sales Amount]' }], axis: 'columns' }], filters: [] };
    ddlTarget.unCheckAll();
    $(pivotGrid.element).html('');
    if (rdbRelational.model.checked) {
        $('.sourcefield').css('display', '');
    }   else {
        $('.sourcefield').css('display', 'none');
    }
    pivotGrid.model.dataSource = rdbRelational.model.checked ? pivotdataSource : rdbOlap.model.checked ? olapDataSource : pivotdataSource;
    pivotGrid.model.enableGroupingBar = true;
    if (rdbRowHide.model.checked) {
        pivotGrid.model.enableColumnGrandTotal = pivotGrid.model.enableGrandTotal = true;
        pivotGrid.model.enableRowGrandTotal = false;
    }   else if (rdbColumnHide.model.checked) {
        pivotGrid.model.enableRowGrandTotal = pivotGrid.model.enableGrandTotal = true;
        pivotGrid.model.enableColumnGrandTotal = false;
    }   else {
        pivotGrid.model.enableRowGrandTotal = pivotGrid.model.enableColumnGrandTotal = true;
        pivotGrid.model.enableGrandTotal = false;
    }
    pivotGrid['_currentReportItems'] = [];
    pivotGrid['_load']();
  }
  onChange(args) {
    let pivotGrid = $('.e-pivotgrid').data('ejPivotGrid');
    let rdbRelational = $('#rdbRelational').data('ejRadioButton');
    let selectedValues = args.text.split(',');
    if (rdbRelational.model.checked) {
        if (pivotGrid.model.dataSource && pivotGrid.model.dataSource.rows && pivotGrid.model.dataSource.rows['length'] > 0) {
            $.each(pivotGrid.model.dataSource.rows, function (e, item) { if (item.fieldName.length > 0) { item['showSubTotal'] = true; } });
        }
        if (pivotGrid.model.dataSource && pivotGrid.model.dataSource.columns && pivotGrid.model.dataSource.columns['length'] > 0) {
            $.each(pivotGrid.model.dataSource.columns, function (e, item) { if (item.fieldName.length > 0) { item['showSubTotal'] = true; } });
        }
        $.each(selectedValues, function (e, selectedValue) {
            if (pivotGrid.model.dataSource && pivotGrid.model.dataSource.rows && pivotGrid.model.dataSource.rows['length'] > 0) {
                $.each(pivotGrid.model.dataSource.rows, function (e, item) { if (item.fieldName.length > 0 && item.fieldName == selectedValue) { item['showSubTotal'] = false; } });
            }
            if (pivotGrid.model.dataSource && pivotGrid.model.dataSource.columns && pivotGrid.model.dataSource.columns['length'] > 0) {
                $.each(pivotGrid.model.dataSource.columns, function (e, item) { if (item.fieldName.length > 0 && item.fieldName == selectedValue) { item['showSubTotal'] = false; } });
            }
        });
        pivotGrid['_populatePivotGrid']();
    }
  }
}
