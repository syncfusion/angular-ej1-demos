import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
selector: 'sd-home',
templateUrl: '/empty.component.html',
providers: [ChartDataService, ChartMobileService]
})
export class EmptyComponent {
Common: any;
SeriesOptions: any;
@ViewChild('empty') chart: EJComponents<any, any>;
constructor(public chartDataService: ChartDataService) {
this.Common = {
name: 'Course',
type: 'spline',
enableAnimation: true,
emptyPointSettings: {
visible: true,
displayMode: 'gap',
style: {
color: '#afafaf'
}
}
};
this.SeriesOptions = [
{
points:
[
{
x: 0,
y: 210,
fill: '#81B518',
marker:
{
shape: 'circle',
size:
{
height: 12, width: 12
},
border: { color: '#81B518', width: 1.5 },
fill: 'white',
visible: true
}
},
{
x: 1,
y: null,
marker:
{
shape: 'circle',
size:
{
height: 12, width: 12
},
border: { color: '#afafaf', width: 1.5 },
fill: 'white',
visible: true
}
},
{
x: 2,
y: 150,
fill: '#ccdc00',
marker:
{
shape: 'circle',
size:
{
height: 12, width: 12
},
border: { color: '#ccdc00', width: 1.5 },
fill: 'white',
visible: true
}
},
{
x: 3,
y: 200,
isEmpty: true,
marker:
{
shape: 'circle',
size:
{
height: 12, width: 12
},
border: { color: '#afafaf', width: 1.5 },
fill: 'white',
visible: true
}
},
{
x: 4,
y: 170,
fill: '#a6405a',
marker:
{
shape: 'circle',
size:
{
height: 12, width: 12
},
border: { color: '#a6405a', width: 1.5 },
fill: 'white',
visible: true
}
},
{
x: 5,
y: 200,
fill: '#60056d',
marker:
{
shape: 'circle',
size:
{
height: 12, width: 12
},
border: { color: '#60056d', width: 1.5 },
fill: 'white',
visible: true
}
},
{
x: 6,
y: 140,
isEmpty: true,
marker:
{
shape: 'circle',
size:
{
height: 12, width: 12
},
border: { color: '#afafaf', width: 1.5 },
fill: 'white',
visible: true
}
},
{
x: 7,
y: 120,
fill: '#01599c',
marker:
{
shape: 'circle',
size:
{
height: 12, width: 12
},
border: { color: '#01599c', width: 1.5 },
fill: 'white',
visible: true
}
},
{
x: 8,
y: 140,
fill: '#385815',
marker:
{
shape: 'circle',
size:
{
height: 12, width: 12
},
border: { color: '#385815', width: 1.5 },
fill: 'white',
visible: true
}
}
],
marker:
{
shape: 'circle',
dataLabel: { visible: true, shape: 'rectangle', font: { color: 'white' }, verticalTextAlignment: 'far' },
size:
{
height: 12, width: 12
},
opacity: 1,
visible: true
},
fill: '#f37024 '
}
];
}

onchartload(sender) {
ChartMobileService.prototype.onchartload(sender);
}

textRender(sender) {
if (sender.model.AreaType == 'none' && sender.data.text == 0) {
sender.data.text = '';
}
}

onchange1(sender) {
this.chart.widget.model.series[0].type = sender.text;
let pointsLength = this.chart.widget.model.series[0].points.length;
for (let i = 0; i < pointsLength; i++) {
if (this.chart.widget.model.series[0].points[i].marker) {
if (sender.text.toLowerCase() == 'column') {
this.chart.widget.model.series[0].points[i].marker.visible = false;
this.chart.widget.model.series[0].marker.visible = false;
}else {
this.chart.widget.model.series[0].points[i].marker.visible = true;
this.chart.widget.model.series[0].marker.visible = true;
}
}
}
this.chart.widget.redraw();
}
onchange2(sender) {
for (let i = 0; i < this.chart.widget.model.series.length; i++) {
this.chart.widget.model.series[i].emptyPointSettings.visible = sender.isChecked;
}
this.chart.widget.redraw();
}
onchange3(sender) {
for (let i = 0; i < this.chart.widget.model.series.length; i++) {
this.chart.widget.model.series[i].emptyPointSettings.displayMode = sender.text.toLowerCase();
}
this.chart.widget.redraw();
}

onchange4(sender) {
let color = sender.currentTarget.value;
let points = this.chart.widget.model.series[0].points;
for (let i = 0; i < points.length; i++) {
if (points[i].isEmpty) {
points[i].marker.border.color = color;
}
}
for (let i = 0; i < this.chart.widget.model.series.length; i++) {
this.chart.widget.model.series[i].emptyPointSettings.style.color = color;
}
this.chart.widget.redraw();

}
}
