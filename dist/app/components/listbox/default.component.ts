import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
})
export class DefaultComponent {
    data: Array<{ empid: string, text: string, value: string }>;
    fieldList: Object;
    value: string;
    constructor() {
        this.data = [
            { empid: 'cr1', text: 'Dodge Avenger', value: 'Dodge Avenger' },
            { empid: 'cr2', text: 'Chrysler 200', value: 'Chrysler 200' },
            { empid: 'cr3', text: 'Ford Focus', value: 'Ford Focus' },
            { empid: 'cr4', text: 'Ford Taurus', value: 'Ford Taurus' },
            { empid: 'cr5', text: 'Dazzler', value: 'Dazzler' },
            { empid: 'cr6', text: 'Chevy Spark', value: 'Chevy Spark' },
            { empid: 'cr7', text: 'Chevy Volt', value: 'Chevy Volt' },
            { empid: 'cr8', text: 'Honda Fit', value: 'Honda Fit' },
            { empid: 'cr9', text: 'Honda Crosstour', value: 'Honda Crosstour' },
            { empid: 'cr10', text: 'Acura RL', value: 'Acura RL' },
            { empid: 'cr11', text: 'Hyundai Elantra', value: 'Hyundai Elantra' },
            { empid: 'cr12', text: 'Mazda3', value: 'Mazda3' }
        ];
        this.fieldList = { dataSource: this.data, text: 'text', value: 'value' };
        this.value = 'Mazda3';
    }
}
