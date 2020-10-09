import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';

@Component({
    selector: 'sd-home',
    templateUrl: '/multiSelection.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class MultiSelectionComponent {
    MultiSelection1: any;
    MultiSelection2: any;
    constructor(public chartDataService: ChartDataService) {
        let MultiSelection1 = 'series1';
        let MultiSelection2 = 'series2';
        this.MultiSelection1 = chartDataService.getMultiSelectionData(MultiSelection1);
        this.MultiSelection2 = chartDataService.getMultiSelectionData(MultiSelection2);
    }
    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
        let gData = [], newData = [];
        gData.push({ Year: 'No Data', Sales: 'No Data' });
        newData.push({ Year: 'No Data', Sales: 'No Data' });
        $('#ProductA').ejGrid({ 'dataSource': gData });
        $('#ProductA').ejGrid({ 'allowScrolling': true, 'scrollSettings': { width: 'auto' } });
        $('#ProductB').ejGrid({ 'dataSource': newData });
        $('#ProductB').ejGrid({ 'allowScrolling': true, 'scrollSettings': { width: 'auto' } });
    }

    onchange1(sender) {
        let val = $('#selection')[0]['value'];
        let chart = $('#container').ejChart('instance');
        for (let i = 0; i < chart.model.series.length; i++) {
            chart.model.series[i].selectionSettings.rangeType = val;
            chart.redraw();
        }
    }

    selectedRegion(sender) {
        let gData = [], newData = [], collectiondata = [];
        for (let i = 0; i < sender.data.selectedDataCollection.length; i++) {
            for (let j = 0; j < sender.data.selectedDataCollection[i].length; j++) {
                collectiondata[j] = sender.data.selectedDataCollection[i][j];
                if (collectiondata[j].seriesIndex === 0) {
                    gData.push({ Year: collectiondata[j].x.toString(), Sales: collectiondata[j].y.toString() });
                } else if (collectiondata[j].seriesIndex === 1) {
                    newData.push({ Year: collectiondata[j].x.toString(), Sales: collectiondata[j].y.toString() });
                }
            }
        }
        if (gData) {
            $('#ProductA').ejGrid({ 'dataSource': gData });
            $('#ProductA').ejGrid({ 'allowScrolling': true, 'scrollSettings': { width: 120 } });
        }
        if (newData) {
            $('#ProductB').ejGrid({ 'dataSource': newData });
            $('#ProductB').ejGrid({ 'allowScrolling': true, 'scrollSettings': { width: 120 } });
        }

    }
}
