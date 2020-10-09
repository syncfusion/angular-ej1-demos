import { Component } from '@angular/core';
import { MapDataService } from '../../services/mapdata.service';
import { USMapDataService } from '../../services/USMapData.service';

@Component({
  selector: 'sd-home',
  templateUrl: 'app/components/map/map.component.html',
  styleUrls: ['app/components/map/map.component.css'],
  providers: [MapDataService, USMapDataService]
})
export class MapComponent {
  public usmap;
  public enableselection;
  public enablemousehover;
  public showtooltip;
  public enableanimation;
  public legendsettings;
  public shapesettings;
  public shapedatapath;
  public shapepropertypath;
  public showmapitems;
  public electiondata;
  constructor(public mapDataService: MapDataService, uSMapDataService: USMapDataService) {
    this.enableanimation = true;
    this.usmap = uSMapDataService.usMap();
    this.enableselection = true;
    this.enablemousehover = true;
    this.shapedatapath = 'State';
    this.shapepropertypath = 'name';
    this.showmapitems = false;
    this.electiondata = mapDataService.electionData();
    this.legendsettings = {
      showLegend: true,
      position: 'bottomleft',
      height: 60,
      width: 220,
      mode: 'default',
    };
    this.shapesettings = {
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
    };
  }
}
