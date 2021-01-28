import { Component } from '@angular/core';
import { MapDataService } from '../../services/mapdata.service';
import { WorldMapDataService } from '../../services/WorldMapData.service';
import { USMapDataService } from '../../services/USMapData.service';

@Component({
    selector: 'ej-app',
    templateUrl: './selection.component.html',
    styleUrls: ['./map.component.css'],
    providers: [MapDataService, WorldMapDataService, USMapDataService]
})
export class SelectionComponent {
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
                shapeDataPath: 'State',
                shapePropertyPath: 'name',
                showMapItems: false,
                dataSource: mapDataService.electionData(),
                shapeSettings: {
                    highlightBorderWidth: 1,
                    strokeThickness: 0.5,
                    autoFill: false,
                    stroke: 'white',
                    highlightStroke: 'white',
                    highlightColor: '#AFAFAF',
                    valuePath: 'Electors',
                    colorValuePath: 'Candidate',
                    selectionColor: '#EFB856',
                    selectionStroke: 'White',
                    selectionStrokeWidth: 2.5,
                    colorMappings:
                    {
                        equalColorMapping:
                        [
                            { value: 'Romney', color: '#D84444' },
                            { value: 'Obama', color: '#316DB5' }
                        ]
                    }
                },
                shapeData: uSMapDataService.usMap()

            }
        ];
    }


    onSelect(event) {
        if (event.originalEvent.length > 0) {
            let matched = jQuery['uaMatch'](navigator.userAgent);
            let browser = matched.browser.toLowerCase();
            let isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
            if (isIE11) {
                browser = 'msie';
            }
            let object = event.originalEvent[0].data;
            let popup = document.getElementById('closepopup');
            let closebutton = document.getElementById('closebutton');
            let winner = document.getElementById('winner');
            let state = document.getElementById('state');
            let vote = document.getElementById('votes');
            $(popup).css('display', 'block');

            $(closebutton).css({ 'display': 'block', 'left': '206px' });
            $(closebutton).css({ 'display': 'block', 'top': '-15px' });

            $(closebutton).click(function () {
                let popup = document.getElementById('closepopup');
                let closebutton = document.getElementById('closebutton');
                $(popup).css('display', 'none');
                $(closebutton).css('display', 'none');
            });

            if (browser != 'mozilla') {
                state.innerText = object.State;
                vote.innerText = object.Electors;
                winner.innerText = object.Candidate;
            }else {
                state.textContent = object.State;
                vote.textContent = object.Electors;
                winner.textContent = object.Candidate;
            }
        }
    }

}
