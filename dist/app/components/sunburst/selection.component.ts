import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { SunburstDataService } from '../../services/sunburstdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './selection.component.html',
  providers: [SunburstDataService]
})
export class SelectionComponent {
  Data1: any;
  Level: any;
  @ViewChild('selection') sunburst: EJComponents<any, any>;
  constructor(public sunburstDataService: SunburstDataService) {
    this.Data1 = sunburstDataService.getAnimationData();
    this.Level = [
      { groupMemberPath: 'Continent' },
      { groupMemberPath: 'Country' },
      { groupMemberPath: 'State' }
    ];
  }

  onchange1(sender) {
    if (sender.isChecked) {
      this.sunburst.widget.model.highlightSettings.enable = true;
    } else {
      this.sunburst.widget.model.highlightSettings.enable = false;
    }
    this.sunburst.widget.redraw();
  }
  onchange2(sender) {
    switch (sender.text) {
      case 'Point':
        this.sunburst.widget.model.highlightSettings.mode = 'point';
        break;
      case 'All':
        this.sunburst.widget.model.highlightSettings.mode = 'all';
        break;
      case 'Child':
        this.sunburst.widget.model.highlightSettings.mode = 'child';
        break;
      case 'Parent':
        this.sunburst.widget.model.highlightSettings.mode = 'parent';
        break;
    }
    this.sunburst.widget.redraw();
  }
  onchange3(sender) {
    if (sender.isChecked) {
      this.sunburst.widget.model.selectionSettings.enable = true;
    } else {
      this.sunburst.widget.model.selectionSettings.enable = false;
    }
    this.sunburst.widget.redraw();
  }
  onchange4(sender) {
    switch (sender.text) {
      case 'Point':
        this.sunburst.widget.model.selectionSettings.mode = 'point';
        break;
      case 'All':
        this.sunburst.widget.model.selectionSettings.mode = 'all';
        break;
      case 'Child':
        this.sunburst.widget.model.selectionSettings.mode = 'child';
        break;
      case 'Parent':
        this.sunburst.widget.model.highlightSettings.mode = 'parent';
        break;
    }
    this.sunburst.widget.redraw();
  }
}
