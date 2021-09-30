import {Component} from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './rtl.component.html'
})
export class RTLComponent {
    rtldata: Array<any>;
    rtlfield: Object;
    rtl: boolean;
    text: string;
    constructor() {
    this.rtldata = [
        { skill: 'ASP.NET' }, { skill: 'ActionScript' }, { skill: 'Basic' }, { skill: 'C' },
        { skill: 'C++' }, { skill: 'C#' }, { skill: 'dBase' }, { skill: 'Delphi' },
        { skill: 'ESPOL' }, { skill: 'F#' }, { skill: 'FoxPro' }, { skill: 'Java' },
        { skill: 'J#' }, { skill: 'Lisp' }, { skill: 'Logo' }, { skill: 'PHP' }
    ];
    this.rtlfield = { dataSource: this.rtldata, text: 'skill'};
    this.rtl = true;
    this.text = 'Select a language';
    }
}
