
import {Component} from '@angular/core';
@Component({
    selector: 'ej-app',
    templateUrl: './rtl.component.html',
    styleUrls: ['./slider.component.css']
})
export class RTLComponent {
    value: string;
    sliderValues: any;
    minRange: string;
    range: string;
    constructor() {
        this.sliderValues = [30, 80];
        this.value = '60';
        this.minRange = 'MinRange';
        this.range = 'Range';
    }
}
