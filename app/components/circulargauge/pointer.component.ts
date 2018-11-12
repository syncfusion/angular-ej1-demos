import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './pointer.component.html',
    providers: [ChartDataService]
})
export class PointerComponent {
         customLabels: any;
         indicators: any;
 constructor(public chartDataService: ChartDataService) {

    this.customLabels = [{
            value: 'SPORTS', position: { x: 175, y: 160 }, color: '#333333', font: { fontFamily: 'Segoe UI', fontStyle: 'Bold', size: '16px' }
        }, {
            value: 'Fan Ratio', position: { x: 175, y: 175 }, color: '#333333', font: { fontFamily: 'Segoe UI', size: '14px' }
        }, {
            value: '(in million)', position: { x: 175, y: 190 }, color: '#333333', font: { fontFamily: 'Segoe UI', size: '10px' }
        }];
        this.indicators = [
        {
            height: 10, width: 10, type: 'text', textLocation: { x: 0, y: 0 }, stateRanges: [{ startValue: 0, endValue: 100, text: '', textColor: '#8c8c8c', font: { size: '12px' } }]
        }, {
            height: 10, width: 10, type: 'text', textLocation: { x: 0, y: 0 }, stateRanges: [{ startValue: 0, endValue: 100, text: '', textColor: '#8c8c8c', font: { size: '12px' } }]
        }, {
            height: 10, width: 10, type: 'text', textLocation: { x: 0, y: 0 }, stateRanges: [{ startValue: 0, endValue: 100, text: '', textColor: '#8c8c8c', font: { size: '12px' } }]
        }];


  }

    drawLabels(args) {
            if (args.pointerValue != 100 && args.pointerValue != 0) {
                args.style.textValue = '';
            }
        }
        drawpointers(args) {
            let i = args.pointer.index;
            args.model.scales[0].indicators[i].stateRanges[0].text = args.pointer.pointerValue.toString();
            args.model.scales[0].indicators[i].position.x = args.position.startX + 8;
            args.model.scales[0].indicators[i].position.y = args.position.startY + 25;
        }
        loadGaugeTheme(event) {}


}
