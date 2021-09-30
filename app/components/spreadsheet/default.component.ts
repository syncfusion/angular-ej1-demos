import { Component } from '@angular/core';
import { SpreadsheetService } from '../../services/spreadsheet.service';

@Component({
    selector: 'ej-app',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.css'],
    providers: [SpreadsheetService]
})
export class DefaultComponent {
    public spreadData;
    constructor(public SpreadsheetService: SpreadsheetService) {
        this.spreadData = SpreadsheetService.getDefaultData();
    }
    loadComplete(event) {
        let xlObj = $('#spreadsheet').data('ejSpreadsheet'), xlFormat = xlObj.XLFormat;
        if (!xlObj.model['isImport']) {
            xlObj.setWidthToColumns([140, 128, 105, 100, 100, 110, 120, 120, 100]);
            xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'A1:H1');
            xlFormat.format({ 'type': 'currency' }, 'E2:H11');
            xlObj.XLRibbon.updateRibbonIcons();
        }
    }
}
