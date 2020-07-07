import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'ej-app',
    templateUrl: './code39.component.html',
    styleUrls: ['./common.css'],
  providers: [NorthwindService]
})
export class Code39Component {
  constructor(public northwindService: NorthwindService) { }
}
