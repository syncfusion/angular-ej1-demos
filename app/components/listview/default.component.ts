import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './default.component.html',
    styles: ['.sample-area{overflow:hidden;}'],
    encapsulation: ViewEncapsulation.None
})
export class DefaultComponent {
    width: Number;
    constructor() {
        this.width = 400;
    }
}
