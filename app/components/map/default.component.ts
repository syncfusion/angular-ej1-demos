import { Component } from '@angular/core';
import { MapDataService } from '../../services/mapdata.service';
import { ShapeMapDataService } from '../../services/ShapeMapData.service';

@Component({
  selector: 'ej-app',
  templateUrl: './default.component.html',
  styleUrls: ['./map.component.css'],
  providers: [MapDataService, ShapeMapDataService]
})
export class DefaultComponent {
    mapdata: any;
    nshapedata: any;
    mapZoomSettings: any;
    mapLayers: any;
    mapShapeSettings: any;
    mapbubbleSettings: any;
  constructor(public mapDataService: MapDataService, shapeMapDataService: ShapeMapDataService) {
    this.mapdata = mapDataService.getMapData();
    this.nshapedata = shapeMapDataService.shapeData();
    this.mapShapeSettings = {
        fill: '#4E7EC4',
        valuePath: 'Sales',
        strokeThickness: 0.5,
        selectionColor: '#207BB2',
        colorvaluePath: 'Sales',
        stroke: 'white',
        highlightColor: '#F4CD0C'
    };

    this.mapbubbleSettings = {
        showBubble: true,
        valuePath: 'Sales',
        minValue: 15,
        maxValue: 30,
        color: '#F47F31',
        colorMappings: {
            rangeColorMapping: [
                {from: '400', to: '600', color: '#C6C35C'},
                {from: '601', to: '900', color: '#F94165'},
                {from: '901', to: '1500', color: '#F47F31'}
            ]
        }
    };
  this.mapLayers = [{
    shapeData: this.nshapedata,
    dataSource: this.mapdata,
    showMapItems: true,
    shapeSettings: this.mapShapeSettings,
    enableSelection: true,
    enableMouseHover: true,
    bubbleSettings: this.mapbubbleSettings
    }];
  }

}
