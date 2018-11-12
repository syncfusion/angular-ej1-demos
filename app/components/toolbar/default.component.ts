import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './default.component.html',
    styleUrls: ['./toolbar.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class DefaultComponent {
    fieldsvalues: Object;
    data: Array<any>;
    separator: boolean;
    constructor() {
        this.data = [
            {
                empid: '1', tooltiptext: 'New mail',
                spriteCss: 'mailtools movetofolder',

            }, {
                empid: '2', tooltiptext: 'Calendar',
                spriteCss: 'mailtools categorize',

            }, {
                empid: '3', tooltiptext: 'Appointments',
                spriteCss: 'mailtools flag',

            }, {
                empid: '4', tooltiptext: 'Week',
                spriteCss: 'mailtools forward',

            }, {
                empid: '5', tooltiptext: 'Month',
                spriteCss: 'mailtools newmail',

            },
            {
                empid: '6', tooltiptext: 'Notes',
                spriteCss: 'mailtools reply',

            },
            {
                empid: '7', tooltiptext: 'Deleted',
                spriteCss: 'mailtools done',

            }
        ];

        this.separator = true;

        this.fieldsvalues = { tooltipText: 'tooltiptext', id: 'empid', spriteCssClass: 'spriteCss' };
    }
}
