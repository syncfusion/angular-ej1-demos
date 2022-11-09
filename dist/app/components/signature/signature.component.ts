import { Component } from '@angular/core';

@Component({
    selector: 'sd-home',
    templateUrl: './signature.component.html'
})
export class SignatureComponent {
    width: number;
    constructor() {
        this.width = 3;
    }
}
