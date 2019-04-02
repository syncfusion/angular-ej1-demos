import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { SunburstDataService } from '../../services/sunburstdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './animation.component.html',
  providers: [SunburstDataService]
})
export class AnimationComponent {
  Data1: any;
  Level: any;
  @ViewChild('animation') sunburst: EJComponents<any, any>;
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
      this.sunburst.widget.model.enableAnimation = true;
    } else {
      this.sunburst.widget.model.enableAnimation = false;
    }
    this.sunburst.widget.redraw();
  }
  onchange2(sender) {
    switch (sender.text) {
      case 'Rotation':
        this.sunburst.widget.model.animationType = 'rotation';
        break;
      case 'FadeIn':
        this.sunburst.widget.model.animationType = 'fadeIn';
        break;
    }
    this.sunburst.widget.redraw();
  }
}
