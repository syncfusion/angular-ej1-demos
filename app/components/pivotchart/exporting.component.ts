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
  public data; rows; columns; values; size; legend; load; primaryYAxis; type; commonSeriesOptions; zooming; exportOptions; value; Export;
  constructor(public pivotdataservice: PivotDataService) {
    this.data = pivotdataservice.pivot_data();
    this.rows = pivotdataservice.pivot_rows();
    this.columns = pivotdataservice.pivot_columns();
    this.values = pivotdataservice.pivot_chartvalues();
    this.size = pivotdataservice.size();
    this.legend = pivotdataservice.legend();
    this.load = 'loadTheme';
    this.commonSeriesOptions = pivotdataservice.commonSeriesOptions();
    this.primaryYAxis = pivotdataservice.primaryYAxis();
    this.type = 'column';
    this.zooming = pivotdataservice.zooming();
    this.exportOptions = ['Excel', 'Word', 'PDF', 'PNG', 'EMF', 'GIF', 'JPG', 'BMP'];
    this.value = 'Excel';
    this.Export = 'Export';
  }
  renderPivotChart(args) {
    let chartObj = $('#PivotChart1').data('ejPivotChart');
    let rdbRelational = $('#rdbRelational').data('ejRadioButton');
    $('.e-pivotchart').remove();
    let chartPanel = ej.buildTag('div#PivotChart1', '', { 'float': 'left' })[0].outerHTML;
    $(chartPanel).appendTo('.cols-sample-area');
    chartObj.destroy();
    let pivotdataSource = { data: this.data, cube: '', rows: [{ fieldName: 'Country', fieldCaption: 'Country' },
    { fieldName: 'State', fieldCaption: 'State' }, { fieldName: 'Date', fieldCaption: 'Date' }],
    columns: [{ fieldName: 'Product', fieldCaption: 'Product' }],
    values: [{ fieldName: 'Amount', fieldCaption: 'Amount' }], filters: [] };
    let olapDataSource = { data: '//bi.syncfusion.com/olap/msmdpump.dll', catalog: 'Adventure Works DW 2008 SE',
    cube: 'Adventure Works', rows: [{ fieldName: '[Date].[Fiscal]' }],
    columns: [{ fieldName: '[Customer].[Customer Geography]' }],
    values: [{ measures: [{ fieldName: '[Measures].[Internet Sales Amount]' }], axis: 'columns' }], filters: [] };
    $('#PivotChart1').ejPivotChart({
        dataSource: rdbRelational.model.checked ? pivotdataSource : olapDataSource,
        enableAnimation: true, isResponsive: true,
        type: ej.PivotChart.ChartTypes.Column, tooltip: { visible: true },
        size: { height: '460px', width: '100%' }, legend: { visible: true },
        load: 'loadTheme'
    });
  }
  ExportBtnClick(args) {
    let chartObj: any = $('#PivotChart1').data('ejPivotChart');
    let dropDownObj: any = $('#exportOptions').data('ejDropDownList');
    let exportOption: any = dropDownObj['selectedTextValue'].toLowerCase();
    let mode: any = chartObj.model.operationalMode;
    chartObj.model.operationalMode = ej.PivotChart.OperationalMode.ClientMode;
    switch (exportOption) {
        case 'excel':
            chartObj.exportPivotChart('//js.syncfusion.com/ejservices/api/PivotChart/Olap/ExcelExport', 'sample');
            break;
        case 'word':
            chartObj.exportPivotChart('//js.syncfusion.com/ejservices/api/PivotChart/Olap/WordExport', 'sample');
            break;
        case 'pdf':
            chartObj.exportPivotChart('//js.syncfusion.com/ejservices/api/PivotChart/Olap/PDFExport', 'sample');
            break;
        case 'png':
            chartObj.exportPivotChart('//js.syncfusion.com/ejservices/api/PivotChart/Olap/ImageExport', 'sample', ej.PivotChart.ExportOptions.PNG);
            break;
        case 'emf':
            chartObj.exportPivotChart('//js.syncfusion.com/ejservices/api/PivotChart/Olap/ImageExport', 'sample', ej.PivotChart.ExportOptions.EMF);
            break;
        case 'gif':
            chartObj.exportPivotChart('//js.syncfusion.com/ejservices/api/PivotChart/Olap/ImageExport', 'sample', ej.PivotChart.ExportOptions.GIF);
            break;
        case 'jpg':
            chartObj.exportPivotChart('//js.syncfusion.com/ejservices/api/PivotChart/Olap/ImageExport', 'sample', ej.PivotChart.ExportOptions.JPG);
            break;
        case 'bmp':
            chartObj.exportPivotChart('//js.syncfusion.com/ejservices/api/PivotChart/Olap/ImageExport', 'sample', ej.PivotChart.ExportOptions.BMP);
            break;
    }
    chartObj.model.operationalMode = mode;
  }
}
