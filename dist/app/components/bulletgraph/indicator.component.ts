import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
    selector: 'ej-app',
    templateUrl: './indicator.component.html',
    providers: [NorthwindService]
})
export class IndicatorComponent {
    caption: any;
    range: any;
    data: any[];
    quantitativescale: any;
    @ViewChild('bullet') bullet: EJComponents<any, any>;
    constructor(public northwindService: NorthwindService) {
        this.data = ['circle', 'uparrow', 'downarrow', 'leftarrow', 'rightarrow', 'cross', 'horizontalline', 'verticalline', 'triangle', 'invertedtriangle',
            'hexagon', 'wedge', 'pentagon', 'star', 'rectangle', 'trapezoid', 'diamond', 'ellipse'];
        this.caption = {
            textAngle: 0, location: { x: 17, y: 160 }, text: 'Revenue YTD',
            subTitle: {
                textAngle: 0,
                text: '$ in Thousands', location: { x: 10, y: 175 }
            },
            indicator: {
                visible: true, textSpacing: 8, text: ' $ 1.3 K ', location: { x: 15, y: 195 }, font: { color: 'green', fontFamily: 'Segoe UI', fontSize: '13px', fontWeight: 'bold' },
                symbol: { size: { width: 10, height: 10 }, shape: 'triangle', color: 'green' }
            }
        };
        this.range = 32;
        this.quantitativescale = {
            location: { x: 108, y: 150 },
            minimum: 0,
            maximum: 10,
            interval: 1,
            majorTickSettings: { size: 13, width: 1, stroke: 'gray' },
            minorTickSettings: { size: 5, width: 1, stroke: 'gray' },
            labelSettings: { offset: 14, size: 10, labelPrefix: '$ ', labelSuffix: 'K' },
            featuredMeasureSettings: { width: 6 },
            comparativeMeasureSettings: { width: 5 },
            featureMeasures: [{ value: 8, comparativeMeasureValue: 6.7 }]
        };
    }
    onchange(sender) {
        this.bullet.widget.option('captionSettings.indicator.symbol', { shape: sender.value });
    }
}
