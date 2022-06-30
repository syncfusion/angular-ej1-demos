import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';
declare var ej: any;

@Component({
  selector: 'ej-app',
  templateUrl: './advancedFiltering.component.html',
  styleUrls: ['./advancedFiltering.component.css'],
  providers: [PivotDataService]
})
export class AdvancedFilteringComponent {
  public data; rows; columns; values; title; reportName = 'Default Report';
  constructor(public pivotdataservice: PivotDataService) {
    this.title = 'Relational Browser';
    this.data = pivotdataservice.pivot_data();
    this.rows = pivotdataservice.pivot_rows();
    this.columns = pivotdataservice.pivot_columns();
    this.values = pivotdataservice.pivot_values();
  }
  saveReportSettings(args) {
    if (args.fetchReportSetting) {
      args.fetchReportSetting.url = '//js.syncfusion.com/demos/ejServices/api/PivotClient/Olap';
    } else if (args.loadReportSetting) {
      args.loadReportSetting.url = '//js.syncfusion.com/demos/ejServices/api/PivotClient/Olap';
    } else {
      args.saveReportSetting.url = '//js.syncfusion.com/demos/ejServices/api/PivotClient/Olap';
    }
    return args;
  }
  export(args) {
    args.url = '//js.syncfusion.com/demos/ejServices/api/PivotClient/Olap/Export';
  }
  onChange(args) {
    let pClientObj = $('.e-pivotclient').data('ejPivotClient');
    let rdbRelational = $('#rdbRelational').data('ejRadioButton'); let rdbOlap = $('#rdbOlap').data('ejRadioButton');
    $(pClientObj.element).html('');
    pClientObj.model.operationalMode = 'clientmode';
    let pivotdataSource = {
      reportName: 'DefaultReport',
      data: this.data, cube: '', rows: [{ fieldName: 'Country', fieldCaption: 'Country' }, { fieldName: 'State', fieldCaption: 'State' }],
      columns: [{ fieldName: 'Product', fieldCaption: 'Product' }], values: [{ fieldName: 'Amount', fieldCaption: 'Amount' }, { fieldName: 'Quantity', fieldCaption: 'Quantity' }], filters: []
    };
    let olapDataSource = {
      reportName: 'DefaultReport', data: '//bi.syncfusion.com/olap/msmdpump.dll', catalog: 'Adventure Works DW 2008 SE', cube: 'Adventure Works', rows: [{ fieldName: '[Date].[Fiscal]' }],
      columns: [{ fieldName: '[Customer].[Customer Geography]' }], values: [{ measures: [{ fieldName: '[Measures].[Internet Sales Amount]' }], axis: 'columns' }], filters: []
    };
    pClientObj.model.dataSource = rdbRelational.model.checked ? pivotdataSource : rdbOlap.model.checked ? olapDataSource : pivotdataSource;
    pClientObj.model.title = rdbRelational.model.checked ? 'Relational Browser' : rdbOlap.model.checked ? 'OLAP Browser' : 'Relational Browser';
    pClientObj.model.url = '';
    pClientObj['_load']();
  }
}
