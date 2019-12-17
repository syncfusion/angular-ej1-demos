import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './form.component.html',
    styleUrls: ['./tooltip.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class FormComponent {
    tooltipposition: Object;
    constructor() {
        this.tooltipposition = { stem: { horizontal: 'left', vertical: 'center' }, target: { horizontal: 'right', vertical: 'center' } };
    }
    onOpen(event) {
        let target = jQuery('#details').data('ejTooltip');
        let currentElement = event.event.currentTarget, content = jQuery(currentElement).attr('data-content');
        if (content == 'Enter a valid email address') {
            target.setModel({ cssClass: 'info' });
        }else {
            target.setModel({ cssClass: 'warning' });
        }
    }
}
