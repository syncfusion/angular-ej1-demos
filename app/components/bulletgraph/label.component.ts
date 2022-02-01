import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
    selector: 'ej-app',
    templateUrl: './label.component.html',
    providers: [NorthwindService]
})
export class LabelComponent {
    caption: any;
    range: any;
    quantitativescale: any;

    @ViewChild('bullet') bullet: EJComponents<any, any>;
    constructor(public northwindService: NorthwindService) {
        this.caption = {
            textAngle: 0, location: { x: 17, y: 168 }, text: 'Revenue YTD',
            subTitle: {
                textAngle: 0,
                text: '$ in Thousands', location: { x: 10, y: 182 }
            }
        };
        this.range = 50;
        this.quantitativescale = {
            location: { x: 108, y: 150 },
            labelSettings: { offset: 14, size: 10, labelPrefix: '$', labelSuffix: ' K' },
            majorTickSettings: { size: 13, width: 1, stroke: 'gray' },
            minorTickSettings: { size: 5, width: 1, stroke: 'gray' },
        };

    }

    BulletTickPos(sender) {
        this.bullet.widget.option('quantitativeScaleSettings.tickPosition', sender.value);
    }

    BulletLabelPlacement(sender) {
        this.bullet.widget.option('quantitativeScaleSettings.labelSettings.labelPlacement', sender.value);
    }

    BulletTickPlacement(sender) {
        this.bullet.widget.option('quantitativeScaleSettings.tickPlacement', sender.value);
    }

    BulletLabelPosition(sender) {
        this.bullet.widget.option('quantitativeScaleSettings.labelSettings.position', sender.value);
    }

    BulletLabelOffset(sender) {
        this.bullet.widget.option('quantitativeScaleSettings.labelSettings.offset', parseFloat(sender.value));
    }

    BulletFlow(sender) {
        this.bullet.widget.option('flowDirection', sender.value);
    }

    BulletOrientation(sender) {
        this.bullet.widget.option('orientation', sender.value);
    }

}
