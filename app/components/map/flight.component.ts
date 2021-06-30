import { Component } from '@angular/core';
import { MapDataService } from '../../services/mapdata.service';
import { WorldMapDataService } from '../../services/WorldMapData.service';

@Component({
    selector: 'ej-app',
    templateUrl: './flight.component.html',
    styleUrls: ['./map.component.css'],
    providers: [MapDataService, WorldMapDataService]
})
export class FlightComponent {
    mapdata: any;
    mapLayers: any;
    navigation: any;
    nshapedata: any;
    constructor(public mapDataService: MapDataService, worldMapDataService: WorldMapDataService) {
        this.mapdata = worldMapDataService.worldmap();
        this.nshapedata = mapDataService.syncLoc();
        this.navigation = {
            enableNavigation: true,
            orientation: 'vertical',
            absolutePosition: { x: 5, y: 15 },
            dockPosition: 'none'
        };


        this.mapLayers = [
            {
                layerType: 'geometry',
                enableMouseHover: false,
                enableSelection: false,
                shapeSettings: {
                    fill: '#C6C35C',
                    autoFill: false,
                    highlightStroke: 'white',
                    stroke: 'white',
                    strokeThickness: 0.5,
                    highlightStrokeWidth: 1,
                    highlightColor: '#BFBFBF'
                },
                shapeData: this.mapdata,
                subLayers: [{
                    layerType: 'geometry',
                    shapeData: mapDataService.flightRoutes(),
                    shapePropertyPath: 'name',
                    enableMouseHover: true,
                    enableSelection: false,
                    showTooltip: false,
                    // tooltipTemplate: 'flightroute_template',
                    dataSource: mapDataService.flightRoutesData(),
                    shapeDataPath: 'name',
                    shapeSettings: {
                        strokeThickness: 1,
                        fill: '#BC0C0C',
                        stroke: '#BC0C0C',
                        valuePath: 'departure',
                        selectionColor: 'transparent',
                        highlightColor: 'transparent',
                        highlightStroke: '#4E1493',
                        highlightBorderWidth: 2
                    },
                },
                {
                    layerType: 'geometry',
                    shapePropertyPath: 'name',
                    enableMouseHover: true,
                    enableSelection: false,
                    showTooltip: false,
                    // tooltipTemplate: 'airport_template',
                    dataSource: mapDataService.airportsData(),
                    shapeDataPath: 'name',
                    shapeSettings: {
                        strokeThickness: 0.1,
                        fill: '#BC0C0C',
                        stroke: 'white',
                        valuePath: 'departure',
                        selectionColor: 'transparent',
                        highlightColor: 'transparent',
                        highlightStroke: 'white'
                    },
                    shapeData: mapDataService.airports()
                },
                {
                    layerType: 'geometry',
                    shapeData: mapDataService.intermediateStop1(),
                    shapePropertyPath: 'name',
                    enableMouseHover: true,
                    enableSelection: false,
                    showTooltip: false,
                    // tooltipTemplate: 'intermediatestop1_template',
                    dataSource: mapDataService.intermediateStop1Data(),
                    shapeDataPath: 'name',
                    shapeSettings: {
                        strokeThickness: 0.1,
                        fill: '#4E1493',
                        stroke: 'white',
                        valuePath: 'departure',
                        selectionColor: 'transparent',
                        highlightColor: 'transparent',
                        highlightStroke: 'white'
                    },
                },
                {
                    layerType: 'geometry',
                    shapeData: mapDataService.intermediateStop2(),
                    shapePropertyPath: 'name',
                    enableMouseHover: true,
                    enableSelection: false,
                    showTooltip: false,
                    // tooltipTemplate: 'intermediatestop2_template',
                    dataSource: mapDataService.intermediateStop2Data(),
                    shapeDataPath: 'name',
                    shapeSettings: {
                        strokeThickness: 0.1,
                        fill: '#4E1493',
                        stroke: 'white',
                        valuePath: 'departure',
                        selectionColor: 'transparent',
                        highlightColor: 'transparent',
                        highlightStroke: 'white'
                    },
                }]
            }
        ];
    }

}
