import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'ej-app',
    templateUrl: './codabar.component.html',
    styleUrls: ['./common.css'],
  providers: [NorthwindService]
})
export class CodabarComponent {
  constructor(public northwindService: NorthwindService) { }
}
