import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './cascading.component.html',
    encapsulation: ViewEncapsulation.None
})
export class CascadingComponent {
    country: Array<Object>;
    state: Array<Object>;
    cities: Array<Object>;
    cascade: string;
    countryField: Object;
    stateField: Object;
    cityField: Object;
    constructor() {
        this.country = [
            { countryName: 'United States', countryId: '1' },
            { countryName: 'Australia', countryId: '2' }];
        this.state = [
            { stateName: 'New York', countryId: '1', stateId: '101' },
            { stateName: 'Virginia', countryId: '1', stateId: '102' },
            { stateName: 'Washington', countryId: '1', stateId: '103' },
            { stateName: 'Queensland', countryId: '2', stateId: '104' },
            { stateName: 'Tasmania', countryId: '2', stateId: '105' },
            { stateName: 'Victoria', countryId: '2', stateId: '106' }];
        this.cities = [
            { cityName: 'Albany', stateId: '101', cityId: 201 },
            { cityName: 'Beacon', stateId: '101A', cityId: 202 },
            { cityName: 'Lockport', stateId: '101', cityId: 203 },
            { cityName: 'Alexandria', stateId: '102', cityId: 204 },
            { cityName: 'Hampton', stateId: '102', cityId: 205 },
            { cityName: 'Emporia', stateId: '102', cityId: 206 },
            { cityName: 'Aberdeen', stateId: '103', cityId: 207 },
            { cityName: 'Colville', stateId: '103', cityId: 208 },
            { cityName: 'Pasco', stateId: '103', cityId: 209 },
            { cityName: 'Townsville', stateId: '104', cityId: 210 },
            { cityName: 'Brisbane', stateId: '104', cityId: 211 },
            { cityName: 'Cairns', stateId: '104', cityId: 212 },
            { cityName: 'Hobart', stateId: '105', cityId: 213 },
            { cityName: 'Launceston', stateId: '105', cityId: 214 },
            { cityName: 'Devonport', stateId: '105', cityId: 215 },
            { cityName: 'Melbourne', stateId: '106', cityId: 216 },
            { cityName: 'Healesville', stateId: '106', cityId: 217 },
            { cityName: 'Geelong', stateId: '106', cityId: 218 }
        ];
        this.countryField = { dataSource: this.country, text: 'countryName', value: 'countryId' };
        this.stateField = { dataSource: this.state, text: 'stateName', value: 'stateId' };
        this.cityField = { dataSource: this.cities, text: 'cityName', value: 'cityName' };
    }
    countryChange(e) {
        let listObj1 = jQuery('#stateList').data('ejComboBox');
        listObj1.setModel({ enabled: true, query: new ej.Query().where('countryId', ej.FilterOperators.equal, e.model.value), value: null });
    }
}
