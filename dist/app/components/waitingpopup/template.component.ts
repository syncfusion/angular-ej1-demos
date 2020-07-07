import {Component} from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './template.component.html',
  styleUrls: ['./default.component.css']
})
export class TemplateComponent {
    onCreate(event) {
       let obj = jQuery('#target').data('ejWaitingPopup');
       obj.setModel({template: $('#content')});
    }
}
