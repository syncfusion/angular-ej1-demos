import {Component} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './orientation.component.html',
  styleUrls: ['./rating.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OrientationComponent {
    rate: number;
    constructor() {
        this.rate = 3;
    }
}
