import { Component } from '@angular/core';
import { TreeMapDataService } from '../../services/treemapdata.service';

@Component({
  selector: 'sd-home',
  templateUrl: './default.component.html',
  styleUrls: ['./treemap.component.css'],
  providers: [TreeMapDataService]
})
export class DefaultComponent {

    ndatasource1: any;
    colorMapping: any;
    leaf: any;
  constructor(public treemapDataService: TreeMapDataService) {
    this.ndatasource1 = treemapDataService.getTreemapData();
    this.leaf = {
        borderThickness : 2,
        labelPath: 'Country',
        showLabels: true
    };

  this.colorMapping = [
    {
       color: '#77D8D8', legendLabel: '1% Growth', to: '1', from: '0'
    },
    {
       color: '#AED960', legendLabel: '2% Growth', to: '2', from: '0'
    },
    {
       color: '#FFAF51', legendLabel: '3% Growth', to: '3', from: '0'
    },
    {
       color: '#F3D240', legendLabel: '4% Growth', to: '4', from: '0'
    }
    ];
  }

}
