import { Component } from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './imagewithcontent.component.html',
  styleUrls: ['./imagewithcontent.component.css']
})
export class ImageWithContentComponent {
  data: Array<any>;
  fieldList: Object;
  constructor() {
    this.data = [
      { text: 'snowfall', url: 'app/content/images/rotator/snowfall.jpg' },
      { text: 'tablet', url: 'app/content/images/rotator/tablet.jpg' },
      { text: 'nature', url: 'app/content/images/rotator/nature.jpg' },
      { text: 'card', url: 'app/content/images/rotator/card.jpg' },
      { text: 'bird', url: 'app/content/images/rotator/bird.jpg' },
      { text: 'wheat', url: 'app/content/images/rotator/wheat.jpg' },
      { text: 'night', url: 'app/content/images/rotator/night.jpg' }
    ];
    this.fieldList = { dataSource: this.data, text: 'text', url: 'url' };
  }
}
