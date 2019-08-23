import { Component } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './togglebutton.component.html'
})
export class ToggleButtonComponent {
    state: boolean;
    constructor() {
        this.state = false;

    }
}
