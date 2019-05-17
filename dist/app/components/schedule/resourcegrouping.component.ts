import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
    selector: 'ej-app',
    templateUrl: './resourcegrouping.component.html',
    providers: [NorthwindService]
})

export class ResourceGroupComponent {
    public scheduleData: any;
    public currentdate: Date;
    public group: any;
    public allowMultiple: Boolean;
    public resourcelevel1: any;
    public resourcelevel2: any;

    constructor(public northwindService: NorthwindService) {
        this.scheduleData = northwindService.getEvents();
        this.currentdate = new Date(2017, 5, 5);
        this.group = {
            resources: ['Rooms', 'Owners']
        };
        this.resourcelevel1 = {
            dataSource: [
                { text: 'ROOM 1', id: 1, groupId: 1, color: '#cb6bb2' },
                { text: 'ROOM 2', id: 2, groupId: 1, color: '#56ca85' },
                { text: 'ROOM 3', id: 3, groupId: 1, color: '#f8a398' }
            ],
            text: 'text', id: 'id', groupId: 'groupId', color: 'color'
        };
        this.allowMultiple = true;
        this.resourcelevel2 = {
            dataSource: [
                { text: 'Nancy', id: 1, groupId: 1, color: '#ffaa00' },
                { text: 'Steven', id: 3, groupId: 2, color: '#f8a398' },
                { text: 'Michael', id: 5, groupId: 1, color: '#51a0ed' },
                { text: 'Laura', id: 7, groupId: 2, color: '#ffaa00' },
                { text: 'Robert', id: 8, groupId: 1, color: '#f8a398' },
                { text: 'Janet', id: 4, groupId: 2, color: '#51a0ed' },
                { text: 'Milan', id: 13, groupId: 3, color: '#99ff99' },
                { text: 'Paul', id: 15, groupId: 3, color: '#cc99ff' }
            ],
            text: 'text', id: 'id', groupId: 'groupId', color: 'color'
        };
    }

}
