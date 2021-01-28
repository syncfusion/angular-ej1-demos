import {Component} from '@angular/core';
@Component({
    selector: 'ej-app',
    templateUrl: './rangeslider.component.html'
})
export class RangeSliderComponent {
    value: string;
    sliderValues: any;
    minRange: string;
    range: string;
    orientation: string;
    constructor() {
        this.sliderValues = [30, 80];
        this.value = '60';
        this.minRange = 'MinRange';
        this.range = 'Range';

    }
}
