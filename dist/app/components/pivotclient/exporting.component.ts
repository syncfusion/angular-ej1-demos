import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';
declare var ej: any;

@Component({
  selector: 'ej-app',
  templateUrl: './exporting.component.html',
  styleUrls: ['./exporting.component.css'],
  providers: [PivotDataService]
})
export class ExportingComponent {
  public data; cube; catalog; rows; columns; exportOptions; value; Export; values; title;
  constructor(public pivotdataservice: PivotDataService) {
    this.title = 'OLAP Browser';
    this.data = pivotdataservice.pivot_datacube();
    this.cube = pivotdataservice.pivot_cube();
    this.catalog = pivotdataservice.pivot_catelog();
    this.rows = pivotdataservice.pivot_Olaprows();
    this.columns = pivotdataservice.pivot_Olapcolumns();
    this.values = pivotdataservice.pivot_Olapvalues();
    this.Export = 'Export';
    this.exportOptions = ['chartandgrid', 'chartonly', 'gridonly'];
    this.value = 'chartandgrid';
  }
  onChange(args) {
    let pClientObj = $('.e-pivotclient').data('ejPivotClient');
    let dropDownObj = $('#exportOptions').data('ejDropDownList');
    pClientObj.model.clientExportMode = dropDownObj['selectedTextValue'].toLowerCase();
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
}
