import { Component } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './rtl.component.html'
})
export class RTLComponent {
    value: any;
    rtl: boolean;
    constructor() {
        this.value = Date();
        this.rtl = true;
    }
}
