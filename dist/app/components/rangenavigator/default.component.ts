import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
    selector: 'ej-app',
    templateUrl: './default.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class DefaultComponent {
    rntooltip: any;
    rangeData: any;
    primaryX: any;
    primaryY: any;
    cross: any;
    dataSource: any;
    constructor(public chartDataService: ChartDataService) {

        this.rntooltip = {
            labelFormat: 'MM/dd/yyyy',
            tooltipDisplayMode: 'ondemand',
            visible: true
        };
        this.rangeData = chartDataService.getRangeDateData().Open;
        this.dataSource = chartDataService.getRangeDateData();
        this.primaryX = {
            majorGridLines: { visible: false },
            valueType: 'datetime',
            labelFormat: 'MMM dd'

        };
        this.primaryY = {
            labelFormat: '${value}',
            range: { min: 60, max: 160, interval: 20 }
        };

        this.cross = {
            visible: true,
            type: 'trackball',
            marker:
            {
                shape: 'circle',

                size:
                {
                    height: 9, width: 9
                },
                visible: true,
                border: { width: 1 }
            },
            line: {
                color: 'transparent'
            }
        };
    }

    onrnload(sender) {
        ChartMobileService.prototype.onrnload(sender, this.rangeData);
    }

    onchartload(sender) {
        sender.model.series[0].dataSource = this.dataSource.Open;
        sender.model.series[0].xName = 'XValue';
        sender.model.series[0].yName = 'YValue';
        sender.model.series[1].dataSource = this.dataSource.Close;
        sender.model.series[1].xName = 'XValue';
        sender.model.series[1].yName = 'YValue';
    }
}
