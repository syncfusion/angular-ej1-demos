import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';
import '../../content/images/chart/cultures/ej.culture.en-US.min';
import '../../content/images/chart/cultures/ej.culture.fr-FR.min';
import '../../content/images/chart/cultures/ej.culture.vi-VN.min';
@Component({
    selector: 'sd-home',
    templateUrl: '/localization.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class LocalizationComponent {
    localizationData: any;
    @ViewChild('localization') chart: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.localizationData = chartDataService.getLocalizationData();
    }
    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }

    OndataLabel(sender) {
        sender.data.text = sender.data.text + '%';
        sender.data.location.x = sender.data.location.x + 8;
    }

    onchange1(sender) {
        let chart = $('#localization').ejChart('instance');
        chart.model.locale = sender.selectedText;
        chart.redraw();
    }
}
