import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './checklist.component.html',
    styles: ['.e-parentlv .e-lv.subpage { width: inherit; margin: 0 auto; }'],
    encapsulation: ViewEncapsulation.None
})
export class CheckListComponent {
    listdata: any;
    width: Number;
    fieldsdata: Object;
    constructor() {
        this.listdata =
            [{ Texts: 'Artwork' },
            { Texts: 'Abstract' },
            { Texts: '2 Acrylic Mediums' },
            { Texts: 'Creative Acrylic' },
            { Texts: 'Modern Painting' },
            { Texts: 'Canvas Art' },
            { Texts: 'Black white' },
            { Texts: 'Children' }];
        this.fieldsdata = { 'text': 'Texts' };
        this.width = 400;
    }
}
