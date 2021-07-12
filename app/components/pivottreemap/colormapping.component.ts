import { Component } from '@angular/core';
import { PivotDataService } from '../../services/pivotdata.service';

@Component({
  selector: 'ej-app',
  templateUrl: './colormapping.component.html',
  styleUrls: ['./default.component.css'],
  providers: [PivotDataService]
})
export class ColorMappingComponent {
  public data; cube; catalog; rows; columns; values; filters;
  constructor(public pivotdataservice: PivotDataService) {
    this.data = pivotdataservice.pivot_datacube();
    this.cube = pivotdataservice.pivot_cube();
    this.catalog = pivotdataservice.pivot_catelog();
    this.rows = pivotdataservice.pivot_Olaprows();
    this.columns = pivotdataservice.pivot_Olapcolumns();
    this.values = pivotdataservice.pivot_Olapvalues();
    this.filters = pivotdataservice.pivot_Olapfilters();
  }
  onRenderSuccess(args) {
    let treemapTarget = $('#pivotTreeMapTreeMapContainer').data('ejTreeMap');
    treemapTarget.model.tooltipTemplate = null;
    treemapTarget.model.showTooltip = false;
    treemapTarget.model.colorValuePath = '';
    treemapTarget.model.enableGradient = false;
    treemapTarget.model.showLegend = false;
    treemapTarget.model.legendSettings.leftLabel = '';
    treemapTarget.model.legendSettings.rightLabel = '';
    treemapTarget.model.rangeColorMapping = [];
    treemapTarget.model.colorValuePath = 'Index';
    treemapTarget.model['rangeColorMapping'] = [];
    let data: any = [{ color: '#9de24f', from: '0', to: '0' },
    { color: '#a2e2fe', from: '1', to: '1' },
    { color: '#ffff66', from: '2', to: '2' },
    { color: '#FF0040', from: '3', to: '3' },
    { color: '#f6b53f', from: '4', to: '4' },
    { color: '#6FAAB0', from: '5', to: '5' },
    { color: '#C4C24A', from: '6', to: '6' }];
    for ( let i = 0; i < data.length; i++) {
      treemapTarget.model['rangeColorMapping'].push(data[i]);
    }
  }
}
