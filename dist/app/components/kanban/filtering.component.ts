import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
    selector: 'ej-app',
    templateUrl: './filtering.component.html',
    providers: [NorthwindService]
})
export class FilteringComponent {
    public kanbanData: any;
    constructor(private northwindService: NorthwindService) {
        this.kanbanData = northwindService.getTasks();
    }
    filterSetting = [
        { text: 'Janet Issues', query: new ej.Query().where('Assignee', ej.FilterOperators.equal, 'Janet Leverling'), description: 'Displays issues which matches the assignee as Janet Leverling' },
        { text: 'Testing Issues', query: new ej.Query().where('Status', ej.FilterOperators.equal, 'Testing'), description: 'Display the issues of Testing' }
    ];
}
