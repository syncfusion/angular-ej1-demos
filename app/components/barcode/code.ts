import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
    selector: 'ej-app',
    templateUrl: 'app/components/barcode/default.component.html',
  providers: [NorthwindService]
})
export class DefaultComponent {
  constructor(public northwindService: NorthwindService) { }
}
