import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './toolbarCustomization.component.html',
    styleUrls: ['./reportdesigner.component.css'], encapsulation: ViewEncapsulation.None
})

export class ToolBarCustomizationComponent {
    public isFormSubmit: boolean;
    public serviceUrl: string;
    public serverUrl: string;
    public reportPath: string;
    public toolBarSettings: any;

    constructor() {
        this.serviceUrl = 'https://js.syncfusion.com/demos/ejServices/api/ReportDesigner/';
        this.reportPath = '/Catagory1/Website Visitor Analysis';
        this.serverUrl = '/';
        this.toolBarSettings = {
            // tslint:disable-next-line: no-bitwise max-line-length
            items: ej.ReportDesigner.ToolbarItems.All & ~ej.ReportDesigner.ToolbarItems.Preview & ~ej.ReportDesigner.ToolbarItems.EditDesign & ~ej.ReportDesigner.ToolbarItems.New & ~ej.ReportDesigner.ToolbarItems.Open & ~ej.ReportDesigner.ToolbarItems.Save
        };
        $(document.body).bind('submit', $.proxy(this.winformSubmit, this));
        $(window).bind('beforeunload', $.proxy(this.beforeWindowUnload, this));
    }

    public renderViewerToolbar(args: any): void {
        $('#rpt_toolbar_designer').css('display', 'none');
        let ulTag: JQuery = ej.buildTag('ul.e-reportviewer-sample-toolbarul', '', {}, {});
        ulTag.attr('id', 'reportviewer-toolbarul');
        let divElement: JQuery = ej.buildTag('div', '', {}, {});
        divElement.attr('id', 'reportviewer-edit-div');
        let editbutton: JQuery = ej.buildTag('button', '', {}, {});
        editbutton.attr('id', 'reportviewer-editbutton');
        divElement.append(editbutton);
        ulTag.append(divElement);
        args.target.append(ulTag);
        editbutton.bind('click', $.proxy(this.editClick, this));
        editbutton.ejButton({
            size: 'medium',
            showRoundedCorner: true,
            cssClass: 'e-primary',
            contentType: 'textandimage',
            prefixIcon: 'e-icon e-edit',
            text: 'Edit'
        });
    }

    public renderDesignerToolbar(args: any): void {
        let ulTag: JQuery = ej.buildTag('ul.e-rptdesigner-sample-toolbarul', '', {}, {});
        ulTag.attr('id', 'reportdesigner-toolbarul');
        let divElement: JQuery = ej.buildTag('div', '', {}, {});
        divElement.attr('id', 'reportdesigner-btn-div');
        let saveButton: JQuery = ej.buildTag('button', '', {}, {});
        saveButton.attr('id', 'reportdesigner-savebutton');
        let backButton: JQuery = ej.buildTag('button', '', {}, {});
        backButton.attr('id', 'reportdesigner-backbutton');
        divElement.append(saveButton);
        divElement.append(backButton);
        ulTag.append(divElement);
        args.target.append(ulTag);
        saveButton.bind('click', $.proxy(this.saveClick, this));
        backButton.bind('click', $.proxy(this.cancelClick, this));
        saveButton.ejButton({
            size: 'medium',
            showRoundedCorner: true,
            cssClass: 'e-primary',
            contentType: 'textandimage',
            prefixIcon: 'e-icon e-save',
            text: 'Save'
        });
        backButton.ejButton({
            size: 'medium',
            showRoundedCorner: true,
            contentType: 'textandimage',
            prefixIcon: 'e-icon e-undo',
            text: 'Back'
        });
    }

    public editClick(args: any): void {
        this.updateViewerHiddenList();
        this.showDesigner();
    }

    public saveClick(args: any): void {
        this.updateDesignerHiddenList();
        this.saveReport();
    }

    public cancelClick(args: any): void {
        this.cancelReport();
    }

    public updateViewerHiddenList(): void {
        if ($('#rpt_toolbar_viewer_toolbarContainer_target').length > 0 && $('#rpt_toolbar_viewer_toolbarContainer_hiddenlist').is(':visible')) {
            $('#rpt_toolbar_viewer_toolbarContainer_target').mousedown();
        }
    }

    public updateDesignerHiddenList(): void {
        if ($('#rpt_toolbar_designer_toolBar_target').length > 0 && $('#rpt_toolbar_designer_toolBar_hiddenlist').is(':visible')) {
            $('#rpt_toolbar_designer_toolBar_target').mousedown();
        }
    }

    public saveReport(): void {
        let designer: any = $('#rpt_toolbar_designer').data('ejReportDesigner');
        designer.saveReport();
    }

    public cancelReport(): void {
        let designer: any = $('#rpt_toolbar_designer').data('ejReportDesigner');
        this.updateDesignerHiddenList();
        if (designer.hasReportChanges()) {
            if (confirm('Changes you made may not be saved. Do you want back to Preview?')) {
                this.showViewer();
            } else {
                return;
            }
        } else {
            this.showViewer();
        }
    }

    public showViewer(): void {
        $('#rpt_toolbar_viewer').css('display', 'block');
        $('#rpt_toolbar_designer').css('display', 'none');
        let viewer: any = $('#rpt_toolbar_viewer').data('ejReportViewer');
        viewer.reload();
    }

    public showDesigner(): void {
        $('#rpt_toolbar_viewer_loadingIndicator').data('ejWaitingPopup').hide();
        $('#rpt_toolbar_viewer').css('display', 'none');
        $('#rpt_toolbar_designer').css('display', 'block');
        let designer: any = $('#rpt_toolbar_designer').data('ejReportDesigner');
        if (designer) {
            designer.openReport(this.reportPath);
            $(designer.element).width($('.outlet').width());
            designer.designerResize();
            let waitingPopup: any = $('#rpt_toolbar_designer_designAreaContainer').data('ejWaitingPopup');
            waitingPopup.hide();
        } else {
            this.renderDesigner();
        }
    }

    public renderDesigner() {
        $('#rpt_toolbar_designer').ejReportDesigner({
            serviceUrl: this.serviceUrl,
            create: $.proxy(this.designerInitialized, this),
            toolbarRendering: $.proxy(this.renderDesignerToolbar, this),
            toolbarSettings: this.toolBarSettings
        });
    }

    public designerInitialized(args: any): void {
        let designer: any = $('#rpt_toolbar_designer').data('ejReportDesigner');
        designer.openReport(this.reportPath);
    }

    public winformSubmit(args: any): void {
        this.isFormSubmit = false;
    }

    public beforeWindowUnload(args: any): any {
        let designer: any = $('#rpt_toolbar_designer').data('ejReportDesigner');
        if (designer.hasReportChanges() && this.isFormSubmit) {
            return 'Changes you made may not be saved';
        }
        this.isFormSubmit = true;
    }
};
