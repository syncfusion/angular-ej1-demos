import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'ej-app',
    templateUrl: './code93.component.html',
    styleUrls: ['./common.css'],
  providers: [NorthwindService]
})
export class Code93Component {
  constructor(public northwindService: NorthwindService) { }
}
