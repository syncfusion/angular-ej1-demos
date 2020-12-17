import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './layout.component.html',
  styleUrls: ['./olap.component.css'],
  providers: [PivotDataService]
})
export class LayoutComponent {
  public data; cube; catalog; rows; columns; values; scales; frameType; checkedstatus; checkstatus; value; rowscount; rowValue; colValue;
  constructor(public pivotdataservice: PivotDataService) {
    this.data = pivotdataservice.pivot_datacube();
    this.cube = pivotdataservice.pivot_cube();
    this.catalog = pivotdataservice.pivot_catelog();
    this.rows = pivotdataservice.pivot_gaugerows();
    this.columns = pivotdataservice.pivot_Olapcolumns();
    this.values = pivotdataservice.pivot_gaugevalues();
    this.scales = pivotdataservice.scales();
    this.checkstatus = true;
    this.checkedstatus = true;
    this.frameType = ['Full - Circular', 'Semi - Circular'];
    this.value = 'Full - Circular';
    this.rowscount = ['1', '2', '3'];
    this.rowValue = '2';
    this.colValue = '3';
  }
  onchange(args) {
    let pivotGauge = $('.e-pivotgauge').data('ejPivotGauge');
    if (args.text == 'Semi - Circular') {
        pivotGauge.model['frame']['frameType'] = 'halfcircle';
        pivotGauge.model['frame']['halfCircleFrameStartAngle'] = 180;
        pivotGauge.model.scales[0].startAngle = 180;
        pivotGauge.model.scales[0].sweepAngle = 180;
        pivotGauge.model.scales[0].customLabels[2].position.y = 210;
        pivotGauge['_renderControlSuccess']({ 'PivotRecords': JSON.stringify(pivotGauge.getJSONRecords()), 'OlapReport': pivotGauge.getOlapReport() });
    } else {
        pivotGauge.model['frame']['frameType'] = 'fullcircle';
        pivotGauge.model.scales[0].startAngle = 122;
        pivotGauge.model.scales[0].sweepAngle = 296;
        pivotGauge.model.scales[0].customLabels[2].position.y = 150;
        pivotGauge['_renderControlSuccess']({ 'PivotRecords': JSON.stringify(pivotGauge.getJSONRecords()), 'OlapReport': pivotGauge.getOlapReport() });
    }
  }
  onHeaderLableChange(args) {
    let pivotGauge = $('.e-pivotgauge').data('ejPivotGauge');
    if (!args.model.checked()) {
        pivotGauge.model.showHeaderLabel = false;
        pivotGauge['_renderControlSuccess']({ 'PivotRecords': JSON.stringify(pivotGauge.getJSONRecords()), 'OlapReport': pivotGauge.getOlapReport() });
    } else {
        pivotGauge.model.showHeaderLabel = true;
        pivotGauge['_renderControlSuccess']({ 'PivotRecords': JSON.stringify(pivotGauge.getJSONRecords()), 'OlapReport': pivotGauge.getOlapReport() });
    }
  }
  onToolTipChange(args) {
    let pivotGauge = $('.e-pivotgauge').data('ejPivotGauge');
    if (!args.model.checked()) {
        pivotGauge.model.enableTooltip = false;
        pivotGauge.refresh();
    } else {
        pivotGauge.model.enableTooltip = true;
        pivotGauge['_renderControlSuccess']({ 'PivotRecords': JSON.stringify(pivotGauge.getJSONRecords()), 'OlapReport': pivotGauge.getOlapReport() });
    }
  }
  onrowchange(args) {
    let pivotGauge = $('.e-pivotgauge').data('ejPivotGauge');
    let gaugeColumns = $('#columnscount').data('ejDropDownList');

    if ((args.text != '0' || (gaugeColumns['text'] != 0))) {
        pivotGauge.model.rowsCount = args.text;
        pivotGauge['_renderControlSuccess']({ 'PivotRecords': JSON.stringify(pivotGauge.getJSONRecords()), 'OlapReport': pivotGauge.getOlapReport() });
    }
  }
  oncolumnchange(args) {
    let pivotGauge = $('.e-pivotgauge').data('ejPivotGauge');
    let gaugeRows = $('#rowscount').data('ejDropDownList');
    if ((args.text != '0' || gaugeRows['text'] != 0)) {
        pivotGauge.model.columnsCount = args.text;
        pivotGauge['_renderControlSuccess']({ 'PivotRecords': JSON.stringify(pivotGauge.getJSONRecords()), 'OlapReport': pivotGauge.getOlapReport() });
    }
  }
}
