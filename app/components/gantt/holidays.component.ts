import { Component } from '@angular/core';
import { GanttDataService } from '../../services/ganttdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './holidays.component.html',
  styleUrls: ['./gantt.component.css'],
  providers: [GanttDataService]
})
export class HolidaysComponent {
  public ganttData: any;
  public holidays: any;
  public striplines: any;
  constructor(public ganttDataService: GanttDataService) {
    this.ganttData = new ej.DataManager(ganttDataService.getGanttData());
    this.holidays = [
      {
        day: '02/11/2017',
        background: 'yellowgreen',
        label: 'Holiday1'
      },
      {
        day: '02/19/2017',
        background: 'yellowgreen',
        label: 'Holiday2',
      },
    ];
    this.striplines = [
      {
        day: '02/06/2017',
        label: 'project Starts here',
        lineStyle: 'dotted',
        lineWidth: '1',
        lineColor: 'Darkblue'
      },
      {
        day: '03/06/2017',
        label: 'project Ends here',
        lineStyle: 'dotted',
        lineWidth: '1',
        lineColor: 'Darkblue'
      },
    ];
  }
  public treeColumnIndex = 1;
}
