import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';

@Component({
    selector: 'ej-app',
    templateUrl: './healthtracker.component.html',
    styleUrls: ['./healthtracker.component.css'],
    encapsulation: ViewEncapsulation.None,

})
export class HealthtrackerComponent {
    baseUrl: string;
    gaugeObj: any;
    gridsummaryRows: any;
    grideditSettings: any;
    chartBurntXAxistitlefont: Object;
    chartBurntYAxistitlefont: Object;
    chartCalXAxistitlefont: Object;
    chartCalYAxistitlefont: Object;
    chartCalsize: Object;
    chartMealXAxistitlefont: Object;
    chartMealYAxistitlefont: Object;
    chartcalseriesrender: boolean;
    chartburntseriesrender: boolean;
    chartmealseriesrender: boolean;
    chartstepvisible: boolean;
    chartfloorvisible: boolean;
    chartdatalabelfont: Object;
    chartXAxistitlefont: Object;
    chartYAxistitlefont: Object;
    dataManger: any;
    sumColl: any;
    calChart: any;
    burntChart: any;
    mealChart: any;
    sumValue: any;
    griddataSource: any;
    calChartdata: any;
    burntChartdata: any;
    mealChartOpendata: any;
    mealChartClosedata: any;
    mealChartOpenClosedata: any;
    gridObj: any;
    gridvalidation: Object;
    gridresponse: boolean;
    gaugeRdiResponse: boolean;
    gaugeburntresponsive: boolean;
    chartresponsive: boolean;
    chartburntresponsive: boolean;
    chartcalresponsive: boolean;
    mealdetailresponsive: boolean;
    chartsteplegendcolor: Object;
    floorchartlegendfont: Object;
    chartstepmargin: Object;
    @ViewChild('gridelement') gridelements: EJComponents<any, any>;
    @ViewChild('chartelement') chartelement: EJComponents<any, any>;
    @ViewChild('chartCalelement') chartCalelement: EJComponents<any, any>;
    @ViewChild('chartBurntelement') chartBurntelement: EJComponents<any, any>;
    @ViewChild('mealDetailelement') mealDetailelement: EJComponents<any, any>;
    @ViewChild('gaugerdiElement') gaugerdiElement: EJComponents<any, any>;
    @ViewChild('gaugeburntElement') gaugeburntElement: EJComponents<any, any>;

    constructor() {
        this.baseUrl = '//js.syncfusion.com/demos/ejServices/';
        this.gridsummaryRows = [{
            title: 'Sum',
            summaryColumns: [
                { summaryType: ej.Grid.SummaryType.Sum, displayColumn: 'Fat', dataMember: 'Fat', format: '{0:N0}g' },
                { summaryType: ej.Grid.SummaryType.Sum, displayColumn: 'Carbohydrate', dataMember: 'Carbohydrate', format: '{0:N0}g' },
                { summaryType: ej.Grid.SummaryType.Sum, displayColumn: 'Protein', dataMember: 'Protein', format: '{0:N0}g' },
                { summaryType: ej.Grid.SummaryType.Sum, displayColumn: 'Calorie', dataMember: 'Calorie', format: '{0:N0}cal' }
            ],
        }
        ];
        this.grideditSettings = {
            allowEditing: true, allowAdding: true, allowDeleting: true, editMode: ej.Grid.EditMode.DialogTemplate, dialogEditorTemplateID: '#healthAddTemplate'
        };
        this.gridresponse = true;
        this.gridvalidation = {
            required: true
        };
        this.chartBurntXAxistitlefont = {
            fontStyle: 'Bold', size: '14px', fontWeight: 'Bold'
        };
        this.chartBurntYAxistitlefont = {
            fontStyle: 'Bold', size: '14px', fontWeight: 'Bold'
        };
        this.chartCalXAxistitlefont = {
            fontStyle: 'Bold', size: '14px', fontWeight: 'Bold'
        };
        this.chartCalYAxistitlefont = {
            fontStyle: 'Bold', size: '14px', fontWeight: 'Bold'
        };
        this.chartCalsize = {
            height: 10, width: 10
        };
        this.chartMealXAxistitlefont = {
            fontStyle: 'Bold', size: '14px', fontWeight: 'Bold'
        };
        this.chartMealYAxistitlefont = {
            fontStyle: 'Bold', size: '14px', fontWeight: 'Bold'
        };
        this.chartdatalabelfont = {
            color: '#707070', size: '15px', fontWeight: 'lighter'
        };
        this.chartXAxistitlefont = {
            fontStyle: 'Bold', size: '14px', fontWeight: 'Bold'
        };
        this.chartYAxistitlefont = {
            fontStyle: 'Bold', size: '14px', fontWeight: 'Bold'
        };
        this.chartsteplegendcolor = {
            color: 'Black'
        };
        this.floorchartlegendfont = {
            color: 'Black', size: '12px'
        };
        this.chartstepmargin = {
            top: 0, bottom: 0, left: 10, right: 10
        };
        this.chartcalseriesrender = false;
        this.chartburntseriesrender = false;
        this.chartmealseriesrender = false;
        this.chartstepvisible = true;
        this.chartfloorvisible = true;
        this.gaugeRdiResponse = false;
        this.gaugeburntresponsive = false;
        this.chartresponsive = true;
        this.chartburntresponsive = true;
        this.chartcalresponsive = true;
        this.mealdetailresponsive = true;
        this.sumColl = {};
        this.dataManger = new ej.DataManager({ url: this.baseUrl + 'api/HealthTracker/Load', crossDomain: true });
        this.dataManger.executeQuery(new ej.Query()).done((e) => {
            jQuery('#Grid').data('ejGrid').dataSource(e.result.FoodInfo);
            this.sumColl = this.getSummaryDetails();
            this.updateChartSeries();
            this.calChart = jQuery('#ChartCal').data('ejChart');
            this.calChart.model.series[0].dataSource = e.result.ChartDB.CalData;
            this.burntChart = jQuery('#ChartBurnt').data('ejChart');
            this.burntChart.model.series[0].dataSource = e.result.ChartDB.BurntData;
            this.calChartdata = e.result.ChartDB.CalData;
            this.burntChartdata = e.result.ChartDB.BurntData;
            this.mealChartOpendata = e.result.ChartDB.MealData.Open;
            this.mealChartClosedata = e.result.ChartDB.MealData.Close;
            this.mealChartOpenClosedata = e.result.ChartDB.MealData.OpenClose;
            this.mealChart = jQuery('#MealDetails').data('ejChart');
            this.mealChart.model.series[0].dataSource = e.result.ChartDB.MealData.Open;
            this.calChart.model.series[0].xName = this.burntChart.model.series[0].xName = this.mealChart.model.series[0].xName =
                this.mealChart.model.series[1].yName = this.mealChart.model.series[2].yName = 'XValue';
            this.calChart.model.series[0].yName = this.burntChart.model.series[0].yName = this.mealChart.model.series[0].yName =
                this.mealChart.model.series[1].yName = this.mealChart.model.series[2].yName = 'YValue';
            this.mealChart.model.series[1].dataSource = e.result.ChartDB.MealData.Close;
            this.mealChart.model.series[2].dataSource = e.result.ChartDB.MealData.OpenClose;
        });
    }
    ngAfterViewInit() {
        this.calChart = this.chartCalelement.widget;
        this.calChart.redraw();
        this.burntChart = this.chartBurntelement.widget;
        this.burntChart.redraw();
        this.mealChart = this.mealDetailelement.widget;
        this.mealChart.redraw();
    }
    updateChartSeries() {
        this.chartelement.widget.element.ejChart('option', {
            'model': {
                series: [{
                    'points': [{ x: 'Carb', y: this.sumColl[1], fill: '#B44A4A', text: this.sumColl[1] + 'g' + ' Carb' },
                    { x: 'Protein', y: this.sumColl[2], fill: '#53B2C1', text: this.sumColl[2] + 'g' + ' Protein' },
                    { x: 'Fat', y: this.sumColl[0], fill: '#F9AF3C', text: this.sumColl[0] + 'g' + ' Fat' }
                    ]
                }]
            }
        });
    }
    addfood(event) {
        this.gridelements.widget.addRecord();
    }

