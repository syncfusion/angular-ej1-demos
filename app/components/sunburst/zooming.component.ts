import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { SunburstDataService } from '../../services/sunburstdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './zooming.component.html',
  providers: [SunburstDataService]
})
export class ZoomingComponent {
  ZoomingData: any;
  Level: any;
  Palette: any;
  @ViewChild('zooming') sunburst: EJComponents<any, any>;
  constructor(public sunburstDataService: SunburstDataService) {
    this.ZoomingData = sunburstDataService.getDefaultData();
    this.Level = [
      { groupMemberPath: 'Country' },
      { groupMemberPath: 'JobDescription' },
      { groupMemberPath: 'JobGroup' },
      { groupMemberPath: 'JobRole' }
    ];
    this.Palette = ['#002e4d', '#005c99', '#008ae6', '#33adff', '#80ccff'];
  }
  onchange1(sender) {
    if (sender.isChecked) {
      this.sunburst.widget.model.zoomSettings.enable = true;
    } else {
      this.sunburst.widget.model.zoomSettings.enable = false;
    }
    this.sunburst.widget.redraw();
  }

}
