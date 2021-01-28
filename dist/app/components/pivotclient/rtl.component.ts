import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';
declare var ej: any;

@Component({
  selector: 'ej-app',
  templateUrl: './rtl.component.html',
  styleUrls: ['./rtl.component.css'],
  providers: [PivotDataService]
})
export class RTLComponent {
  public data; cube; catalog; rows; columns; values; title;
  constructor(public pivotdataservice: PivotDataService) {
    this.title = 'Olap Browser';
    this.data = pivotdataservice.pivot_datacube();
    this.cube = pivotdataservice.pivot_cube();
    this.catalog = pivotdataservice.pivot_catelog();
    this.rows = pivotdataservice.pivot_Olaprows();
    this.columns = pivotdataservice.pivot_Olapcolumns();
    this.values = pivotdataservice.pivot_Olapvalues();
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
