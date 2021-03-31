import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';


@Component({
    selector: 'ej-app',
    templateUrl: './state.component.html',
    styles: ['.e-grid{position:inherit !important'],
    providers: [NorthwindService]
})
export class StateMaintenanceComponent {
    public gridData: any;

    constructor(private service: NorthwindService) {
        this.gridData = service.getOrders();
    }
}
