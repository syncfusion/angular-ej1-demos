import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './databindinglocal.component.html',
    styleUrls: ['./databindinglocal.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
})
export class DataBindingLocalComponent {
    BikeList: Array<any>;
    fields: Object;
    constructor() {
        this.fields = { id: 'empid', value: 'text' };
        this.BikeList = [
            { empid: 'bk1', text: 'Aache RTR' }, { empid: 'bk2', text: 'CBR 150-R' }, { empid: 'bk3', text: 'CBZ Xtreme' },
            { empid: 'bk4', text: 'Discover' }, { empid: 'bk5', text: 'Dazzler' }, { empid: 'bk6', text: 'Flame' },
            { empid: 'bk7', text: 'Fazzer' }, { empid: 'bk8', text: 'FZ-S' }, { empid: 'bk9', text: 'Pulsar' },
            { empid: 'bk10', text: 'Shine' }, { empid: 'bk11', text: 'R15' }, { empid: 'bk12', text: 'Unicorn' }
        ];
    }
}
