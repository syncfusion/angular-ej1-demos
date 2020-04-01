import {Component} from '@angular/core';
import {NorthwindService} from '../../services/northwind.service';

@Component({
  selector: 'sd-home',
  templateUrl: './bulletgraph.component.html',
  providers: [NorthwindService]
})
export class BulletGraphComponent {
    constructor(public northwindService: NorthwindService) {}
}
