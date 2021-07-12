import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
    selector: 'ej-app',
    templateUrl: './default.component.html',
    providers: [NorthwindService]
})

export class DefaultComponent {
    public scheduleData: any;
    public currentdate: Date;

    constructor(public northwindService: NorthwindService) {
        this.scheduleData = northwindService.getEvents();
        this.currentdate = new Date(2017, 5, 5);
    }

    onCreate(args) {
        let schArgs = $('#Schedule1').ejSchedule('instance');
        setTimeout(function () { schArgs.refreshScroller(); }, 500);
    }
}
