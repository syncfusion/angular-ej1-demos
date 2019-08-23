import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/drilldown.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class DrilldownComponent {

    drillData: any;
    @ViewChild('drill') chart: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.drillData = chartDataService.getDrillData();
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
    }

    onclick(sender) {
        let pointIndex = sender.data.region.Region.PointIndex;
        document.getElementById('text').innerHTML = sender.model._visibleSeries[0]._visiblePoints[pointIndex].x;
        if (sender.model.series[0].name == 'Market') {
            $('#drill').ejChart('option', { 'drilldown': this.pieSeries(pointIndex) });
        }
        document.getElementById('symbol').style.visibility = 'visible';

    }

    completeAnimation(sender) {
        if (sender.model.series[0].name != 'Market') {
            document.getElementById('button').style.visibility = 'visible';
        } else {
            document.getElementById('button').style.visibility = 'hidden';
        }
    }

    pieSeries(index) {
        let common: any;
        if (index == 0) {
            common = {
                title: { text: 'Automobile Sales in the SUV segment' },
                series:
                [
                    {
                        points: [{ x: 'Toyota', y: 8, text: 'Toyota 8%' }, { x: 'Ford', y: 12, text: 'Ford 12%' },
                        { x: 'GM', y: 17, text: 'GM 17%' }, { x: 'Renault', y: 6, text: 'Renault 6%' },
                        { x: 'Fiat', y: 3, text: 'Fiat 3%' }, { x: 'Hyundai', y: 16, text: 'Hyundai 16%' },
                        { x: 'Honda', y: 8, text: 'Honda 8%' }, { x: 'Maruthi', y: 10, text: 'Maruthi 10%' },
                        { x: 'BMW', y: 20, text: 'BMW 20%' }],
                        name: 'SUV-Sale',
                        labelPosition: 'outside',
                        enableAnimation: true,
                        marker:
                        {
                            dataLabel:
                            {
                                visible: true,
                                connectorLine: { height: 40 },
                                font: { size: '12px', color: '#707070' }
                            }
                        }
                    }
                ],
                legend: { visible: false }
            };
        } else if (index == 1) {
            common = {
                title: { text: 'Automobile Sales in the Car segment' },
                series:
                [
                    {
                        points: [{ x: 'Toyota', y: 7, text: 'Toyota 7%' }, { x: 'Chrysler', y: 12, text: 'Chrysler 12%' },
                        { x: 'Nissan', y: 9, text: 'Nissan 9%' }, { x: 'Ford', y: 15, text: 'Ford 15%' },
                        { x: 'Tata', y: 10, text: 'Tata 10%' }, { x: 'Mahindra', y: 7, text: 'Mahindra 7%' },
                        { x: 'Renault', y: 8, text: 'Renault 8%' }, { x: 'Skoda', y: 5, text: 'Skoda 5%' },
                        { x: 'Volkswagen', y: 15, text: 'Volkswagen 15%' }, { x: 'Fiat', y: 3, text: 'Fiat 3%' }],
                        name: 'Car-Sale',
                        labelPosition: 'outside',
                        enableAnimation: true,
                        marker:
                        {
                            dataLabel:
                            {
                                visible: true,
                                connectorLine: { height: 40 },
                                font: { size: '12px', color: '#707070' }
                            }
                        }
                    }
                ],
                legend: { visible: false }

            };
        } else if (index == 2) {
            common = {
                title: { text: 'Automobile Sales in the Pickup segment' },
                series:
                [
                    {
                        points: [{ x: 'Nissan', y: 9, text: 'Nissan 9%' }, { x: 'Chrysler', y: 4, text: 'Chrysler 4%' },
                        { x: 'Ford', y: 7, text: 'Ford 7%' }, { x: 'Toyota', y: 20, text: 'Toyota 20%' },
                        { x: 'Suzuki', y: 13, text: 'Suzuki 13%' }, { x: 'Lada', y: 12, text: 'Lada 12%' },
                        { x: 'Bentley', y: 6, text: 'Bentley 6%' }, { x: 'Volvo', y: 10, text: 'Volvo 10%' },
                        { x: 'Audi', y: 19, text: 'Audi 19%' }],

                        name: 'Pickup-Sale',
                        labelPosition: 'outside',
                        enableAnimation: true,
                        marker:
                        {
                            dataLabel:
                            {
                                visible: true,
                                connectorLine: { height: 40 },
                                font: { size: '12px', color: '#707070' }
                            }
                        }
                    }
                ],
                legend: { visible: false }

            };
        } else if (index == 3) {
            common = {
                title: { text: 'Automobile Sales in the Minivan segment' },
                series:
                [
                    {
                        points: [{ x: 'Hummer', y: 11, text: 'Hummer 11%' }, { x: 'Ford', y: 5, text: 'Ford 5%' },
                        { x: 'GM', y: 12, text: 'GM 13%' }, { x: 'Chrysler', y: 3, text: 'Chrysler 3%' },
                        { x: 'Jaguar', y: 9, text: 'Jaguar 10%' }, { x: 'Fiat', y: 8, text: 'Fiat 8%' },
                        { x: 'Honda', y: 15, text: 'Honda 16%' }, { x: 'Hyundai', y: 4, text: 'Hyundai 4%' },
                        { x: 'Scion', y: 11, text: 'Scion 12%' }, { x: 'Toyota', y: 17, text: 'Toyota 18%' }],
                        name: 'Minivan-Sale',
                        labelPosition: 'outside',
                        enableAnimation: true,
                        marker:
                        {
                            dataLabel:
                            {
                                visible: true,
                                connectorLine: { height: 40 },
                                font: { size: '12px', color: '#707070' }
                            }
                        }
                    }
                ],
                legend: { visible: false }

            };
        } else {
            common = {
                title: { text: 'Automobile Sales by Category' },
                series:
                [
                    {
                        points: [{ x: 'SUV', y: 25, text: '25%' }, { x: 'Car', y: 37, text: '37%' },
                        { x: 'Pickup', y: 15, text: '15%' }, { x: 'Minivan', y: 23, text: '23%' }],
                        name: 'Market',
                        explode: true,
                        enableAnimation: true,
                        marker:
                        {
                            dataLabel:
                            {
                                visible: true,
                                font: { size: '24px', color: '#FFFFFF' }
                            }
                        }
                    }
                ],
                legend: { visible: true },
                AnimationComplete: false
            };
        }
        return common;
    }

    buttonclickevent(sender) {
        let index: any;
        $('#drill').ejChart('option', { 'drilldown': this.pieSeries(index) });
        document.getElementById('button').style.visibility = 'hidden';
        document.getElementById('text').innerHTML = '';
        document.getElementById('symbol').style.visibility = 'hidden';
    }
}
