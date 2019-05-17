import { Component } from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: 'app/components/splitter/integration.component.html',
  styleUrls: ['app/components/splitter/integration.component.css']
})
export class IntegrationComponent {
  properties: any;
  constructor() {
     this.properties = [{ paneSize: '50%', minSize: 30 }, { minSize: 30 }];
   }
   treeClicked(event) {
     let content: any;
        if (event.currentElement.hasClass('_child')) {
            content = $('.' + event.currentElement[0].id).html();
            $('._content').html(content);
        }
    }
}
