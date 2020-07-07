import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
  selector: 'sd-home',
  templateUrl: '/selection.component.html',
  providers: [ChartDataService, ChartMobileService]
})
export class SelectionComponent {
  SelectionData1: any;
  SelectionData2: any;
  SelectionData3: any;
  @ViewChild('selection') chart: EJComponents<any, any>;
  constructor(public chartDataService: ChartDataService) {
    let SelectionData1 = 'series1';
    let SelectionData2 = 'series2';
    let SelectionData3 = 'sereis3';
    this.SelectionData1 = chartDataService.getSelectionData(SelectionData1);
    this.SelectionData2 = chartDataService.getSelectionData(SelectionData2);
    this.SelectionData3 = chartDataService.getSelectionData(SelectionData3);
  }

  onchartload(sender) {
    ChartMobileService.prototype.onchartload(sender);
  }

  onchange1(sender) {
    for (let i = 0; i < this.chart.widget.model.series.length; i++) {
      this.chart.widget.model.series[i].highlightSettings.enable = sender.isChecked;
    }
    this.chart.widget.redraw();
  }

  onchange2(sender) {
    for (let i = 0; i < this.chart.widget.model.series.length; i++) {
      this.chart.widget.model.series[i].selectionSettings.enable = sender.isChecked;
    }
    this.chart.widget.redraw();
  }

  onchange3(sender) {
    this.chart.widget.model.enable3D = sender.isChecked;
    this.chart.widget.model.enableRotation = true;
    this.chart.widget.model.depth = 40;
    this.chart.widget.model.wallSize = 2;
    this.chart.widget.model.tilt = 0;
    this.chart.widget.model.rotation = 34;
    this.chart.widget.model.perspectiveAngle = 90;
    this.chart.widget.model.sideBySideSeriesPlacement = true;
    this.chart.widget.redraw();
  }

  onchange4(sender) {
    this.chart.widget.model.legend.toggleSeriesVisibility = !sender.isChecked;
    this.chart.widget.redraw();
  }

  onchange5(sender) {
    if (sender.text.toLowerCase() == 'pie' || sender.text.toLowerCase() == 'doughnut') {

      this.chart.widget.model.series[0].type = sender.text;
      this.chart.widget.model.series[1].type = 'column';
      this.chart.widget.model.series[2].type = 'column';
    } else {
      this.chart.widget.model.series[0].type = sender.text;
      this.chart.widget.model.series[1].type = sender.text;
      this.chart.widget.model.series[2].type = sender.text;
    }
    this.chart.widget.redraw();
  }

  onchange6(sender) {
    for (let i = 0; i < this.chart.widget.model.series.length; i++) {
      this.chart.widget.model.series[i].highlightSettings.color = sender.currentTarget.value;
    }
    this.chart.widget.redraw();
  }

  onchange7(sender) {
    for (let i = 0; i < this.chart.widget.model.series.length; i++) {
      this.chart.widget.model.series[i].highlightSettings.pattern = sender.text.toLowerCase();
    }
    this.chart.widget.redraw();
  }

  onchange8(sender) {
    for (let i = 0; i < this.chart.widget.model.series.length; i++) {
      this.chart.widget.model.series[i].highlightSettings.mode = sender.text.toLowerCase();
    }
    this.chart.widget.redraw();
  }

  onchange9(sender) {
    for (let i = 0; i < this.chart.widget.model.series.length; i++) {
      this.chart.widget.model.series[i].selectionSettings.color = sender.currentTarget.value;
    }
    this.chart.widget.redraw();
  }

  onchange10(sender) {
    for (let i = 0; i < this.chart.widget.model.series.length; i++) {
      this.chart.widget.model.series[i].selectionSettings.pattern = sender.text.toLowerCase();
    }
    this.chart.widget.redraw();
  }

  onchange11(sender) {
    for (let i = 0; i < this.chart.widget.model.series.length; i++) {
      this.chart.widget.model.series[i].selectionSettings.mode = sender.text.toLowerCase();
    }
    this.chart.widget.redraw();
  }

  onchange12(sender) {
    for (let i = 0; i < this.chart.widget.model.series.length; i++) {
      this.chart.widget.model.series[i].selectionSettings.type = sender.text.toLowerCase();
    }
    this.chart.widget.redraw();
  }

}
