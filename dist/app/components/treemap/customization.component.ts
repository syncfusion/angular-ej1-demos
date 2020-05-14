import { Component } from '@angular/core';
import { TreeMapDataService } from '../../services/treemapdata.service';

@Component({
  selector: 'sd-home',
  templateUrl: './customization.component.html',
  styleUrls: ['./treemap.component.css'],
  providers: [TreeMapDataService]
})
export class CustomizationComponent {

  ndatasource1: any;
  colorMapping: any;
  leaf: any;
  constructor(public treemapDataService: TreeMapDataService) {
    this.ndatasource1 = treemapDataService.medalData();
    this.leaf = {
      showLabels: true, labelPath: 'GameName', itemTemplate: 'imageTemplate'
    };

    this.colorMapping = { color: '#D73028' };
    setTimeout(() => {
      let template = $('#svgDocument')[0];
      let treemap = $('#treemap').ejTreeMap('instance');
      for (let i = 0; i < template.childElementCount; i++) {
        let child: any = template.childNodes[i];
        let gameImage = treemap.model.dataSource_two[i].GameImage;
        let div1 = document.createElement('div');
        div1.style.background = 'url(app/content/' + gameImage + ')' + 'no-repeat center center';
        div1.style.height = child.offsetHeight + 'px';
        div1.style.width = child.offsetWidth + 'px';
        child['style'].border = '1px solid white';
        document.body.appendChild(div1);
        child.appendChild(div1);
      }
    }, 800);
  }
}
