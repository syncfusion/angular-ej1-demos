import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'ej-app',
    templateUrl: './code93extended.component.html',
    styleUrls: ['./common.css'],
  providers: [NorthwindService]
})
export class Code93ExtendedComponent {
  constructor(public northwindService: NorthwindService) { }
}
