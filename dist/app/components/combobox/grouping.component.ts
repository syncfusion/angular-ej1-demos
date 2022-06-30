import {Component} from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './grouping.component.html'
})
export class GroupingComponent {
    datasource: Array<Object> = [];
    fieldsvalues: Object;
    placeholder: string;
    constructor() {
       this.datasource = [
          { vegetable: 'Cabbage', category: 'Leafy and Salad' }, { vegetable: 'Spinach', category: 'Leafy and Salad' },
        { vegetable: 'Wheatgrass', category: 'Leafy and Salad' }, { vegetable: 'Yarrow', category: 'Leafy and Salad' },
        { vegetable: 'Chickpea', category: 'Beans' }, { vegetable: 'Green bean', category: 'Beans' },
        { vegetable: 'Horse gram', category: 'Beans' }, { vegetable: 'Garlic', category: 'Bulb and Stem' },
        { vegetable: 'Nopal', category: 'Bulb and Stem' }, { vegetable: 'Onion', category: 'Bulb and Stem' }
            ];
    this.fieldsvalues = { dataSource: this.datasource, text: 'vegetable', groupBy: 'category' };
    this.placeholder = 'Select a vegetable';
    }
}
