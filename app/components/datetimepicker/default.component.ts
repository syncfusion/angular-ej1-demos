import { Component } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './default.component.html'
})
export class DefaultComponent {
    value: any;
    constructor() {
        this.value = Date();
    }
}
