import { Component } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './default.component.html'
})
export class DefaultComponent {
    service: string;
    constructor() {
        this.service = '//js.syncfusion.com/demos/ejservices/api/PdfViewer';
    }
}
