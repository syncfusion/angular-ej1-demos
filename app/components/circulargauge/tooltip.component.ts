import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './tooltip.component.html',
    providers: [ChartDataService]
})
export class TooltipComponent {
    customLabels: any;
    @ViewChild('gauge') gauge: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.customLabels = [
            {
                value: '0 9 5 4 3 5', position: { x: 200, y: 250 }, color: 'Green', font: { size: '20px' }
            }
        ];
    }

    onLabelTooltipChange(args) {
        if (args.isChecked) {
            this.gauge.widget.model.tooltip.showLabelTooltip = true;
        } else {
            this.gauge.widget.model.tooltip.showLabelTooltip = false;
        }
        this.gauge.widget.refresh();
    }
    onCustomLabelTooltipChange(args) {
        if (args.isChecked) {
            this.gauge.widget.model.tooltip.showCustomLabelTooltip = true;
        } else {
            this.gauge.widget.model.tooltip.showCustomLabelTooltip = false;
        }
        this.gauge.widget.refresh();
    }
    onTooltipTemplateChange(args) {
        if (args.isChecked) {
            this.gauge.widget.model.tooltip.templateID = 'Tooltip';
        } else {
            this.gauge.widget.model.tooltip.templateID = null;
        }
        this.gauge.widget.redraw();
    }

}
