import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';
declare var ej: any;

@Component({
  selector: 'ej-app',
  templateUrl: './exporting.component.html',
  styleUrls: ['./relational.component.css'],
  providers: [PivotDataService]
})
export class ExportingComponent {
  public data; rows; columns; values; Export; exportOptions; value;
  constructor(public pivotdataservice: PivotDataService) {
    this.data = pivotdataservice.pivot_data();
    this.rows = pivotdataservice.pivot_rows();
    this.columns = pivotdataservice.pivot_columns();
    this.values = pivotdataservice.pivot_values();
    this.Export = 'Export';
    this.exportOptions = ['Excel', 'Word', 'PDF', 'CSV'];
    this.value = 'Excel';
  }
  onChange(args) {
    let pGridObj = $('.e-pivotgrid').data('ejPivotGrid');
    let rdbRelational = $('#rdbRelational').data('ejRadioButton'); let rdbOlap = $('#rdbOlap').data('ejRadioButton');
    $(pGridObj.element).html('');
    pGridObj.model.operationalMode = 'clientmode';
    let pivotdataSource = { data: this.data, cube: '', rows: [{ fieldName: 'Country', fieldCaption: 'Country' }, { fieldName: 'State', fieldCaption: 'State' }],
    columns: [{ fieldName: 'Product', fieldCaption: 'Product' }], values: [{ fieldName: 'Amount', fieldCaption: 'Amount' }, { fieldName: 'Quantity', fieldCaption: 'Quantity' }], filters: [] };
    let olapDataSource = { data: '//bi.syncfusion.com/olap/msmdpump.dll', catalog: 'Adventure Works DW 2008 SE', cube: 'Adventure Works', rows: [{ fieldName: '[Date].[Fiscal]' }],
    columns: [{ fieldName: '[Customer].[Customer Geography]' }], values: [{ measures: [{ fieldName: '[Measures].[Internet Sales Amount]' }], axis: 'columns' }], filters: [] };
    pGridObj.model.dataSource = rdbRelational.model.checked ? pivotdataSource : rdbOlap.model.checked ? olapDataSource : pivotdataSource;
    pGridObj.model.url = '';
    pGridObj['_load']();
  }
  ExportBtnClick(args) {
    let pGridObj: any = $('.e-pivotgrid').data('ejPivotGrid');
    let dropDownObj = $('#exportOptions').data('ejDropDownList');
    let exportOption = dropDownObj['selectedTextValue'].toLowerCase();
    if (exportOption == 'excel') {
        pGridObj.exportPivotGrid('//js.syncfusion.com/ejservices/api/PivotGrid/Olap/ExcelExport', 'fileName');
    } else if (exportOption == 'word') {
        pGridObj.exportPivotGrid('//js.syncfusion.com/ejservices/api/PivotGrid/Olap/WordExport', 'fileName');
    } else if (exportOption == 'pdf') {
        pGridObj.exportPivotGrid('//js.syncfusion.com/ejservices/api/PivotGrid/Olap/PDFExport', 'fileName');
    } else {
        pGridObj.exportPivotGrid('//js.syncfusion.com/ejservices/api/PivotGrid/Olap/CSVExport', 'fileName');
    }
  }
}
