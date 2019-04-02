import { Component } from '@angular/core';
import { TreeMapDataService } from '../../services/treemapdata.service';

@Component({
  selector: 'sd-home',
  templateUrl: './drilldown.component.html',
  styleUrls: ['./treemap.component.css'],
  providers: [TreeMapDataService]
})
export class DrillDownComponent {
    ndatasource1: any;
    uniColorMapping: any;
  constructor(public treemapDataService: TreeMapDataService) {

    this.uniColorMapping = { color: '#CCDFE3' };
    this.ndatasource1 = treemapDataService.getDrilldownData();
  }
    headertemplaterender(sender) {
        if (sender.headerItem.drilldownHeaders) {
            let length: number = sender.childItems.length;
            let population = 0;
            for (let i = 0; i < length; i++) {
                population = population + sender.childItems[i].Population;
            }
            for (let j = 0; j < sender.headerItem.drilldownHeaders.length; j++) {
                if (j == sender.headerItem.drilldownHeaders.length - 1) {
                    sender.headerItem.drilldownHeaders[j] = sender.headerItem.originalHeaders[j] + ' - Population : ' + population.toLocaleString();
                } else {
                    sender.headerItem.drilldownHeaders[j] = sender.headerItem.originalHeaders[j];
                }
            }
        }
    }
}

