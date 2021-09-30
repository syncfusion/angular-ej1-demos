import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './default.component.html',
    providers: [ChartDataService]
})
export class DefaultComponent {
    @ViewChild('digitalCore') digital: EJComponents<any, any>;
    @ViewChild('charspacing') spacing: EJComponents<any, any>;
    data: any[];
    item: any[];
    constructor(public chartDataService: ChartDataService) {
        this.data = ['7 segment', '14 segment', '16 segment', '8x8 dotmatrix', '8x8 squarematrix'];
        this.item = [{
            segmentSettings: {
                width: 1,
                spacing: 0,
                color: '#8c8c8c'
            },
            characterSettings: {
                opacity: 0.8,
            },
            value: '123456789',
            position: { x: 52, y: 52 }
        }];
    }


    textChange(sender) {
        this.digital.widget.setValue(0, sender.currentTarget.value);

    }
    onChange(args) {
        let digitaltarget = this.digital;
        let charSpacing = this.spacing;

        if (args.id == 'segmentspacing') {
            digitaltarget.model.items[0].segmentSettings.spacing = args.value;
        }else if (args.id == 'segmentwidth') {
            digitaltarget.model.items[0].segmentSettings.width = args.value;
        }else if (args.id == 'charspacing') {
            digitaltarget.model.items[0].characterSettings.spacing = args.value;
        }
        if (args.text == '7 segment' || args.text == '14 segment' || args.text == '16 segment') {
            digitaltarget.model.items[0].segmentSettings.length = 8;
            digitaltarget.model.items[0].characterSettings.spacing = 10;
            charSpacing.model.minValue = 7;
            charSpacing.model.maxValue = 12;
            charSpacing.widget.setModel({ value: digitaltarget.model.items[0].characterSettings.spacing });
        }else if (args.text == '8x8 dotmatrix' || args.text == '8x8 squarematrix') {
            digitaltarget.model.items[0].segmentSettings.length = 2;
            digitaltarget.model.items[0].characterSettings.spacing = 2;
            charSpacing.model.minValue = 1;
            charSpacing.model.maxValue = 4;
            charSpacing.widget.setModel({ value: digitaltarget.model.items[0].characterSettings.spacing });
        }
        switch (args.text) {
            case '7 segment':
                digitaltarget.model.items[0].characterSettings.type = 'sevensegment';
                break;
            case '14 segment':
                digitaltarget.model.items[0].characterSettings.type = 'fourteensegment';
                break;
            case '16 segment':
                digitaltarget.model.items[0].characterSettings.type = 'sixteensegment';
                break;
            case '8x8 dotmatrix':
                digitaltarget.model.items[0].characterSettings.type = 'eightcrosseightdotmatrix';
                break;
            case '8x8 squarematrix':
                digitaltarget.model.items[0].characterSettings.type = 'eightcrosseightsquarematrix';
                break;
        }
        digitaltarget.widget._setModel(digitaltarget.model.items);

    }
}
