import { Component } from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './display-inline.component.html'
})
export class DisplayInlineComponent {
  value: string;
  inline: boolean;
  constructor() {
    this.value = Date();
    this.inline = true;
  }
}
