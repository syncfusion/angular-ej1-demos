import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'ej-app',
    templateUrl: './code128b.component.html',
    styleUrls: ['./common.css'],
  providers: [NorthwindService]
})
export class Code128BComponent {
  constructor(public northwindService: NorthwindService) { }
}
