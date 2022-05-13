import { Component } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './drilldown.component.html'
})
export class DrilldownComponent {
    value: any;
    drilldown: Object;
    constructor() {
        this.value = Date();
        this.drilldown = {enabled: true, interval: 5, showMeridian: false};
    }
}
