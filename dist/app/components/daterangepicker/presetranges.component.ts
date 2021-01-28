import { Component } from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './presetranges.component.html'
})
export class PresetsComponent {
  value: string;
  presets: any;
  constructor() {
    this.value = '1/1/2017 - 1/1/2018';
    this.presets = [
      { label: 'Today', range: [new Date(), new Date()] },
      { label: 'Last Week', range: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date()] },
      { label: 'Last Month', range: [new Date(new Date().setMonth(new Date().getMonth() - 1)), new Date()] },
      { label: 'Last 2 Months', range: [new Date(new Date().setMonth(new Date().getMonth() - 2)), new Date()] }
    ];
  }
}
