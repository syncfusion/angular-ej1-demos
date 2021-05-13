import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';

@Component({
    selector: 'ej-app',
    templateUrl: './expenseanalysis.component.html',
    styleUrls: ['./expenseanalysis.component.css']
})

export class ExpenseAnalysisComponent {

    public year: Array<any> = [
        { month: 'All' }, { month: 'January' }, { month: 'February' }, { month: 'March' }, { month: 'April' }, { month: 'May' },
        { month: 'June' }, { month: 'July' }, { month: 'August' }, { month: 'September' }, { month: 'October' }, { month: 'November' }, { month: 'December' }
    ];
    baseUrl: string;
    expensegrideditSettings: Object;
    expensegridvalidations: Object;
    chartDS: any;
    Home: any;
    DailyLiving: any;
    Entertainment: any;
    Health: any;
    Transportation: any;
    Personal: any;
    expensegriddata: any;
    monthText: any;
    monthValue: any;
    showpopup: boolean;
    btndisplay: string;
    expense: any;
    expenseValue: any;
    fundDetails: any;
    spentDetails: any;
    chartsmartlabel: any;
    dataManger: any;
    @ViewChild('gridreference') gridreference: EJComponents<any, any>;
    @ViewChild('piechartreference') piechartreference: EJComponents<any, any>;

    constructor() {
        this.baseUrl = '//js.syncfusion.com/demos/ejServices/';
        this.expensegrideditSettings = {
            allowEditing: false, allowAdding: true, editMode: ej.Grid.EditMode.Dialog
        };
        this.expensegridvalidations = {
            required: true, minlength: 3
        };
        this.chartsmartlabel = 'true';
        this.monthText = ej.preferredCulture().calendars.standard.months.names[new Date().getMonth()];
        this.changeMonth({ 'selectedText': this.monthText });
        this.monthValue = this.monthText;
        this.btndisplay = 'none';
    }

