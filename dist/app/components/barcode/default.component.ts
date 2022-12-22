import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'ej-app',
    templateUrl: './default.component.html',
    styleUrls: ['./common.css'],
  providers: [NorthwindService]
})
export class DefaultComponent {
  constructor(public northwindService: NorthwindService) { }
}
