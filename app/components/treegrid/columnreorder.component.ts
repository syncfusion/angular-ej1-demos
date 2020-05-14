import { Component } from '@angular/core';
import { GanttDataService } from '../../services/ganttdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './columnreorder.component.html',
  styleUrls: ['./default.component.css'],
  providers: [GanttDataService]
})
export class ColumnReorderComponent {
  treeGridData: any;
  constructor(public ganttDataService: GanttDataService) {
    this.treeGridData = ganttDataService.getGanttData();
  }
  public treeColumnIndex = 1;
}