    updateGauge(caloriesValue) {
        this.gaugeObj = this.gaugerdiElement.widget;
        this.gaugeObj.setPointerValue(0, 0, caloriesValue);
        this.gaugeObj.setRangeStartValue(0, 0, 0);
        this.gaugeObj.setRangeEndValue(0, 0, caloriesValue);
        this.gaugeObj.setRangeStartValue(0, 1, caloriesValue);
        this.gaugeObj.setRangeEndValue(0, 1, 2200);
        $('.rdilabel').text('Calories Intake - ' + caloriesValue + '/2200');
        $('.rdipenlabel').text(2200 - caloriesValue + ' calories pending');
    }
    getSummaryDetails() {
        this.gridObj = this.gridelements.widget;
        this.sumValue = this.gridObj.model.summaryRows[0].summaryColumns;
        this.sumColl = [];
        $.each(this.gridObj.model.summaryRows[0].summaryColumns, (index, item) => {
            this.sumColl.push(Math.round(this.gridelements.widget.getSummaryValues(item)));
        });
        return this.sumColl;
    }

    actionComplete(args) {
        if (args.requestType == 'beginedit' || args.requestType == 'add') {
            jQuery('#Fat,#Carbohydrate,#Protein,#Calorie').ejNumericTextbox({ width: '120px', minValue: 1, maximum: 1000 });
            jQuery('#EditDialog_Grid_Save').val('Done');
            jQuery('#Fat, #Carbohydrate, #Protein, #Calorie,#Time, #FoodName').css('text-align', 'left');
            jQuery('#EditDialog_Grid_Cancel').remove();
            jQuery('#Time').ejTimePicker();
            if (args.requestType == 'beginedit') {
                jQuery('#MealSummary span.e-title').text('Edit');
            } else {
                jQuery('#Time').data('ejTimePicker').setCurrentTime();
                jQuery('#MealSummary span.e-title').text('Add Food');
            }
        }
        if (args.requestType != 'refresh' && args.requestType == 'save') {
            args.data.FoodId = this.getRandomNum(6, 50);
            this.sumColl = this.getSummaryDetails();
            this.updateChartSeries();
            this.updateGauge(this.sumColl[3]);
        }
    }
    getRandomNum(ubound, lbound) {
        return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
    }
    renderControl(args) {
        if (args.hasClass('titlecss')) {
            this.renderBurntCal();
        } else {
            this.renderMealIntake();
        }
    }
    renderBurntCal() {
        this.calChart = this.chartCalelement.widget;
        this.burntChart = this.chartBurntelement.widget;
        this.calChart.seriesRender();
        this.burntChart.seriesRender();
    }
    renderMealIntake() {
        this.mealChart = this.mealDetailelement.widget;
        this.mealChart.seriesRender();
    }

}
