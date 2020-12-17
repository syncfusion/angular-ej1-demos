import {Component} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './precision.component.html',
    styleUrls: ['./rating.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class PrecisionComponent {
    fullrate: number;
    halfrate: number;
    exactrate: number;
    constructor() {
        this.fullrate = 4;
        this.halfrate = 3.5;
        this.exactrate = 3.7;
    }
}
