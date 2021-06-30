import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
   selector: 'sd-home',
   templateUrl: '/legend.component.html',
   providers: [ChartDataService, ChartMobileService]
})
export class LegendComponent {
    legendData: any;
    @ViewChild('legend') chart: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.legendData = chartDataService.getLegendData();
    }
    onchartload(sender) {
       ChartMobileService.prototype.onchartload(sender);
   }
   legendBorder(sender) {
       if (sender.model.theme == 'flatdark' || sender.model.theme == 'gradientdark') {
         sender.model.legend.border.color = 'white';
       }
    }

    onchange1(sender) {
        $('#legend').ejChart('option', { 'legend': this.legend('positionChanged', sender.selectedText) });
        this.changeHeightWidth();
    }

    onchange2(sender) {
        $('#legend').ejChart('option', { 'legend': this.legend('alignmentChanged', sender.selectedText) });
        this.changeHeightWidth();
    }
    onchange3(sender) {
        this.changeHeightWidth();
    }
    onchange4(sender) {
        this.changeHeightWidth();
    }
    onchange5(sender) {
        $('#legend').ejChart('option', { 'legend': this.legend('rowcountChanged', sender.selectedText) });
        this.changeHeightWidth();
    }
    onchange6(sender) {

        $('#legend').ejChart('option', { 'legend': this.legend('columncountChanged', sender.selectedText) });
        this.changeHeightWidth();
    }
    onchange7(sender) {
        $('#legend').ejChart('option', { 'legend': this.legend('textoverflowChanged', sender.selectedText) });
        this.changeHeightWidth();
    }
    onchange8(sender) {
       this.changeTextWidth();
    }

    legend(sender: any, data: any) {
        let common: any;
        let count: any;
        switch (sender) {
            case 'positionChanged':
                let legendPosition = data.toLowerCase();
                common = {
                    position: legendPosition
                };
                break;
            case 'textoverflowChanged':
                let textoverflow = data.toLowerCase();
                common = {
                    textOverflow: textoverflow
                };
                break;
            case 'alignmentChanged':
                let legendAlignment = data.toLowerCase();
                common = {
                    alignment: legendAlignment
                };
                break;
            case 'rowcountChanged':
                count = data;
                common = { rowCount: count };
                break;
            case 'columncountChanged':
                count = data;
                common = { columnCount: count };
                break;
        }

        return common;
     }

     changeTextWidth() {
        let textwidth = parseInt($('#textWidth').val());
        let chart = $('#legend').ejChart('instance');
        chart.model.legend.textWidth = textwidth;
        chart.redraw();
    }

    changeHeightWidth() {
        let width = $('#legendWidth').val();
        let height = $('#legendHeight').val();
        let chart = $('#legend').ejChart('instance');
        if (parseInt(width)) {
            chart.model.legend.size.width = (parseInt(width) > 0) ? width : '';
        }
        if (parseInt(height)) {
            chart.model.legend.size.height = (parseInt(height) > 0) ? height : '';
        }
        chart.redraw();
      }


}
