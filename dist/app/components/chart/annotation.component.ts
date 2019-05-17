import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/annotation.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class AnnotationComponent {
    annotationData: any;
    Annotation: any;
    constructor(public chartDataService: ChartDataService) {
        this.Annotation = [
            { visible: true, content: 'watermark', opacity: 0.2, region: 'series' },
            { visible: true, content: 'lowtemp', coordinateUnit: 'points', x: 1, y: 51, verticalAlignment: 'top', margin: { bottom: 5 } },
            { visible: true, content: 'hightemp', coordinateUnit: 'points', x: 7, y: 97, verticalAlignment: 'top', margin: { bottom: 5 } }
        ];
        this.annotationData = chartDataService.getAnnotationData();
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
}
