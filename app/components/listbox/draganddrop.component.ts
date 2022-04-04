import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './draganddrop.component.html',
    styleUrls: ['./draganddrop.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
})
export class DragAndDropComponent {
    skillset: Array<any>;
    fields: Object;
    constructor() {
        this.fields = { text: 'skill' };
        this.skillset = [
            { skill: 'ASP.NET' }, { skill: 'ActionScript' }, { skill: 'Basic' },
            { skill: 'C++' }, { skill: 'C#' }, { skill: 'dBase' }, { skill: 'Delphi' },
            { skill: 'ESPOL' }, { skill: 'F#' }, { skill: 'FoxPro' }, { skill: 'Java' },
            { skill: 'J#' }, { skill: 'Lisp' }, { skill: 'Logo' }, { skill: 'PHP' }
        ];
    }
}
