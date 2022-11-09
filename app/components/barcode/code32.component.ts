import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'ej-app',
    templateUrl: './code32.component.html',
    styleUrls: ['./common.css'],
  providers: [NorthwindService]
})
export class Code32Component {
  constructor(public northwindService: NorthwindService) { }
}
