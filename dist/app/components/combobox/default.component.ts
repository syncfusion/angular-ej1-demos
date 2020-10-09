import {Component} from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './default.component.html'
})
export class DefaultComponent {
    data: Array<Object> = [];
    fieldsvalues: Object;
    placeholder: string;
    constructor() {
        this.data = [
            { id: 'level1', game: 'American Football' }, { id: 'level2', game: 'Badminton' },
            { id: 'level3', game: 'Basketball' }, { id: 'level4', game: 'Cricket' },
            { id: 'level5', game: 'Football' }, { id: 'level6', game: 'Golf' },
            { id: 'level7', game: 'Hockey' }, { id: 'level8', game: 'Rugby' },
            { id: 'level9', game: 'Snooker' }, { id: 'level10', game: 'Tennis' }
        ];
        this.fieldsvalues = { dataSource: this.data, text: 'game', value: 'id' };
        this.placeholder = 'Select a game';
    }
}
