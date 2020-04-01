import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
    selector: 'ej-app',
    templateUrl: './horizontal.component.html',
    providers: [NorthwindService]
})

export class HorizontalComponent {
    public scheduleData: any;
    public currentdate: Date;

    constructor(public northwindService: NorthwindService) {
        this.scheduleData = northwindService.getEvents();
        this.currentdate = new Date(2017, 5, 5);
    }

}
