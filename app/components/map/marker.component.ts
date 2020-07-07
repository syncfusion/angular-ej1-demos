import { Component } from '@angular/core';
import { MapDataService } from '../../services/mapdata.service';
import { WorldMapDataService } from '../../services/WorldMapData.service';

@Component({
    selector: 'ej-app',
    templateUrl: './marker.component.html',
    styleUrls: ['./map.component.css'],
    providers: [MapDataService, WorldMapDataService]
})
export class MarkerComponent {
    mapdata: any;
    navigation: any;
    nshapedata: any;
    mapLayers: any;
    constructor(public mapDataService: MapDataService, worldMapDataService: WorldMapDataService) {
        this.mapdata = worldMapDataService.worldmap();
        this.nshapedata = mapDataService.syncLoc();
        this.navigation = { enableNavigation: true, orientation: 'vertical', absolutePosition: { x: 5, y: 15 }, dockPosition: 'none' };


        this.mapLayers = [
          {
                layerType: 'geometry',
                enableSelection: false,
                enableMouseHover: false,
                markers: this.nshapedata,
                shapeData: this.mapdata,
                showMapItems: false,
                // markerTemplate: 'template',
                shapeSettings: {
                fill: '#626171',
                strokeThickness: '1',
                stroke: '#6F6F79',
                highlightStroke: '#6F6F79',
                valuePath: 'name',
                highlightColor: 'gray'

               }

            }
        ];


    }

     renderComplete(sender) {
       let marker = $('.e-TemplateDiv')[0];
         for (let i = 0; i < marker.childElementCount; i++) {
            let child = marker.childNodes[i];
            child.childNodes[0]['remove']();
            let div1 = document.createElement('div');
            div1.style.backgroundImage = 'url(//js.syncfusion.com/demos/jquery/Images/map/pin.png)';
            div1.style.backgroundRepeat = 'no-repeat';
            div1.style.height = '40px';
            div1.style.width = '26px';
            div1.style.marginLeft = '-13px';
            div1.style.marginTop = '-38px';
            let div2 = document.createElement('div');
            div2.style.backgroundImage = 'url(//js.syncfusion.com/demos/jquery/Images/map/mappath.png)';
            div2.style.backgroundRepeat = 'no-repeat';
            div2.style.height = '25px';
            div2.style.width = '90px';
            div2.style.marginLeft = '3px';
            div2.style.marginTop = '-15px';
            let label = document.createElement('label');
            label.innerText = sender.model.layers[0].markers[i].Name;
            label.style.marginLeft = '10px';
            label.style.marginTop = '3px';
            label.style.color = 'white';
            label.style.fontWeight = 'normal';
            div2.appendChild(label);
            document.body.appendChild(div1);
            document.body.appendChild(div2);
            child.appendChild(div1);
            child.appendChild(div2);
       }

   }
}
