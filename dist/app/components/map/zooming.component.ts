import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { MapDataService } from '../../services/mapdata.service';
import { WorldMapDataService } from '../../services/WorldMapData.service';

@Component({
    selector: 'ej-app',
    templateUrl: './zooming.component.html',
    styleUrls: ['./map.component.css'],
    providers: [MapDataService, WorldMapDataService]
})
export class ZoomingComponent {
    mapdata: any;
    navigation: any;
    zoom: any;
    button: any;
    mapLayers: any;
    nshapedata: any;
    @ViewChild('map') map: EJComponents<any, any>;
    constructor(public mapDataService: MapDataService, worldMapDataService: WorldMapDataService) {
        this.mapdata = worldMapDataService.worldmap();
        this.nshapedata = mapDataService.syncLoc();
        this.navigation = { enableNavigation: true, orientation: 'vertical', absolutePosition: { x: 5, y: 15 }, dockPosition: 'none' };
        this.zoom = { enableZoomOnSelection: true };
        this.mapLayers = [
            {
                showToolTip: false,
                enableSelection: true,
                layerType: 'geometry',
                enableMouseHover: true,
                shapeDataPath: 'name',
                shapePropertyPath: 'name',
                dataSource: mapDataService.latLongPoints(),
                shapeSettings: {
                    fill: 'Grey',
                    strokeThickness: '0.5',
                    stroke: 'white',
                    highlightColor: '#F7CD1C',
                    highlightStroke: 'white',
                    highlightStrokeWidth: '1',
                    selectionColor: '#F96C0D',
                    valuePath: 'name',
                    selectionStroke: 'white',
                    selectionStrokeWidth: '2',
                    autoFill: true,
                    colorPalette: 'custompalette',
                    customPalette: ['#4A3825', '#736F3D', '#F2DABD', '#BF9D7E', '#7F6039', '#7F715F', '#70845D', '#CC995C', '#736F3D', '#89541B']
                },
                shapeData: this.mapdata
            }
        ];
    }


    onLoad() {
        let htmlSelect = document.getElementById('countriesCombo');
        this.button = document.querySelector('#countriesCombo');
        this.button.addEventListener('change', this.myFunc, false);

        let latLongPoints: Array<Object> = MapDataService.prototype.latLongPoints();
        for (let i = 0; i < latLongPoints.length; i++) {
            let item = latLongPoints[i];
            let selectBoxOption = document.createElement('option');
            selectBoxOption.value = item['name'];
            selectBoxOption.text = item['name'];
            htmlSelect['add'](selectBoxOption, null);
        }

    }

    myFunc() {
        let combo = $('#countriesCombo');
        let latLongPoints: Array<Object> = MapDataService.prototype.latLongPoints();
        let index = combo[0]['selectedIndex'];
        let lat = latLongPoints[index]['latitude'];
        let lon = latLongPoints[index]['longitude'];
        let level = 4;
        let map = $('#map').ejMap('instance');
        map.navigateTo(lat, lon, level, true);
        $('#map').ejMap('selectShape', latLongPoints[index]['name']);
    }



}
