import {Component} from '@angular/core';
@Component({
    selector: 'ej-app',
    templateUrl: './vertical.component.html',
    styleUrls: ['./slider.component.css']
})
export class VerticalSliderComponent {
    value: string;
    defaultvalue: string;
    sliderValues: any;
    minRange: string;
    range: string;
    orientation: string;
    constructor() {
        this.sliderValues = [30, 80];
        this.defaultvalue = '20';
        this.value = '60';
        this.minRange = 'MinRange';
        this.range = 'Range';

    }
}
