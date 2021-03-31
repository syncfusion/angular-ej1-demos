import { Component, Output, EventEmitter, ElementRef } from '@angular/core';
import './ej.smartscroller';

@Component({
  selector: '[smart-scroller]',
  template: '<ng-content></ng-content>'
})

export class SmartScroller {

  @Output() reach = new EventEmitter();
  element: any;
  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngAfterViewInit() {
    let j = jQuery(this.element)['ejSmartScroller']({
      reach: () => {
        this.reach['emit'](j);
      }
    });
  }
}
