import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
    selector: 'ej-app',
    templateUrl: './api.component.html',
    providers: [NorthwindService]
})
export class ApiComponent {
    caption: any;
    range: any;
    datasource: any;
    quantitativescale: any;
    @ViewChild('bullet') bullet: EJComponents<any, any>;
    constructor(public northwindService: NorthwindService) {
        this.caption = {
            textPosition: 'left', textAlignment: 'center', padding: 5, text: 'Revenue YTD',
            subTitle: {
                text: '$ in Thousands', textPosition: 'left', textAlignment: 'center', padding: 5
            }
        };
        this.datasource = {
            datasource: northwindService.getOrders(),
            category: 'OrderID',
            featureMeasures: 'Freight',
            comparativeMeasure: 'EmployeeID'
        };

        this.range = 32;
        this.quantitativescale = {
            location: { x: 100, y: 200 },
            minimum: 0,
            maximum: 10,
            interval: 1,
            minorTicksPerInterval: 4,
            majorTickSettings: {
                size: 13,
                width: 1,
                stroke: 'gray'
            },
            minorTickSettings: {
                size: 5,
                width: 1,
                stroke: 'gray'
            },
            tickPosition: 'far',
            labelSettings: {
                position: 'below', offset: 14, size: 10
            },
            featuredMeasureSettings: { width: 5 },
            comparativeMeasureSettings: {
                width: 5
            },
            featureMeasures: [{ value: 8, comparativeMeasureValue: 6.7 }]
        };

    }

    AddPrefix(sender) {
        this.bullet.widget.model.quantitativeScaleSettings.labelSettings.labelPrefix = sender.currentTarget.value;
        this.bullet.widget.redraw();
    }

    AddSuffix(sender) {
        this.bullet.widget.model.quantitativeScaleSettings.labelSettings.labelSuffix = sender.currentTarget.value;
        this.bullet.widget.redraw();
    }

    onTickStroke(args) {
        if (args.isChecked) {
            this.bullet.widget.option('applyRangeStrokeToTicks', true);
        } else { this.bullet.widget.option('applyRangeStrokeToTicks', false); }
    };

    onLabelStroke(args) {
        if (args.isChecked) {
            this.bullet.widget.option('applyRangeStrokeToLabels', true);
        } else { this.bullet.widget.option('applyRangeStrokeToLabels', false); }
    }

    onAnimateClick(args) {
        if (args.isChecked) {
            this.bullet.widget.option('enableAnimation', true);
        } else {
            this.bullet.widget.option('enableAnimation', false);
        }
    }

    onValuechange(args) {
        let dat = this.bullet;
        if (dat) {
            if (args.id == 'featureMeasuresValue') {
                dat.widget.setFeatureMeasureBarValue(0, args.value);
            } else if (args.id == 'comparativeMeasureValue') {
                dat.widget.setComparativeMeasureSymbol(0, args.value);
            }
        }
    }

    onRangeStroke1change(args) {
        if (args.itemId != 0) {
            let bullet = $('#bullet').ejBulletGraph('instance');
            bullet.model.qualitativeRanges[0].rangeStroke = args.text;
            bullet.redraw();
        }
    }

    onRangeStroke2change(args) {
        if (args.itemId != 0) {
            let bullet = $('#bullet').ejBulletGraph('instance');
            bullet.model.qualitativeRanges[1].rangeStroke = args.text;
            bullet.redraw();
        }
    }

    onRangeStroke3change(args) {
        if (args.itemId != 0) {
            let bullet = $('#bullet').ejBulletGraph('instance');
            bullet.model.qualitativeRanges[2].rangeStroke = args.text;
            bullet.redraw();
        }
    }

    onMajorTickchange(args) {
        if (args.itemId != 0) {
            this.bullet.widget.option('quantitativeScaleSettings.majorTickSettings', { stroke: args.text });
        }
    }

    onMinorTickchange(args) {
        if (args.itemId != 0) {
            this.bullet.widget.option('quantitativeScaleSettings.minorTickSettings', { stroke: args.text });
        }
    }

    onFeaturebarchange(args) {
        if (args.itemId != 0) {
            this.bullet.widget.option('quantitativeScaleSettings.featuredMeasureSettings', { stroke: args.text });
        }
    }

    onComparativechange(args) {
        if (args.itemId != 0) {
            this.bullet.widget.option('quantitativeScaleSettings.comparativeMeasureSettings', { stroke: args.text });
        }
    }

    onOrientationchange(args) {
        this.bullet.widget.option('orientation', args.text);
    }

    onFlowDirectionchange(args) {
        this.bullet.widget.option('flowDirection', args.text);
    }
}
