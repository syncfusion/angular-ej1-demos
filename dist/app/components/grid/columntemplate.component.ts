import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';


@Component({
    selector: 'ej-app',
    templateUrl: './columntemplate.component.html',
    styles: ['.e-grid{position:inherit !important'],
    providers: [NorthwindService]
})
export class ColumntemplateComponent {
    public gridData: any;
    public pagesize: number;
    constructor(private service: NorthwindService) {
        this.gridData = service.getEmployees();
        this.pagesize = 5;
    }
}
