import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'ej-app',
  templateUrl: './default.component.html',
  providers: [NorthwindService]
})
export class DefaultComponent {
  public kanbanData: any;
  constructor(private northwindService: NorthwindService) {
      this.kanbanData = northwindService.getTasks();
  }
}
