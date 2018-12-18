import { Component } from '@angular/core';
import { GanttDataService } from '../../services/ganttdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './default.component.html',
  styleUrls: ['./gantt.component.css'],
  providers: [GanttDataService]
})
export class DefaultComponent {
  public ganttData: any;
  constructor(public ganttDataService: GanttDataService) {
    this.ganttData = new ej.DataManager(ganttDataService.getGanttData());
  }
  public treeColumnIndex = 1;
}
