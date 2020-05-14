import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'ej-app',
    templateUrl: './code128c.component.html',
    styleUrls: ['./common.css'],
  providers: [NorthwindService]
})
export class Code128CComponent {
  constructor(public northwindService: NorthwindService) { }
}
