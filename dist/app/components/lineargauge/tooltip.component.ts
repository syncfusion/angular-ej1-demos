import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './tooltip.component.html',
    providers: [ChartDataService]
})
export class TooltipComponent {
    scale: any;
    tooltip: any;

    @ViewChild('linearCore') linearIns: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.tooltip = { showLabelTooltip: true, showCustomLabelTooltip: true, templateID: 'Tooltip' };
        this.scale = [{
            minimum: 0, maximum: 1.5, minorIntervalValue: 0, majorIntervalValue: 0.25, showCustomLabels: true,
            width: 4, border: { color: 'transparent', width: 0 }, showBarPointers: false, showRanges: true, length: 310,
            position: { x: 52, y: 50 },
            markerPointers: [{
                value: 1.2, length: 10, width: 10, backgroundColor: '#4D4D4D', border: { color: '#4D4D4D' }
            }],
            labels: [{
                font: { size: '11px', fontFamily: 'Segoe UI', fontStyle: 'bold' },
                unitText: '$ ', unitTextPlacement: 'front',
                distanceFromScale: { x: -20 }, textColor: '#8c8c8c'
            }],
            ticks: [{ type: 'majorinterval', width: 1, color: '#8c8c8c' }],
            ranges: [{
                endValue: 0.75,
                startValue: 0,
                backgroundColor: 'Green',
                border: { color: 'Green' }, startWidth: 4, endWidth: 4
            }, {
                endValue: 1,
                startValue: 0.75,
                backgroundColor: 'yellow',
                border: { color: 'yellow' }, startWidth: 4, endWidth: 4
            }, {
                endValue: 1.5,
                startValue: 1,
                backgroundColor: 'Red',
                border: { color: 'Red' }, startWidth: 4, endWidth: 4
            }],
            customLabels: [{
                value: 'Fuel Cost $ / L', position: { x: 48, y: 100 }, color: '#fc0606',
                font: { size: '12px', fontFamily: 'Arial', fontStyle: 'bold' }
            }]
        }];
    }


    onLabelTooltipChange(args) {


        if (args.isChecked) {

            this.linearIns.widget.option('tooltip', { showLabelTooltip: true });
        } else {
            this.linearIns.widget.option('tooltip', { showLabelTooltip: false });
        }
    }
    onCustomLabelTooltipChange(args) {
        if (args.isChecked) {
            this.linearIns.widget.option('tooltip', { showCustomLabelTooltip: true });
        } else {
            this.linearIns.widget.option('tooltip', { showCustomLabelTooltip: false });
        }
    }
    onTooltipTemplateChange(args) {
        if (args.isChecked) {
            this.linearIns.widget.option('tooltip', { templateID: 'Tooltip' });
        } else {
            this.linearIns.widget.option('tooltip', { templateID: null });
        }
    }
}