    changeMonth(sender) {
        this.showpopup = true;
        this.UpdateGridChart(sender.selectedText); // updating content of grid and chart on change of month
    }
    adddetails(event) {
        this.gridreference.widget.addRecord(); // adding new record in grid
        jQuery('#ExpenseGrid_dialogEdit').ejDialog({ isResponsive: true });
    }
    UpdateGridChart(month) {
        this.dataManger = new ej.DataManager({
            url: this.baseUrl + 'api/expense/get?month=' + month,
            offline: true, crossDomain: true,
            requiresFormat: false
        });
        this.dataManger.executeQuery(new ej.Query()).done((e) => {
            this.expensegriddata = e.result[1];
            this.piechartreference.widget.element.ejChart('option', {
                'model': {
                    series: [{
                        dataSource: e.result[0],
                        type: 'pie',
                        name: 'ExpenseChart',
                        enableAnimation: true,
                        labelPosition: 'outside',
                        marker: { connectorLine: { height: 20 }, dataLabel: { visible: true, } },
                        border: { width: 1 },
                        explode: true,
                        xName: 'ExpenseCategory',
                        yName: 'Amount'
                    }]
                }
            });
            this.spentDetails = [
                { level: 'most-spent', spent_text: 'most-spent-text', value: 'Most Spent', spent_amt: 'most-spent-amt', trans: e.result[2] },
                { level: 'least-spent', spent_text: 'least-spent-text', value: 'Least Spent', spent_amt: 'least-spent-amt', trans: e.result[3] },
                { level: 'avg-spent', spent_text: 'avg-spent-text', value: 'Average Spent', spent_amt: 'avg-spent-amt', trans: e.result[4] }
            ];
            this.fundDetails = [
                {
                    class: 'pos-amt-td sideborder', amount: 'pos-amt', text: 'pos-text', value: ' Positive', transaction: 'pos-transc',
                    transc_value: (e.result[8] + ' Transactions'), expense: ('$' + this.formatNumber(parseInt(e.result[5], 10)))
                },
                {
                    class: 'neg-amt-td sideborder', amount: 'neg-amt', text: 'neg-text', value: 'Negative', transaction: 'neg-transc',
                    transc_value: (e.result[9] + ' Transactions'), expense: ('$' + this.formatNumber(parseInt(e.result[6], 10)))
                },
                {
                    class: 'bal-amt-td', amount: 'bal-amt', text: 'bal-text', value: ' Balance', transaction: 'bal-empty',
                    transc_value: '', expense: ('$' + this.formatNumber(parseInt(e.result[7], 10)))
                }
            ];

            this.chartDS = e.result[0];
            this.Home = e.result[10];
            this.DailyLiving = e.result[11];
            this.Entertainment = e.result[12];
            this.Health = e.result[13];
            this.Transportation = e.result[14];
            this.Personal = e.result[15];
            this.showpopup = false;
        });
    }
    formatNumber(num) {
        return ej.format(num, 'n0');
    }
    seriesRender(e) {
        $.each(e.data.series.points, function () {
            this.text = this.x + '- $' + parseInt(ej.format(this.YValues, 'n0'), 10);
        });
    }
    btnClick(sender) {
        this.piechartreference.widget.element.ejChart('option', { 'pie': this.pieSeries(name) });
        this.btndisplay = 'none';
    }
    chartregionClick(sender) {
        {
            let isIe8 = ej.browserInfo().name == 'msie' && parseInt(ej.browserInfo().version) == 8;
            if (sender.model.AnimationComplete || isIe8) {
                let index = sender.data.region.Region.PointIndex;
                let name = sender.model.series[0].points[index].x;
                if (sender.model.series[0].name == 'ExpenseChart') {
                    this.piechartreference.widget.element.ejChart('option', { 'drilldown': this.pieSeries(name) });
                }
                if (isIe8) {
                    this.btndisplay = 'block';
                }
            }
        }
    }
    completeAnimation(sender) {
        if (sender.model.series[0].name != 'ExpenseChart') {
            this.btndisplay = 'block';
        } else {
            this.btndisplay = 'none';
        }
    }
    genarateSeries(sName) {
        let seriesData = {
            series: [{
                dataSource: this[sName],
                xName: 'ExpenseCategory',
                yName: 'Amount',
                type: 'pie',
                labelPosition: 'outside',
                pieCoefficient: 0.8,
                enableAnimation: true,
                explode: false,
                marker: {
                    dataLabel: {
                        visible: true,
                        shape: 'none',
                        connectorLine: { color: 'black', width: 0.5 },
                        font: { fontFamily: 'Segoe UI', fontStyle: 'Normal ', fontWeight: 'Regular', size: '12px', color: '#707070', opacity: 1 }
                    }
                }

            }],
            legend: { visible: false },
        };
        return seriesData;
    }
    pieSeries(seriesName) {
        let sname = seriesName.replace(/[\s]/g, '');
        switch (sname) {
            case 'Home':
            case 'Health':
            case 'Transportation':
            case 'Personal':
            case 'DailyLiving':
                return this.genarateSeries(sname);
            case 'Entertainment':
                this.Entertainment[1].Amount = 45;
                return this.genarateSeries(sname);
            default:
                {
                    return {
                        series: [
                            {
                                name: 'ExpenseChart',
                                dataSource: this.chartDS,
                                xName: 'ExpenseCategory',
                                yName: 'Amount',
                                type: 'pie',
                                labelPosition: 'outside',
                                pieCoefficient: 0.8,
                                explode: true,
                                explodeOffset: 25,
                                enableAnimation: true,
                                AnimationComplete: false,
                                marker: {
                                    dataLabel: {
                                        visible: true,
                                        shape: 'none',
                                        connectorLine: { color: null, width: 0.5 },
                                        font: { fontFamily: 'Segoe UI', fontStyle: 'Normal ', fontWeight: 'Regular', size: '12px', color: '#707070', opacity: 1 }
                                    }
                                }
                            }
                        ],
                        legend: { visible: false },
                        AnimationComplete: false
                    };
                }
        }
    }

}
