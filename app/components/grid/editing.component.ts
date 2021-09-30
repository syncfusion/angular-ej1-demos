import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';


@Component({
    selector: 'ej-app',
    templateUrl: './editing.component.html',
    styles: ['.e-grid{position:inherit !important'],
    providers: [NorthwindService]
})
export class EditingComponent {
    public gridData: any;
    public editSettings;
    public toolbarItems;
    constructor(private service: NorthwindService) {
        this.gridData = service.getOrders();
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbarItems = { showToolbar: true, toolbarItems: ['add', 'edit', 'delete', 'update', 'cancel'] };
    }
}
