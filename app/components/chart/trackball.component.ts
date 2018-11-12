import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/trackball.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class TrackballComponent {

    Range: any;
    trackData1: any;
    trackData2: any;
    trackData3: any;
    trackData4: any;
    trackData5: any;
    @ViewChild('track') chart: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.Range = { min: new Date(2000, 1, 1), max: new Date(2006, 2, 11), interval: 1 };
        let trackData1 = 'series1';
        let trackData2 = 'series2';
        let trackData3 = 'sereis3';
        let trackData4 = 'series4';
        let trackData5 = 'sereis5';
        this.trackData1 = chartDataService.getTrackData(trackData1);
        this.trackData2 = chartDataService.getTrackData(trackData2);
        this.trackData3 = chartDataService.getTrackData(trackData3);
        this.trackData4 = chartDataService.getTrackData(trackData4);
        this.trackData5 = chartDataService.getTrackData(trackData5);
    }

    onchange(sender) {
        this.chart.widget.model.crosshair.trackballTooltipSettings.mode = sender.text;
        if (sender.text == 'Float') {
           this.chart.widget.model.crosshair.trackballTooltipSettings.tooltipTemplate = 'Tooltip';
        } else {
           this.chart.widget.model.crosshair.trackballTooltipSettings.tooltipTemplate = null;
        }
        this.chart.widget.redraw();
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
