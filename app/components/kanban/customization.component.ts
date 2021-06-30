import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'ej-app',
  templateUrl: './customization.component.html',
  providers: [NorthwindService]
})
export class CustomizationComponent {
  public kanbanData: any;
  constructor(private northwindService: NorthwindService) {
      this.kanbanData = northwindService.getTasks();
  }
  colorMap = {
      '#cb2027': 'Bug,Story',
      '#67ab47': 'Improvement',
      '#fbae19': 'Epic',
      '#6a5da8': 'Others'
  };
}
