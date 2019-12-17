import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './rtl.component.html',
    styleUrls: ['./rtl.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
})
export class RTLComponent {
    countryList: Array<any>;
    fields: Object;
    value: string;
    constructor() {
        this.fields = { text: 'country' };
        this.countryList = [
            { country: 'الجیریا' }, { country: 'ارمینیا' }, { country: 'بنگلا دیش' },
            { country: 'کیوبا' }, { country: 'ڈنمارک' },
            { country: 'مصر' }, { country: 'فن لینڈ' }, { country: 'بھارت' },
            { country: 'ملائیشیا' }, { country: 'نیوزی لینڈ' }, { country: 'ناروے' }
        ];
    }
}
