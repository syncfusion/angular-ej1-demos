import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
    selector: 'ej-app',
    templateUrl: './remotedata.component.html',
    providers: [NorthwindService]
})
export class RemoteDataComponent {
    caption: any;
    range: any;
    dataManger: any;
    quantitativescale: any;
    Field: any;
    Query: any;
    constructor(public northwindService: NorthwindService) {
        this.dataManger = new ej.DataManager({
            url: '//js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc', crossDomain: true
        });
       let greater = ej.FilterOperators.greaterThan;
       let lesser = ej.FilterOperators.lessThanOrEqual;
       this.Query = new ej.Query().from('Products').take(10);
       this.Query = this.Query.where('UnitPrice', greater, 18, false).where('UnitPrice', lesser, 40, false).where('UnitsInStock', greater, 5, false).where('UnitsInStock', lesser, 45, false);
        window['query'] = this.Query;
        this.dataManger.executeQuery(this.Query)
            .done(function (e) {
                window['dataSource'] = e.result;

            });
        this.caption = {
            textAngle: 270,
            location: { x: 15, y: 290 }, text: 'Product (with IDs)',
            subTitle: {
                textAngle: 0,
                text: 'Production in Units', location: { x: 170, y: 540 }
            }
        };
        this.Field = {
            dataSource: window['dataSource'], query: this.Query, category: 'ProductID',
            featureMeasures: 'UnitPrice',
            comparativeMeasure: 'UnitsInStock'
        };

        this.range = 320;
        this.quantitativescale = {
            location: { x: 50, y: 60 },
            minimum: 5,
            maximum: 45,
            interval: 10,
            minorTicksPerInterval: 4,
            tickPosition: 'near',
            majorTickSettings: { width: 1, size: 13, stroke: 'gray' },
            minorTickSettings: { width: 1, size: 5, stroke: 'gray' },
            labelSettings: {
                position: 'above', offset: 15, size: 10
            }
        };
    }

    onLoad(sender) {
        setTimeout(() => {
            let bullet = $('#remote').ejBulletGraph('instance');
            if (bullet.model !== undefined) {
                bullet.model.fields = {
                    dataSource: window['dataSource'], query: window['query'], category: 'ProductID',
                    featureMeasures: 'UnitPrice',
                    comparativeMeasure: 'UnitsInStock'
                };
                bullet.redraw();
            }
        }, 2000);
    }
}
