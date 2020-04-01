import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/water.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class WaterfallComponent {
    Series: any;
    constructor(public chartDataService: ChartDataService) {
        this.Series = [
            {
                points: [{ x: 'Income', y: 4711, border: { color: '#5D843A' } }, { x: 'Marketing and sales', y: -427 },
                { x: 'Research', y: -588 }, { x: 'Development', y: -688 },
                { x: 'Other revenue', y: 1030, border: { color: '#5D843A' } }, { x: 'Intermediate sum', showIntermediateSum: true, border: { color: '#2B557F' }, fill: '#4E81BC' },
                { x: 'Administrative', y: -780 }, { x: 'Other expense', y: -361 },
                { x: 'Income tax', y: -695 }, { x: 'Net profit', showTotalSum: true, border: { color: '#2B557F' }, fill: '#4E81BC' }],

                fill: '#C64E4A', positiveFill: '#93C952',
                type: 'waterfall',
                border: { color: '#8E2827' },
                enableAnimation: true,
                marker: { dataLabel: { visible: true, textPosition: 'middle', font: { color: '#ffffff', size: '13px', fontWeight: 'regular' } } },
                tooltip: { visible: true }
            }
        ];
    }
    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }

}
