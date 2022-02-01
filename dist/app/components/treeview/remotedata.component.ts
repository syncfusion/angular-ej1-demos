import { Component } from '@angular/core';

@Component({
  selector: 'ej-app',
   styleUrls: ['./treeview.component.css'],
  templateUrl: './remotedata.component.html'
})
export class RemotedataComponent {
  dataManger: any;
  query: any;
  fields: Object;
  constructor() {
      this.dataManger = new ej.DataManager({ url: '//js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/', crossDomain: true });
    this.query = new ej.Query().from('Categories').select('CategoryID,CategoryName').take(3);
    this.fields = { query: this.query, id: 'CategoryID', text: 'CategoryName', dataSource: this.dataManger,
     child: {
         dataSource: this.dataManger, tableName: 'Products', parentId: 'CategoryID', text: 'ProductName'
        }
    };
 }
}
