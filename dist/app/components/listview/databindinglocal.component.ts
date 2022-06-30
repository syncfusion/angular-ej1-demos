import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './databindinglocal.component.html',
     styles: ['.e-parentlv .e-lv.subpage { width: inherit; margin: 0 auto; }'],
    encapsulation: ViewEncapsulation.None
})
export class DatabindingComponent {
    listdata: any;
    width: Number;
    fieldsdata: Object;
    constructor() {
        this.listdata =
           [{ Texts: 'Discover Music' },
            { Texts: 'Sales and Events' },
            { Texts: 'Categories' },
            { Texts: 'MP3 Albums' },
            { Texts: 'More in Music' }];
        this.fieldsdata = { 'text': 'Texts' };
        this.width = 400;
    }
}
