import {Component} from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './filtering.component.html'
})
export class SearchingComponent {
    data: Array<Object> = [];
    fieldsvalues: Object;
    allowFiltering: boolean = true;
    constructor() {
        this.data = [
            { id: 'level1', game: 'American Football' }, { id: 'level2', game: 'Badminton' },
            { id: 'level3', game: 'Basketball' }, { id: 'level4', game: 'Cricket' },
            { id: 'level5', game: 'Football' },  { id: 'level6', game: 'Golf' },
            { id: 'level7', game: 'Hockey' },  { id: 'level8', game: 'Rugby' },
            { id: 'level9', game: 'Snooker' }, { id: 'level10', game: 'Tennis' }
        ];
        this.fieldsvalues = { dataSource: this.data, text: 'game', value: 'id' };
    }
    filtering(e: any) {
        let  query = new ej.Query().select(['game', 'id']);
        query = (e.text !== '') ? query.where('game', ej.FilterOperators.startsWith, e.text, true) : query;
        e.updateData(this.data, query);
    }
}
