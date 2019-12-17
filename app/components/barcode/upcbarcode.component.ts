import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'ej-app',
    templateUrl: './upcbarcode.component.html',
    styleUrls: ['./common.css'],
  providers: [NorthwindService]
})
export class UpcBarcodeComponent {
  constructor(public northwindService: NorthwindService) { }
}
