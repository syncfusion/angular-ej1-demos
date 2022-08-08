import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
    selector: 'ej-app',
    templateUrl: './timescale.component.html',
    providers: [NorthwindService]
})

export class TimeScaleComponent {
    public scheduleData: any;
    public currentdate: Date;
    public majorslot: Number;
    public minorslotcount: Number;
    constructor(public northwindService: NorthwindService) {
        this.scheduleData = northwindService.getEvents();
        this.currentdate = new Date(2017, 5, 5);
        this.majorslot = 60;
        this.minorslotcount = 5;
    }
}
