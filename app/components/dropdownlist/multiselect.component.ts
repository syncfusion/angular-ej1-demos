import {Component} from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './multiselect.component.html'
})
export class MultiSelectComponent {
  dataList: any;
  fieldsvalues: Object;
  constructor() {
    this.dataList = [
                { skill: 'ASP.NET' }, { skill: 'ActionScript' }, { skill: 'Basic' },
                { skill: 'C++' }, { skill: 'C#' }, { skill: 'dBase' }, { skill: 'Delphi' },
                { skill: 'ESPOL' }, { skill: 'F#' }, { skill: 'FoxPro' }, { skill: 'Java' },
                { skill: 'J#' }, { skill: 'Lisp' }, { skill: 'Logo' }, { skill: 'PHP' }
            ];
    this.fieldsvalues = { dataSource: this.dataList, text: 'skill'};
    }
}
