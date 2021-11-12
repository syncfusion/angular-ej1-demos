import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
selector: 'sd-home',
templateUrl: '/drag.component.html',
providers: [ChartDataService, ChartMobileService]
})
export class DraganddropComponent {
Range: any;
dragData: any;
@ViewChild('dragandrop') chart: EJComponents<any, any>;
constructor(public chartDataService: ChartDataService) {
this.dragData = chartDataService.getDragData();
}
onchartload(sender) {
ChartMobileService.prototype.onchartload(sender);
}

onchange1(sender) {
this.chart.widget.model.commonSeriesOptions.dragSettings.type = sender.text;
this.chart.widget.redraw();
}
onchange2(sender) {
let seriestype = sender.text.toLowerCase();
for (let i = 0; i < this.chart.widget.model.series.length; i++) {
this.chart.widget.model.series[i].type = seriestype;
if (seriestype == 'bar' || seriestype == 'column' || seriestype == 'bubble') {
this.chart.widget.model.commonSeriesOptions.marker.visible = false;
} else if (seriestype == 'scatter') {
this.chart.widget.model.commonSeriesOptions.marker.size.height = 10;
this.chart.widget.model.commonSeriesOptions.marker.size.width = 10;
} else {
this.chart.widget.model.commonSeriesOptions.marker.visible = true;
}
this.chart.widget.redraw();
}
}

onchange3(sender) {
for (let i = 0; i < this.chart.widget.model.series.length; i++) {
if (sender.isChecked) {
this.chart.widget.model.series[i].dragSettings.enable = true;
} else {
this.chart.widget.model.series[i].dragSettings.enable = false;
}
}
this.chart.widget.redraw();
}
}
