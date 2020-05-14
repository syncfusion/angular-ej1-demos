import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './multipleAxes.component.html',
    styleUrls: ['./multipleAxes.component.css'],
    providers: [PivotDataService]
})
export class MultipleAxesComponent {
    public data; cube; catalog; rows; columns; values; size; legend; load; primaryXAxis; primaryYAxis; type; commonSeriesOptions; axes;
    constructor(public pivotdataservice: PivotDataService) {
        this.data = pivotdataservice.pivot_datacube();
        this.cube = pivotdataservice.pivot_cube();
        this.catalog = pivotdataservice.pivot_catelog();
        this.rows = pivotdataservice.pivot_Olaprows();
        this.columns = pivotdataservice.pivot_Olapcolumns();
        this.values = pivotdataservice.pivot_MultipleAxesvalues();
        this.size = pivotdataservice.size();
        this.legend = pivotdataservice.legend();
        this.load = 'loadTheme';
        this.commonSeriesOptions = pivotdataservice.commonSeriesOptions();
        this.primaryYAxis = pivotdataservice.primaryYAxisOlap();
        this.primaryXAxis = pivotdataservice.primaryXAxis();
        this.type = 'column';
        this.axes = pivotdataservice.axes();
    }
    onBeforeRender(args) {
        for (let i: any = 0; i < args.series.length; i++) {
            if (args.series[i].name.indexOf('Internet Sales Amount') > -1) {
                args.series[i].yAxisName = 'yAxisConfig';
                args.series[i].type = 'spline';
                args.series[i].marker.visible = true;
            }
        }
        return args;
    }
}
