import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'ej-app',
  templateUrl: './constraints.component.html',
  providers: [NorthwindService]
})
export class ConstraintsComponent {
  public kanbanData: any;
  constructor(private northwindService: NorthwindService) {
      this.kanbanData = northwindService.getTasks();
   }
   constraint = { max: '2' };
}
