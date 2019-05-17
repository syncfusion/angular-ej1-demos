import { Component } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './celldatabinding.component.html'
})
export class DefaultComponent {
    margin: Object;
    itemsSource: Array<Object>;
    itemsMapping: Object;
    label: Object;
    legendLabel: Object;
    legendCollection: Array<Object>;
    isResponsive: boolean;
    constructor() {
        this.margin = { 'left': 25, 'right': 25 };
        let itemsSource = [];
        let rows = ['Vegie-spread', 'Tofuaa', 'Alice Mutton', 'Konbu', 'Fløtemysost', 'Perth Pasties', 'Boston Crab Meat', 'Raclette Courdavault'];
        for (let i = 0; i < 8; i++) {
            itemsSource.push({
                ProductName: rows[i], Y2010: Math.floor((Math.random() * 100) + 1), Y2011: Math.floor((Math.random() * 100) + 1), Y2012: Math.floor((Math.random() * 100) + 1),
                Y2013: Math.floor((Math.random() * 100) + 1),
                Y2014: Math.floor((Math.random() * 100) + 1), Y2015: Math.floor((Math.random() * 100) + 1), Y2016: Math.floor((Math.random() * 100) + 1),
                Y2017: Math.floor((Math.random() * 100) + 1), Y2018: Math.floor((Math.random() * 100) + 1)
            });
        }
        this.itemsSource = itemsSource;
        this.itemsMapping = {
            headerMapping: { 'propertyName': 'ProductName', 'displayName': 'Product Name', columnStyle: { width: 140, textAlign: 'right' } },
            columnMapping: [
                { 'propertyName': 'Y2010', 'displayName': 'Y2010' },
                { 'propertyName': 'Y2011', 'displayName': 'Y2011' },
                { 'propertyName': 'Y2012', 'displayName': 'Y2012' },
                { 'propertyName': 'Y2013', 'displayName': 'Y2013' },
                { 'propertyName': 'Y2014', 'displayName': 'Y2014' },
                { 'propertyName': 'Y2015', 'displayName': 'Y2015' },
                { 'propertyName': 'Y2016', 'displayName': 'Y2016' },
                { 'propertyName': 'Y2017', 'displayName': 'Y2017' },
                { 'propertyName': 'Y2018', 'displayName': 'Y2018' }
            ]
        };
        this.label = { 'text': '0' };
        this.legendLabel = { 'text': '0' };
        this.legendCollection = ['heatmaplegend'];
        this.isResponsive = true;
    }
}
