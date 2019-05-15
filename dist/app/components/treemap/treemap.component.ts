import { Component } from '@angular/core';
import { TreeMapDataService } from '../../services/treemapdata.service';

@Component({
  selector: 'sd-home',
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.css'],
  providers: [TreeMapDataService]
})
export class TreeMapComponent {
  public treemapData;
  public val;
  constructor(public treemapDataService: TreeMapDataService) {
    this.treemapData = treemapDataService.populationdata();
    this.val = 'Population';
  }
}
