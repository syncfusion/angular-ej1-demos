import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'ej-app',
  templateUrl: './dialogEditing.component.html',
  providers: [NorthwindService]
})
export class DialogEditingComponent {
  public kanbanData: any;
  constructor(private northwindService: NorthwindService) {
      this.kanbanData = northwindService.getTasks();
  }
  editItem = [
      { field: 'Id', editType: ej.Kanban.EditingType.String, validationRules: { required: true, number: true } },
      { field: 'Status', editType: ej.Kanban.EditingType.Dropdown },
      { field: 'Assignee', editType: ej.Kanban.EditingType.Dropdown },
      { field: 'Estimate', editType: ej.Kanban.EditingType.Numeric, editParams: { decimalPlaces: 2 }, validationRules: { range: [0, 1000] } },
      { field: 'Summary', editType: ej.Kanban.EditingType.TextArea, validationRules: { required: true } }
  ];
}
