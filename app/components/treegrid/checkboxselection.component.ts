import { Component } from '@angular/core';
import { GanttDataService } from '../../services/ganttdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './checkboxselection.component.html',
  styleUrls: ['./default.component.css'],
  providers: [GanttDataService]
})
export class CheckboxSelectionComponent {
  treeGridData: any;
  selection: any;
  constructor(public ganttDataService: GanttDataService) {
    this.treeGridData = ganttDataService.getGanttData();
    this.selection = {
      selectionType: ej.TreeGrid.SelectionType.Checkbox,
      selectionMode: ej.TreeGrid.SelectionMode.Row,
      enableSelectAll: true,
      enableHierarchySelection: true
    };
  }
  public treeColumnIndex = 1;
}
