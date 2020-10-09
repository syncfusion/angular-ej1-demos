import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { MapDataService } from '../../services/mapdata.service';
import { USMapDataService } from '../../services/USMapData.service';

@Component({
    selector: 'ej-app',
    templateUrl: './heat.component.html',
    styleUrls: ['./map.component.css'],
    providers: [MapDataService, USMapDataService]
})
export class HeatComponent {
    mapdata: any;
    navigation: any;
    nshapedata: any;
    mapLayers: any;
    @ViewChild('map') maps: EJComponents<any, any>;
    constructor(public mapDataService: MapDataService, usMapDataService: USMapDataService) {
        this.mapdata = usMapDataService.usMap();
        this.nshapedata = mapDataService.usaStatePopulation();
        this.navigation = { enableNavigation: false, orientation: 'vertical', absolutePosition: { x: 5, y: 15 }, dockPosition: 'none' };


        this.mapLayers = [
            {
                showTooltip: false,
                enableSelection: false,
                layerType: 'geometry',
                shapeDataPath: 'name',
                shapePropertyPath: 'name',
                showMapItems: false,
                dataSource: this.nshapedata,
                enableMouseHover: true,
                legendSettings: {
                    showLegend: true,
                    position: 'bottomright',
                    positionX: 3,
                    positionY: 80,
                    height: 18,
                    width: 190,
                    type: 'layers',
                    mode: 'interactive',
                    title: 'Population',
                    leftLabel: '0.5M',
                    rightLabel: '40M'
                },
                shapeSettings: {
                    fill: '#9CBF4E',
                    strokeThickness: '0.5',
                    stroke: 'White',
                    highlightStroke: 'White',
                    autoFill: false,
                    highlightColor: '#BC5353',
                    selectionColor: '#BC5353',
                    highlightBorderWidth: '1',
                    valuePath: 'population',
                    colorMappings:
                    {
                        rangeColorMapping: [
                            {

                                from: 10000001,
                                to: 40000000,
                                color: '#F1ECD8'
                            },
                            {

                                from: 5000001,
                                to: 10000000,
                                color: '#DEE2B9'
                            },
                            {
                                from: 1000001,
                                to: 5000000,
                                color: '#CBD89A'
                            },
                            {
                                from: 500000,
                                to: 1000000,
                                color: '#B8CE7B'

                            }
                        ]
                    }
                },
                shapeData: this.mapdata
            }
        ];
    }

    onchange1(sender) {
        if (sender.isChecked) {
            this.maps.widget.model.enableRTL = true;
        } else {
            this.maps.widget.model.enableRTL = false;
        }
    this.maps.widget.refresh();
  }

}
