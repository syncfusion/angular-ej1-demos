import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';
declare var ej: any;

@Component({
  selector: 'ej-app',
  templateUrl: './chartTypes.component.html',
  styleUrls: ['./chartTypes.component.css'],
  providers: [PivotDataService]
})
export class ChartTypesComponent {
  public data; rows; columns; values; size; legend; load; primaryYAxis; type; commonSeriesOptions; zooming; value;
  chartType: any;
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
    this.chartType = ['Line', 'Spline', 'Column', 'Area', 'SplineArea', 'StepLine', 'StepArea', 'Pie', 'Bar', 'StackingArea',
                     'StackingColumn', 'StackingBar', 'Pyramid', 'Funnel', 'Doughnut', 'Scatter', 'Bubble'];
    this.value = 'Column';
  }
  onTypeChange(args) {
    let chartTarget: any = $('.e-pivotchart').data('ejPivotChart');
    chartTarget.model['type'] = args.text.toLowerCase();
    chartTarget.model.commonSeriesOptions.type = args.text.toLowerCase();
    if (jQuery.inArray(chartTarget.model['type'], ['line', 'spline', 'area', 'splinearea', 'stepline', 'steparea', 'stackingarea', 'scatter']) > -1) {
        chartTarget.model.commonSeriesOptions['marker'] = {
            shape: ej.PivotChart.SymbolShapes.Circle,
            size: { height: 12, width: 12 },
            visible: true, connectorLine: { height: 30, type: 'line' },
            border: { width: 3, color: 'white' }
        };
    }   else if (jQuery.inArray(chartTarget.model['type'], ['funnel', 'pyramid']) > -1) {
        chartTarget.model.commonSeriesOptions['marker'] = {
            dataLabel: {
                visible: true,
                shape: 'none',
                font: { color: 'white', size: '12px', fontWeight: 'lighter' }
            }
        };
    }   else { chartTarget.model.commonSeriesOptions['marker'] = { visible: false }; }
    if (chartTarget.model['type'] == 'pyramid' || chartTarget.model['type'] == 'funnel') {
        chartTarget.model.legend.rowCount = 1;
    }   else { chartTarget.model.legend.rowCount = 2; }
    if (jQuery.inArray(chartTarget.model['type'], ['pie', 'doughnut']) > -1) {
        chartTarget.model.commonSeriesOptions['explode'] = true;
    }   else { chartTarget.model.commonSeriesOptions['explode'] = false; }
    let msg: any = { 'JsonRecords': JSON['stringify'](chartTarget['getJSONRecords']()), 'OlapReport': chartTarget['getOlapReport']() };
    $('.e-pivotchart').ejPivotChart('renderControlSuccess', msg);
  }
}
