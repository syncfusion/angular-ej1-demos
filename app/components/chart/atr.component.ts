import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
selector: 'sd-home',
templateUrl: '/atr.component.html',
providers: [ChartDataService, ChartMobileService]
})
export class AtrComponent {
atrData: any;
Axes: any;
@ViewChild('atr') chart: EJComponents<any, any>;
constructor(public chartDataService: ChartDataService) {
this.atrData = chartDataService.getOnlineData();
this.Axes = [
{
name: 'yaxis',
opposedPosition: true,
majorGridLines: { visible: false }
}
];
}

onchange2(args) {
let val = args.value;
this.chart.widget.model.indicators[0].period = parseInt(val);
this.chart.widget.redraw();
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
}

track(sender) {
sender.data.Location.X = sender.data.Location.X + 1;
if (sender.data.Series.name == 'Hilo') {
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
