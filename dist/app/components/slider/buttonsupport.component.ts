import {Component} from '@angular/core';
@Component({
    selector: 'ej-app',
    templateUrl: './buttonsupport.component.html'
})
export class ButtonSupportComponent {
    value: string;
    sliderValues: any;
    minRange: string;
    range: string;
    orientation: string;
    constructor() {
        this.sliderValues = [30, 60];
        this.value = '40';
        this.minRange = 'MinRange';
        this.range = 'Range';
    }
}
