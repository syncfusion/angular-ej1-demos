import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { SunburstDataService } from '../../services/sunburstdata.service';

@Component({
    selector: 'ej-app',
    templateUrl: './default.component.html',
    providers: [SunburstDataService]
})
export class DefaultComponent {
    Data1: any;
    Level: any;
    @ViewChild('sunburst') sunburst: EJComponents<any, any>;
    constructor(public sunburstDataService: SunburstDataService) {
        this.Data1 = sunburstDataService.getDefaultData();
        this.Level = [
            { groupMemberPath: 'Country' },
            { groupMemberPath: 'JobDescription' },
            { groupMemberPath: 'JobGroup' },
            { groupMemberPath: 'JobRole' }
        ];
    }

    onchange(args) {
        if (args.id == 'startAngle') {
            this.sunburst.widget.model.startAngle = args.value;
        } else if (args.id == 'endAngle') {
            this.sunburst.widget.model.endAngle = args.value;
        } else if (args.id == 'outerRadius') {
            this.sunburst.widget.model.radius = args.value;
        } else if (args.id == 'innerRadius') {
            this.sunburst.widget.model.innerRadius = args.value;
        }
        this.sunburst.widget.redraw();
    }
    onchange1(sender) {
        switch (sender.text) {
            case 'Trim':
                this.sunburst.widget.model.dataLabelSettings.labelOverflowMode = 'trim';
                break;
            case 'Hide':
                this.sunburst.widget.model.dataLabelSettings.labelOverflowMode = 'hide';
                break;
            case 'None':
                this.sunburst.widget.model.dataLabelSettings.labelOverflowMode = 'none';
                break;
        }
        this.sunburst.widget.redraw();
    }
    onchange2(sender) {
        switch (sender.text) {
            case 'Angle':
                this.sunburst.widget.model.dataLabelSettings.labelRotationMode = 'angle';
                break;
            case 'Normal':
                this.sunburst.widget.model.dataLabelSettings.labelRotationMode = 'normal';
                break;
        }
        this.sunburst.widget.redraw();
    }
}
