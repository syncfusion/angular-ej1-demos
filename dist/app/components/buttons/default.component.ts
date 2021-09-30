import { Component } from '@angular/core';
@Component({
    selector: 'ej-app',
    templateUrl: './default.component.html',
})
export class DefaultComponent {
    checkstatus: boolean;
    checkedArray: any;
    constructor() {
        this.checkstatus = true;
        this.checkedArray = ['Music', 'Bike Riding'];
    }
}
