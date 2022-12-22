import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
    selector: 'ej-app',
    templateUrl: './multipleresource.component.html',
    providers: [NorthwindService]
})

export class MultipleResourceComponent {
    public scheduleData: any;
    public currentdate: Date;
    public group: any;
    public allowMultiple: Boolean;
    public resourceData: any;

    constructor(public northwindService: NorthwindService) {
        this.scheduleData = northwindService.getEvents();
        this.currentdate = new Date(2017, 5, 5);
        this.group = {
            resources: ['Owners']
        };
        this.allowMultiple = true;
        this.resourceData = {
            dataSource: [
                { text: 'Nancy', id: 1, groupId: 1, color: '#ffaa00' },
                { text: 'Steven', id: 3, groupId: 2, color: '#f8a398' },
                { text: 'Michael', id: 5, groupId: 1, color: '#7499e1' }
            ],
            text: 'text',
            id: 'id',
            groupId: 'groupId',
            color: 'color'
        };
    }

}
