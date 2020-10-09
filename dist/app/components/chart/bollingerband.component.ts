import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
selector: 'sd-home',
templateUrl: '/bollingerband.component.html',
providers: [ChartDataService, ChartMobileService]
})
export class BollingerbandComponent {
bollingerBandData: any;
Axes: any;
@ViewChild('bollingerBand') chart: EJComponents<any, any>;
constructor(public chartDataService: ChartDataService) {
this.bollingerBandData = chartDataService.getOnlineData();
this.Axes = [{
opposedPosition: true,
range: { min: 55, max: 75, interval: 5 },
name: 'yaxis',
}];
}

onchartload(sender) {
ChartMobileService.prototype.onchartload(sender);
}

onchange1(sender) {
let value = this.getColorValue(sender.text);
this.chart.widget.model.indicators[0].upperLine.fill = value;
this.chart.widget.redraw();
}
onchange2(sender) {
let value = this.getColorValue(sender.text);
this.chart.widget.model.indicators[0].fill = value;
this.chart.widget.redraw();
}
onchange3(sender) {
let value = this.getColorValue(sender.text);
this.chart.widget.model.indicators[0].lowerLine.fill = value;
this.chart.widget.redraw();
}
onchange4(sender) {
this.chart.widget.model.indicators[0].standardDeviations = parseInt(sender.value);
this.chart.widget.redraw();
}
onchange5(sender) {
this.chart.widget.model.indicators[0].period = parseInt(sender.value);
this.chart.widget.redraw();
}

getColorValue(name) {
let val;
switch (name) {
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

track(sender) {
sender.data.Location.X = sender.data.Location.X + 1;
if (sender.data.Series.name == 'Hilo') {
if (sender.model.indicators[0].segment.length > 0) {
if (sender.model.indicators[0].segment[0].points[sender.data.pointIndex].y != null) {
if (sender.model.indicators[0].standardDeviations > 0) {
sender.data.currentText = sender.data.currentText + 'Upper Band : ' + '$'
+ sender.model.indicators[0].segment[0].points[sender.data.pointIndex].y.toFixed(2)
+ '<br/>Signal Line ' + ' :' + '  $'
+ sender.model.indicators[0].segment[2].points[sender.data.pointIndex].y.toFixed(2)
+ '<br/>' + 'Lower Band : ' + '$'
+ sender.model.indicators[0].segment[1].points[sender.data.pointIndex].y.toFixed(2) + '<br/>' + '<br/>';
} else {
sender.data.currentText = sender.data.currentText + 'Signal Line ' + ' :' + '  $'
+ sender.model.indicators[0].segment[2].points[sender.data.pointIndex].y.toFixed(2) +
'<br/>' + '<br/>';
}
}
}else {
if (sender.model.indicators[0].standardDeviations > 0) {
sender.data.currentText = sender.data.currentText + 'Upper Band : ' + '$'
+ sender.model.indicators[0].segment[0].points[sender.data.pointIndex].y
+ '<br/>Signal Line ' + ' :' + '  $'
+ sender.model.indicators[0].segment[2].points[sender.data.pointIndex].y
+ '<br/>' + 'Lower Band : ' + '$'
+ sender.model.indicators[0].segment[1].points[sender.data.pointIndex].y + '<br/>' + '<br/>';
} else {
sender.data.currentText = sender.data.currentText + 'Signal Line ' + ' :' + '  $'
+ sender.model.indicators[0].segment[2].points[sender.data.pointIndex].y +
'<br/>' + '<br/>';
}
}
}
}
}
