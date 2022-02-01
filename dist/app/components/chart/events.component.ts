import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/events.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class EventsComponent {
eventsData: any;
@ViewChild('events') chart: EJComponents<any, any>;
constructor(public chartDataService: ChartDataService) {
this.eventsData = chartDataService.getEventsData();
}

onchartload(sender) {
ChartMobileService.prototype.onchartload(sender);
}

textRender(sender) {
if (sender.model.AreaType == 'none' && sender.data.text == 0) {
sender.data.text = '';
}
}

onlegendclicked(sender) {
let event = $('#EventLog')[0];
event.innerHTML = 'Clicked on <span class="eventTitle">Legend</span>';
}
onchartmouseleave(sender) {
let event = $('#EventLog')[0];
let str = this.stringName(sender);
event.innerHTML = 'Leaving on <span class="eventTitle">' + str + '</span>';
}
onaxislabelclick(sender) {
let event = $('#EventLog')[0];
event.innerHTML = 'Clicked on <span class="eventTitle">' + sender.data.text + '</span>';
}
onaxislabelmousemove(sender) {
let event = $('#EventLog')[0];
event.innerHTML = 'Moved on <span class="eventTitle">' + sender.data.text + '</span>';
}
onchartclick(sender) {
let event = $('#EventLog')[0];
let str = this.stringName(sender);
event.innerHTML = 'Clicked on <span class="eventTitle">' + str + '</span>';
}
onchartdoubleclick(sender) {
let event = $('#EventLog')[0];
let str = this.stringName(sender);
event.innerHTML = 'Double Clicked on <span class="eventTitle">' + str + '</span>';
}
onchartmousemove(sender) {
let event = $('#EventLog')[0];
let str = this.stringName(sender);
event.innerHTML = 'Moved on <span class="eventTitle">' + str + '</span>';
}
onpointclick(sender) {
let event = $('#EventLog')[0];
event.innerHTML = 'Clicked on <span class="eventTitle"> ' + sender.model.primaryXAxis.labels[sender.data.region.Region.PointIndex] + '</span>';
}

onpointmousemove(sender) {
let event = $('#EventLog')[0];
event.innerHTML = 'Moved on <span class="eventTitle"> ' + sender.model.primaryXAxis.labels[sender.data.region.Region.PointIndex] + '</span>';
}

onlegendmousemove(sender) {
let event = $('#EventLog')[0];
event.innerHTML = 'Moved on <span class="eventTitle">Legend</span>';
}
stringName(sender) {
let id = sender.data.id, str;
if (id.indexOf('ChartTitle') > 0) {
str = 'ChartTitle';
} else if (id.indexOf('Series') > 0) {
str = 'Series';
} else if (id.indexOf('Legend') > 0) {
str = 'Legend';
} else if (id.indexOf('SvgRect') > 0) {
str = 'Chart';
} else if (id.indexOf('ChartArea') > 0) {
str = 'ChartArea';
} else if (id.indexOf('SecondaryAxis') > 0) {
str = 'YAxisLabel';
} else if (id.indexOf('PrimaryAxis') > 0) {
str = 'XAxisLabel';
} else if (id.indexOf('XAxisTitle') > 0) {
str = 'XAxisTitle';
} else if (id.indexOf('YAxisTitle') > 0) {
str = 'YAxisTitle';
} else { str = 'Chart'; }
return str;
}
onClear(sender) {
let event = $('#EventLog')[0];
event.innerHTML = '';
}

onchange1(sender) {

}


}
