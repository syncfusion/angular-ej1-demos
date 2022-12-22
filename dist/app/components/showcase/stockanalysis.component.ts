import { Component, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';

@Component({
    selector: 'ej-app',
    templateUrl: './stockanalysis.component.html',
    styleUrls: ['./stockanalysis.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class StockAnalysisComponent {
    public stockdetails: Array<any> = [
        { title: 'GOOG', value: 70.39, high: 'High: 764.8', low: 'Low: 673.5', id: 'GOOG', popupid: 'goog-wait', range: 'decrement', status: 'down', arrow: 'downarrow' },
        { title: 'MSFT', value: 1.82, high: 'High: 37.5', low: 'Low: 32.68', id: 'MSFT', popupid: 'msft-wait', range: 'increment', status: 'up', arrow: 'uparrow' },
        { title: 'AAPL', value: 7.61, high: 'High: 705.7', low: 'Low: 656.0', id: 'AAPL', popupid: 'aapl-wait', range: 'increment', status: 'up', arrow: 'uparrow' },
        { title: 'NOK', value: 10.35, high: 'High: 42.22', low: 'Low: 36.6', id: 'NOK', popupid: 'nok-wait', range: 'decrement', status: 'down', arrow: 'downarrow' }
    ];
    public tooltippoint: Array<any> = [
        { date: 'Date:', point: '#point.x#' },
        { date: 'Open:', point: '#point.open#' },
        { date: 'High:', point: '#point.high#' },
        { date: 'Low:', point: '#point.low#' },
        { date: 'Close:', point: '#point.close#' }
    ];
    public colchartyears: Array<any> = [
        { id: '5Y' }, { id: '3Y' },
        { id: '2Y' }, { id: '1Y' }
    ];
    ownerDetailsWidth: number;
    stockStatuswidth: number;
    colXSeriesRange: any;
    colYSeriesRange: any;
    colDataValue: number;
    stockStatuswidthValue: number;
    colValue: number;
    colchartXAxisrange: Object;
    hilochartTitleFont: Object;
    colchartXAxis: any;
    colchartData: any;
    hilochartResponsive: boolean;
    hilochartPopup: boolean;
    xpoint: any;
    ypoint: any;
    eleWidth: number;
    div: number;
    colData: any;
    dataManager: any;
    marginResize: number;
    marginReady: number;
    ownerdetailsdisplay: string;
    tileimagedisplay: string;
    stockstatusdisplay: string;
    imgLabelfontsize: string;
    stockstatuspadding: number;
    tilewidth: boolean;
    @ViewChild('columnchart') columnchart: EJComponents<any, any>;
    @ViewChild('hilochart') hilochart: EJComponents<any, any>;
    @ViewChild('stockdetailsPopup') stockdetailsPopup: EJComponents<any, any>;
    @ViewChild('hilochartwaitingpopup') hilochartwaitingpopup: EJComponents<any, any>;
    @ViewChild('sampletitleElement') sampletitleElement: ElementRef;
    @ViewChild('stockstatusElement') stockstatusElement: ElementRef;
    constructor() {
        this.colchartXAxisrange = {
            range: {
                min: '2008/2/1',
                max: '2013/1/1'
            }
        };
        this.hilochartTitleFont = {
            fontWeight: 'lighter',
            color: '#b9cfe7',
            size: '45px'
        };
        this.hilochartResponsive = true;
        this.colchartData = this.getData();
        this.colchartXAxis = this.setRangeAxis(5);
        this.colchartData = this.setcolumndatasource(this.colchartData);
        this.hilochartPopup = true;
    }
    stockclick(event, details) {
        this.stockdetailsPopup.widget.element.ejWaitingPopup('option', { 'target': '#' + details.popupid }); // stockdetails Waiting_popup
        this.stockdetailsPopup.widget.show();
        this.hilochartPopup = true; // hilochart Waiting_popup
        this.getWebAPIData(details.title, details);
        this.hilochart.widget.element.ejChart('option', { title: { text: details.id } });
        this.colchartData = this.getData();
        this.columnchart.widget.element.ejChart('option', { 'datasource': this.setcolumndatasource(this.colchartData), 'primaryXAxis': this.setRangeAxis(5) });

    }
    getWebAPIData(filename, sender) {
        this.dataManager = new ej.DataManager({ url: '//mvc.syncfusion.com/Services/api/Stock/' + filename + '', });

        this.dataManager.executeQuery(new ej.Query()).done((e) => {
            this.hilochart.widget.element.ejChart('option', {
                'datasource': this.setHilodataSource(e.result),
                'primaryXAxis': this.setHiloRangeXAxis(),
                'primaryYAxis': this.setHiloRangeAxis(filename)
            });
            this.stockdetailsPopup.widget.element.ejWaitingPopup('option', { 'target': '#' + filename.toLowerCase() + '-wait' });
            this.stockdetailsPopup.widget.hide();
            this.hilochartPopup = false;
        });
    }
    colchartload(sender) {
        this.colData = this.getData();
        sender.model.series[0].dataSource = this.colData.Open;
        sender.model.series[0].xName = 'XValue';
        sender.model.series[0].yName = 'YValue';
        sender.model.series[1].dataSource = this.colData.Close;
        sender.model.series[1].xName = 'XValue';
        sender.model.series[1].yName = 'YValue';
    }
    hilochartload(sender) {
        this.hilochartPopup = true;
        this.stockStatuswidth = jQuery(this.stockstatusElement.nativeElement).width();
        if (this.stockStatuswidth > 400) {
            this.stockdetailsPopup.widget.element.ejWaitingPopup('option', { 'target': '#' + sender.model.title.text.toLowerCase() + '-wait' });
            this.stockdetailsPopup.widget.show();
        }
        this.getWebAPIData(sender.model.title.text, sender);
    }
    setHilodataSource(data) {
        return {
            series: [{
                dataSource: data,
                xName: 'XValue',
                high: 'High',
                open: 'Open',
                low: 'Low',
                close: 'Close'
            }]
        };
    }
    setHiloRangeAxis(range) {

        switch (range) {
            case 'GOOG':
                return { range: { min: 0, max: 800, interval: 200 } };
            case 'NOK':
                return { range: { min: 0, max: 50, interval: 10 } };
            case 'MSFT':
                return { range: { min: 10, max: 40, interval: 10 } };
            case 'AAPL':
                return { range: { min: 0, max: 800, interval: 200 } };
        }

    }
    setcolumndatasource(data) {
        return {
            series: [{
                dataSource: data.Open,
                xName: 'XValue',
                yName: 'YValue'
            }, {
                dataSource: data.Close,
                xName: 'XValue',
                yName: 'YValue',
            }]
        };
    }
    getData() {
        this.colXSeriesRange = [];
        this.colYSeriesRange = [];
        this.colDataValue = 100;
        this.colValue = 150;

        for (let i = 1; i <= 64; i++) {
            if (Math.random() > 5) {
                this.colDataValue = this.getRandomNum(700, 800);
            } else {
                this.colDataValue = this.getRandomNum(350, 700);
            }
            this.xpoint = { XValue: new Date(2008, 1 + i, 15), YValue: this.colDataValue };
            this.colXSeriesRange.push(this.xpoint);
            if (this.colDataValue > 400) {
                this.colValue = this.colDataValue - 100;
            } else {
                this.colValue = this.colDataValue + 200;
            }
            this.ypoint = { XValue: new Date(2008, 1 + i, 15), YValue: this.colValue };
            this.colYSeriesRange.push(this.ypoint);
        }
        this.colchartData = { Open: this.colXSeriesRange, Close: this.colYSeriesRange };
        return this.colchartData;
    }

    getRandomNum(ubound, lbound) {
        return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
    }
    setRangeAxis(range) {
        switch (range) {
            case 1:
                return {

                    range: { min: new Date(2011, 12, 1), max: new Date(2012, 12, 1), interval: 1 },
                    intervalType: 'Months',
                    labelFormat: 'MMM',
                };

            case 2:
                return {

                    range: { min: new Date(2011, 2, 1), max: new Date(2013, 2, 1), interval: 1 },
                    intervalType: 'Years',
                    labelFormat: 'yyyy',

                };
            case 3:
                return {

                    range: { min: new Date(2010, 2, 1), max: new Date(2013, 2, 1), interval: 1 },
                    intervalType: 'Years',
                    labelFormat: 'yyyy',
                };
            default:
                return {
                    range: { min: new Date(2008, 2, 1), max: new Date(2013, 2, 1), interval: 1 },
                    intervalType: 'Years',
                    labelFormat: 'yyyy',
                };
        }
    }
    yearclick(year) {
        this.columnchart.widget.element.ejChart('option', { 'primaryXAxis': this.setRangeAxis(parseInt(year)) });
    }
    setHiloRangeXAxis() {
        return {
            range: { min: new Date(2007, 9, 1), max: new Date(2012, 10, 31), interval: 10 },
            intervalType: 'Months',
        };
    }
    getWidth() {
        this.ownerDetailsWidth = jQuery(this.sampletitleElement.nativeElement).width();
        if (this.ownerDetailsWidth < 700) {
            this.ownerdetailsdisplay = 'none';
        } else {
            this.ownerdetailsdisplay = 'inline';
        }
        this.stockStatuswidth = jQuery(this.stockstatusElement.nativeElement).width();
        if (this.stockStatuswidth < 460) {
            this.tileimagedisplay = 'inline';
            this.stockstatusdisplay = 'none';
            this.imgLabelfontsize = '20px';
        } else {
            this.tileimagedisplay = 'none';
            this.stockstatusdisplay = 'block';
            this.imgLabelfontsize = '27px';
        }
        this.eleWidth = 209;
        this.div = this.stockStatuswidth % this.eleWidth;
        if (this.stockStatuswidth > 0) {
            if (this.stockStatuswidth > 825) {
                return this.stockStatuswidthValue = 0;
            } else if (this.stockStatuswidth % this.eleWidth < 200) {
                return this.stockStatuswidthValue = (this.stockStatuswidth % this.eleWidth) / 2;
            } else if (this.stockStatuswidth % (this.eleWidth * 2) < 200) {
                return this.stockStatuswidthValue = (this.stockStatuswidth % (this.eleWidth * 2)) / 2;
            } else if (this.stockStatuswidth % (this.eleWidth * 3) < 200) {
                return this.stockStatuswidthValue = (this.stockStatuswidth % (this.eleWidth * 2)) / 2;
            }
        } else {
            return this.stockStatuswidthValue = 0;
        }
    }

    tileclick(event) {
        if (this.stockstatusdisplay == 'inline') {
            this.stockstatusdisplay = 'none';
        } else {
            this.stockstatusdisplay = 'inline';
        }
    }
    ngOnInit() {
        this.tileimagedisplay = 'none';
        this.marginReady = this.getWidth();
        this.stockstatuspadding = this.marginReady;
    }

    onResize(event) {
        this.tileimagedisplay = 'none';
        this.marginResize = this.getWidth();
        this.stockstatuspadding = this.marginResize;
        this.stockdetailsPopup.widget.refresh();

    }
}
