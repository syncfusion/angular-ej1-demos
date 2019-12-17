import { Component } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './default.component.html'
})
export class DefaultComponent {
    selectIndex: number;
    constructor() {
        this.selectIndex = 1;
    }
}
