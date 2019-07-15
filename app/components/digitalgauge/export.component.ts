import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './export.component.html',
    providers: [ChartDataService]
})
export class ExportComponent {
    @ViewChild('linearCore') linearIns: EJComponents<any, any>;
    @ViewChild('fileFormat') file: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
    }
    buttonclickevent() {

        let fileName = document.getElementById('fileName')['value'] == '' ? 'DigitalGauge' : document.getElementById('fileName')['value'];
        let fileFormat = this.file.widget.value();
        let flag = this.linearIns.widget.exportImage(fileName, fileFormat);
        if (!flag) {
           alert('Sorry for the inconvenience. Export is currently not supported in Internet Explorer 9 and below version');
        }
    }
}

