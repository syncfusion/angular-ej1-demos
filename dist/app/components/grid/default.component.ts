import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';


@Component({
    selector: 'ej-app',
    templateUrl: './default.component.html',
    styles: ['.e-grid{position:inherit !important'],
    providers: [NorthwindService]
})
export class DefaultComponent {
    public gridData: any;
    public dataManager: any;
    public value: any;
    constructor(private service: NorthwindService) {
        this.gridData = service.getOrders();
        this.value = new Date();
    }
}
