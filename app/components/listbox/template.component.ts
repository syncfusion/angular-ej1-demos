import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class TemplateComponent {
    empList: Array<any>;
    template: Object;
    constructor() {
        this.template = '<div><img class="eimgtemp" src="app/content/images/Employees/${eimg}.png" alt="employee"/>' +
            '<div class="enametemp"> ${text} </div><div class="desigtemp"> ${desig} </div><div class="conttemp"> ${country} </div></div>';
        this.empList = [
            { text: 'Erik Linden', eimg: '3', desig: 'Representative', country: 'England' }, { text: 'John Linden', eimg: '6', desig: 'Representative', country: 'Norway' },
            { text: 'Louis', eimg: '7', desig: 'Representative', country: 'Australia' }, { text: 'Lawrence', eimg: '5', desig: 'Representative', country: 'India' }
        ];
    }
}
