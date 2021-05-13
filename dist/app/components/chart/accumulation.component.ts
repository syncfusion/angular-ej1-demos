import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
templateUrl: '/accumulation.component.html',
providers: [ChartDataService, ChartMobileService]
})
export class AccumulationComponent {
Axes: any;
@ViewChild('accumulate') chart: EJComponents<any, any>;
constructor(public chartDataService: ChartDataService) {
this.Axes = [
{
opposedPosition: true,
name: 'yaxis',
range: { min: null, max: null, interval: null },
majorGridLines: { visible: false }
}
];
}


onchange1(args) {
let value = this.getColorValue(args.text);
this.chart.widget.model.indicators[0].fill = value;
this.chart.widget.redraw();
}

getColorValue(sender: any) {
let val;
switch (sender) {
case 'Red':
val = '#FF0000';
break;
case 'Green':
val = '#009900';
break;
case 'Yellow':
val = '#D8B213';
break;
case 'Blue':
val = '#0000FF';
break;
}
return val;
}

onchartload(sender) {
ChartMobileService.prototype.onchartload(sender);
ChartDataService.prototype.accData(sender);
}

track(sender) {
sender.data.Location.X = sender.data.Location.X + 1;
if (sender.data.Series.name == 'indicator') {
if (sender.model.indicators[0].segment.length > 0) {
if (sender.model.indicators[0].segment[0].points[sender.data.pointIndex].y != null) {
sender.data.currentText = sender.data.currentText + 'Signal Line ' + ' :' + '  $'
+ sender.model.indicators[0].segment[0].points[sender.data.pointIndex].y.toFixed(2) + '<br/>';
} else {
sender.data.currentText = sender.data.currentText + 'Signal Line ' + ' :' + '  $'
+ sender.model.indicators[0].segment[0].points[sender.data.pointIndex].y + '<br/>';
}
}
}
}
}
