import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { TreeMapDataService } from '../../services/treemapdata.service';

@Component({
    selector: 'sd-home',
    templateUrl: './flat.component.html',
    styleUrls: ['./treemap.component.css'],
    providers: [TreeMapDataService]
})
export class FlatComponent {

    populationData: any;
    colorMapping: any;
    legendSettings: any;
    leaf: any;
    @ViewChild('treemap') treemap: EJComponents<any, any>;
    constructor(public treemapDataService: TreeMapDataService) {
        this.populationData = treemapDataService.populationdata();
        this.leaf = {
            labelPath: 'Country',
            showLabels: true
        };
        this.legendSettings = {
            leftLabel: '20000000',
            width: 150,
            height: 20,
            rightLabel: '300000000',
            title: 'Population',
            mode: 'interactive',
            dockPosition: 'top',
            alignment: 'center'
        };
        this.colorMapping = [{
            from: 29671000,
            to: 315646000,
            gradientColors: ['#fde6cc', '#fab665']
        }];
    }

    onchange(args) {
        let treemapObj = this.treemap;
        if (treemapObj != null) {
            if (args.selectedText == 'Squarified') {
                treemapObj.widget.option('itemsLayoutMode', 'squarified');
            }else if (args.selectedText == 'Horizontal') {
                treemapObj.widget.option('itemsLayoutMode', 'sliceanddicehorizontal');
            }else if (args.selectedText == 'Vertical') {
                treemapObj.widget.option('itemsLayoutMode', 'sliceanddicevertical');
            }else if (args.selectedText == 'Auto') {
                treemapObj.widget.option('itemsLayoutMode', 'sliceanddiceauto');
            }
        }
    }

}
