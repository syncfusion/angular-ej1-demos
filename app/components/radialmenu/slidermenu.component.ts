import { Component, ViewEncapsulation } from '@angular/core';

declare var $: any;
@Component({
  selector: 'ej-app',
  templateUrl: './slidermenu.component.html',
  styleUrls: ['./slidermenu.component.css'],
   encapsulation: ViewEncapsulation.None
})
export class SliderMenuComponent {
  content: any;
  badgesetting: any;
  slidersetting: any;
  constructor() {
    this.content = 'Model–view–controller (MVC) is a software architecture pattern which separates the representation of information from the user' +
      'interaction with it.The model consists of application data, business rules, logic, and functions.A view can be; any output representation of data,' +
      'such as a chart or a diagram.Multiple views of the same data are possible, such as a bar chart for management and a tabular view for accountants.' +
      ' The controller mediates input, converting it to commands for the model or view.<br/> The central ideas behind MVC are code reusability and in addition' +
      ' to dividing the application into three kinds of components, the MVC design defines the interactions between them.A controller can send commands' +
      ' to its associated view to change the view presentation of the model (e.g., by scrolling through a document). It can also send commands to the model to update the model state' +
      '(e.g., editing a document).A model notifies its associated views and controllers when there has been a change in its state.This notification allows the views to produce updated' +
      ' output, and the controllers to change the available set of commands.A passive implementation of MVC omits these' +
      ' notifications, because the application does not require them or the software platform does not support them.A view requests from the model the information that it needs to' +
      ' generate an output representation to the user.';
      this.badgesetting = {
        enabled : true,
        value : 2
      };
      this.slidersetting = {
        ticks : [0, 2, 4, 6, 8, 10, 12, 14],
        strokeWidth : 1
      };
  }
  onSelect(event) {
      let target;
      let radialRadius;
      let radialDiameter;
      let iframeY;
      let iframeX;
      let xPos;
      let yPos;
      let x;
      let y;
      target = $('#radialtarget1');
      $('#slideradialmenu').ejRadialMenu({autoOpen: true});
      radialRadius = 150;
      radialDiameter = 2 * radialRadius;
      iframeY = target.offset().top + event.event.clientY;
      iframeX = target.offset().left + event.event.clientX;
      xPos = (iframeX > radialRadius ? iframeX - radialRadius : 0);
      yPos = (iframeY > radialRadius ? iframeY - radialRadius : 0);
      x = iframeX > (target.width() - radialRadius) ? (target.width() - radialDiameter) : xPos;
      y = iframeY > (target.height() - radialRadius) ? (target.height() - radialDiameter) : yPos;
      $('#slideradialmenu').ejRadialMenu('setPosition', x, y);
  }
  onChange(event) {
    $('#slideradialmenu').ejRadialMenu('enableItem', 'Undo');
  }
  onItemClick(e) {
    let rteObj = $('#rteSample1').data('ejRTE'); let val: any; let size: any;
    let itemName = (ej.isNullOrUndefined(e.text)) ? 'none' : e.text.toLowerCase();
    if (ej.isNullOrUndefined(e.value)) {
    switch (itemName) {
      case 'bold':
        rteObj.executeCommand('bold');
        break;
      case 'italic':
        rteObj.executeCommand('italic');
        break;
      case 'undo':
        rteObj.executeCommand('undo');
        break;
      case 'redo':
        rteObj.executeCommand('redo');
        break;
      case 'numbering':
        rteObj.executeCommand('insertorderedList');
        break;
      case 'bullets':
        rteObj.executeCommand('insertunorderedList');
        break;
      case 'left':
        rteObj.executeCommand('justifyLeft');
        break;
      case 'right':
        rteObj.executeCommand('justifyRight');
        break;
    }
    }else if (!isNaN(e.value)) {
      if (!ej.isNullOrUndefined(e.value)) {
      val = e.value.toString();
      } else {
      size = e.text.split('Font');
      val = size[1];
    }
      rteObj.executeCommand('fontSize', val);
    }
  }
}

