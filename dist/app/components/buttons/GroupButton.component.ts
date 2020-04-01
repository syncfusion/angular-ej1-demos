import { Component } from '@angular/core';
@Component({
    selector: 'ej-app',
    templateUrl: 'app/components/buttons/GroupButton.component.html',
})
export class GroupButtonComponent {
    checkstatus: boolean;
    data: object;

    constructor() {
        this.checkstatus = true;
        this.data = [{ text: 'Day', contentType: 'textonly' },
        { text: 'Week', contentType: 'textonly' },
        { text: 'Month', contentType: 'textonly', selected: 'selected' },
        { text: 'Year', contentType: 'textonly' }];
    }
}
