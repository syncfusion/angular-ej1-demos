import { Component } from '@angular/core';
import { GanttDataService } from '../../services/ganttdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './editing.component.html',
  styleUrls: ['./gantt.component.css'],
  providers: [GanttDataService]
})
export class EditingComponent {
  public ganttData: any;
  public editsettings: any;
  public toolbar: any;
  constructor(public ganttDataService: GanttDataService) {
    this.ganttData = new ej.DataManager(ganttDataService.getGanttData());
    this.editsettings = {
      allowAdding: true,
      allowEditing: true,
      allowIndent: true,
      allowDeleting: true,
      editMode: 'cellEditing'
    };
    this.toolbar = {
      showToolbar: true,
      toolbarItems: ['add', 'edit', 'delete', 'update', 'indent', 'outdent', 'cancel', 'expandAll', 'collapseAll']
    };
  }
  public treeColumnIndex = 1;
}
