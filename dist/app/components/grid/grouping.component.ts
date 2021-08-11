import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';


@Component({
    selector: 'ej-app',
    templateUrl: './grouping.component.html',
    styles: ['.e-grid{position:inherit !important'],
    providers: [NorthwindService]
})
export class GroupingComponent {
    public gridData: any;
    public groupedColumns: Array<string>;
    constructor(private service: NorthwindService) {
        this.groupedColumns = ['CustomerID'];
        this.gridData = service.getOrders();
    }
}
