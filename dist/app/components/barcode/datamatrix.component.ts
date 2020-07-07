import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'ej-app',
    templateUrl: './datamatrix.component.html',
    styleUrls: ['./common.css'],
  providers: [NorthwindService]
})
export class DatamatrixComponent {
  constructor(public northwindService: NorthwindService) { }
}
