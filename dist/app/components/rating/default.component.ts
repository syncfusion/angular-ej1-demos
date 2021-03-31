import {Component} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './default.component.html',
  styleUrls: ['./rating.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class DefaultComponent {
    rate: number;
    constructor() {
        this.rate = 3;
    }
}
