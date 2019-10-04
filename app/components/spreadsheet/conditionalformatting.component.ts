import { Component } from '@angular/core';
import { SpreadsheetService } from '../../services/spreadsheet.service';

@Component({
    selector: 'ej-app',
    templateUrl: './conditionalformatting.component.html',
    styleUrls: ['./default.component.css'],
    providers: [SpreadsheetService]
})
export class ConditionalFormattingComponent {
    public spreadData;
    constructor(public SpreadsheetService: SpreadsheetService) {
        this.spreadData = SpreadsheetService.getconditionalFormat();
    }
    loadComplete(event) {
        let xlObj = $('#spreadsheet').data('ejSpreadsheet'), xlCFormat = xlObj.XLCFormat, xlFormat = xlObj.XLFormat;
        xlObj.sheetRename('Conditional Formatting');
        xlObj.setWidthToColumns([165, 130, 37, 165, 130, 37, 129, 132]);
        xlObj.mergeCells('A1:A5', true);
        xlObj.mergeCells('D1:D5', true);
        xlObj.mergeCells('G1:G5', true);
        xlObj.mergeCells('G7:G11', true);
        xlObj.mergeCells('A7:A11', true);
        xlObj.mergeCells('D7:D11', true);
        xlCFormat.setCFRule({ 'action': 'greaterthan', 'inputs': ['5000'], 'color': 'redft', 'range': 'E7:E11' });
        xlCFormat.setCFRule({ 'action': 'lessthan', 'inputs': ['30'], 'color': 'yellowft', 'range': 'H1:H5' });
        xlCFormat.setCFRule({ 'action': 'between', 'inputs': ['400', '500'], 'color': 'greenft', 'range': 'B7:B11' });
        xlCFormat.setCFRule({ 'action': 'equalto', 'inputs': ['20'], 'color': 'redf', 'range': 'H7:H11' });
        xlCFormat.setCFRule({ 'action': 'textcontains', 'inputs': ['loafers'], 'color': 'redt', 'range': 'B1:B5' });
        xlCFormat.setCFRule({ 'action': 'dateoccur', 'inputs': ['02/04/2014'], 'color': 'redft', 'range': 'E1:E5' });
        xlFormat.format({ 'style': { 'font-weight': 'bold', 'font-size': '10pt', 'vertical-align': 'middle', 'text-align': 'center' } }, 'A1:A13');
        xlFormat.format({ 'style': { 'font-weight': 'bold', 'font-size': '10pt', 'vertical-align': 'middle', 'text-align': 'center' } }, 'D1:D13');
        xlFormat.format({ 'style': { 'font-weight': 'bold', 'font-size': '10pt', 'vertical-align': 'middle', 'text-align': 'center' } }, 'G1:G7');
    }
}
