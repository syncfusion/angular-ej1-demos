import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'ej-app',
  templateUrl: './swimlane.component.html',
  providers: [NorthwindService]
})
export class SwimlaneComponent {
  public kanbanData: any;
  constructor(private northwindService: NorthwindService) {
      this.kanbanData = northwindService.getTasks();
  }
}
