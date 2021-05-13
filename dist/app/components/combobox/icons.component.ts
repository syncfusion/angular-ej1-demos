import {Component} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './icons.component.html',
    styleUrls: ['./combobox.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class IconsComponent {
    socialMedia: Array<Object> = [];
    fieldsvalues: Object;
    placeholder: string;
    constructor() {
        this.socialMedia = [
            { class: 'mailtools categorize', name: 'Categorize and Move' }, { class: 'mailtools done', name: 'Done' },
            { class: 'mailtools flag', name: 'Flag & Move' }, { class: 'mailtools forward', name: 'Forward' },
            { class: 'mailtools movetofolder', name: 'Move to Folder' }, { class: 'mailtools newmail', name: 'New E-mail' },
            { class: 'mailtools meeting', name: 'New Meeting' }, { class: 'mailtools reply', name: 'Reply & Delete' }
        ];
        this.fieldsvalues = { dataSource: this.socialMedia, text: 'name', value: 'name', iconCss: 'class' };
        this.placeholder = 'Select an icon';
    }
}
