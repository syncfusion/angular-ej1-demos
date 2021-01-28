import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
})
export class TooltipComponent {
    empList: Array<any>;
    fields: Object;
    constructor() {
        this.fields = { text: 'name', tooltipText: 'desig' };
        this.empList = [
            { name: 'Erik Linden', desig: 'Representative' }, { name: 'John Linden', desig: 'Manager' },
            { name: 'Louis', desig: 'CEO' }, { name: 'Lawrence', desig: 'President' },
            { name: 'Abraham', desig: 'Vice-President' }, { name: 'Philip', desig: 'Director' },
            { name: 'James', desig: 'Founder' }, { name: 'Kennedy', desig: 'Co-Founder' }
        ];
    }
}
