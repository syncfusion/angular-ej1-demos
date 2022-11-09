import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/animation.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class AnimationComponent {
    animationData: any;
    @ViewChild('animation') chart: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.animationData = chartDataService.getAnimationData();
    }

    onchange1(args) {
        let type = args.text.toLowerCase();
        this.chart.widget.model.series[0].type = type;
        this.chart.widget.model.legend.visible = type == 'pie' || type == 'doughnut';
        if (type == 'column' || type == 'bar' || type == 'bubble' || type == 'polar') {
            this.chart.widget.model.series[0].marker.visible = false;
        } else {
            this.chart.widget.model.series[0].marker.visible = true;
        }
        this.chart.widget.redraw();
    }

    onchange2(args) {
        this.chart.widget.model.series[0].enableAnimation = args.isChecked;
        if (args.isChecked) {
            this.chart.widget.animate();
        }
    }
    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }
    onchange3(sender) {
        this.chart.widget.model.series[0].animationDuration = parseInt(sender.value);
        this.chart.widget.animate();
    }
}
