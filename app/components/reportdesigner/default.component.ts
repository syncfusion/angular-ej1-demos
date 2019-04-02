import { Component } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './default.component.html',
    styleUrls: ['./reportdesigner.component.css']
})

export class DefaultComponent {
    public isFormSubmit: boolean;
    public serviceUrl: string;

    constructor() {
        this.serviceUrl = 'https://js.syncfusion.com/demos/ejServices/api/ReportDesigner/';
        $(document.body).bind('submit', $.proxy(this.winformSubmit, this));
        $(window).bind('beforeunload', $.proxy(this.beforeWindowUnload, this));
    }

    public controlInitialized(args: any): void {
        let designer: any = $('#rpt_default_designer').data('ejReportDesigner');
        designer.openReport('/Catagory2/Tickets Sales Analysis');
    }

    public winformSubmit(args: any): void {
        this.isFormSubmit = false;
    }

    public beforeWindowUnload(args: any): any {
        let designer: any = $('#rpt_default_designer').data('ejReportDesigner');
        if (designer.hasReportChanges() && this.isFormSubmit) {
            return 'Changes you made may not be saved';
        }
        this.isFormSubmit = true;
    }

    ngAfterViewInit() {
        let designer: any = $('#rpt_default_designer').data('ejReportDesigner');
        $(designer.element).width($('.outlet').width());
        designer.designerResize();
    }
};
