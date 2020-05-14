import { Component } from '@angular/core';
import { MapDataService } from '../../services/mapdata.service';
import { WorldMapDataService } from '../../services/WorldMapData.service';
import { USMapDataService } from '../../services/USMapData.service';

@Component({
    selector: 'ej-app',
    templateUrl: './label.component.html',
    styleUrls: ['./map.component.css'],
    providers: [MapDataService, WorldMapDataService, USMapDataService]
})
export class LabelComponent {
    mapdata: any;
    navigation: any;
    nshapedata: any;
    mapLayers: any;
    constructor(public mapDataService: MapDataService, worldMapDataService: WorldMapDataService, uSMapDataService: USMapDataService) {
        this.mapdata = worldMapDataService.worldmap();
        this.nshapedata = mapDataService.syncLoc();
        this.navigation = { enableNavigation: true, orientation: 'vertical', absolutePosition: { x: 5, y: 15 }, dockPosition: 'none' };


        this.mapLayers = [
            {
                layerType: 'geometry',
                enableMouseHover: true,
                enableSelection: true,
                showTooltip: false,
                shapeDataPath: 'name',
                labelSettings: {
                    showLabels: true,
                    labelPath: 'iso_3166_2',
                    enableSmartLabel: true

                },
                legendSettings: {
                    showLegend: false,
                    positionX: 10,
                    positionY: 85,
                    height: 20,
                    width: 20,
                    position: 'none',
                    type: 'Layers',
                    mode: 'default'
                },
                shapePropertyPath: 'name',
                showMapItems: false,
                dataSource: mapDataService.usaStatePopulation(),
                shapeSettings: {
                    autoFill: false,
                    highlightBorderWidth: 1,
                    strokeThickness: 0.5,
                    stroke: 'white',
                    highlightColor: '#DAD1CF',
                    highlightStroke: '#1A5D65',
                    valuePath: 'population',
                    selectionColor: '#FFC200',
                    selectionStroke: 'white',
                    selectionStrokeWidth: 2.5,
                    colorMappings:
                    {
                        rangeColorMapping: [
                            {
                                from: 500000,
                                to: 1000000,
                                color: '#9BC585'
                            },
                            {
                                from: 1000001,
                                to: 5000000,
                                color: '#D2DB9A'

                            },
                            {
                                from: 5000001,
                                to: 10000000,
                                color: '#A4D4BF'

                            },
                            {
                                from: 10000001,
                                to: 40000000,
                                color: '#E0C68F'

                            }
                        ]
                    }
                },
                shapeData: uSMapDataService.usMap()
            }
        ];
    }

}
