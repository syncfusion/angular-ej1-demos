import { Component } from '@angular/core';
import { GanttDataService } from '../../services/ganttdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './editing.component.html',
  styleUrls: ['./default.component.css'],
  providers: [GanttDataService]
})
export class EditingComponent {
  treeGridData: any;
  public editsettings: any;
  public toolbarsettings: any;
  constructor(public ganttDataService: GanttDataService) {
    this.treeGridData = ganttDataService.getGanttData();
    this.editsettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true
    };
    this.toolbarsettings = {
      showToolbar: true,
      toolbarItems: ['add', 'edit', 'delete', 'update', 'cancel', 'expandAll', 'collapseAll']
    };
  }
  public treeColumnIndex = 1;
}
