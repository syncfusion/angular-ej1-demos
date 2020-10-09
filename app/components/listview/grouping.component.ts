import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './grouping.component.html',
    styles: ['.e-parentlv .e-lv.subpage { width: inherit; margin: 0 auto; }'],
    encapsulation: ViewEncapsulation.None
})
export class GroupingComponent {
    width: Number;
    constructor() {
        this.width = 400;
    }
}
