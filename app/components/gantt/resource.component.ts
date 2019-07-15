import { Component } from '@angular/core';
import { GanttDataService } from '../../services/ganttdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './resource.component.html',
  styleUrls: ['./gantt.component.css'],
  providers: [GanttDataService]
})
export class ResourceComponent {
  public ganttData: any;
  public resourceData: Array<any>;

  constructor(public ganttDataService: GanttDataService) {

    this.ganttData = new ej.DataManager(ganttDataService.getGanttData());
    this.resourceData = ganttDataService.getResourceData();

  }
  load() {
          let proxy = $('#GanttControl').ejGantt('instance');
          let columns = proxy.getColumns();
          columns[1].visible = columns[2].visible = columns[3].visible = columns[6].visible = columns[7].visible = false;
          columns[4].visible = columns[5].visible = columns[8].visible = columns[9].visible = columns[10].visible = true;
  }
  public treeColumnIndex = 1;
}
