import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { ChartDataService } from '../../services/chartdata.service';
import { ChartMobileService } from '../../services/chartmobile.service';


@Component({
    selector: 'sd-home',
    templateUrl: '/export.component.html',
    providers: [ChartDataService, ChartMobileService]
})
export class ExportComponent {
    exportData: any;
    @ViewChild('export') chart: EJComponents<any, any>;
    @ViewChild('filename') file: EJComponents<any, any>;
    @ViewChild('mode') mode: EJComponents<any, any>;
    @ViewChild('angle') angle: EJComponents<any, any>;
    @ViewChild('orientation1') orientation: EJComponents<any, any>;
    constructor(public chartDataService: ChartDataService) {
        this.exportData = chartDataService.getExportData();
        window['obj'] = this;
    }

    preRender(sender) {
        if (sender.model.theme.indexOf('light') > -1 || sender.model.theme == 'bootstrap' || sender.model.theme == 'material') {
            sender.model.background = 'white';
            sender.model.chartArea.background = 'white';
        } else {
            sender.model.background = 'black';
            sender.model.chartArea.background = 'black';
        }
    }

    onchartload(sender) {
        ChartMobileService.prototype.onchartload(sender);
        let clientPng = document.getElementById('downloadpng');
        if (clientPng.addEventListener) {
            clientPng.addEventListener('click', this.downloadClient, false);
        } else {
            clientPng['attachEvent']('onclick', this.downloadClient, false);
        }
        let clientJpg = document.getElementById('downloadjpg');
        if (clientJpg.addEventListener) {
            clientJpg.addEventListener('click', this.downloadClient, false);
        } else {
            clientJpg['attachEvent']('onclick', this.downloadClient, false);
        }
        let clientPdf = document.getElementById('downloadpdf');
        if (clientPdf.addEventListener) {
            clientPdf.addEventListener('click', this.downloadClient, false);
        } else {
            clientPdf['attachEvent']('onclick', this.downloadClient, false);
        }
        let clientDocx = document.getElementById('downloaddocx');
        if (clientDocx.addEventListener) {
            clientDocx.addEventListener('click', this.downloadClient, false);
        } else {
            clientDocx['attachEvent']('onclick', this.downloadClient, false);
        }
        let clientXlsx = document.getElementById('downloadxlsx');
        if (clientXlsx.addEventListener) {
            clientXlsx.addEventListener('click', this.downloadClient, false);
        } else {
            clientXlsx['attachEvent']('onclick', this.downloadClient, false);
        }
        let clientSvg = document.getElementById('downloadsvg');
        if (clientSvg.addEventListener) {
            clientSvg.addEventListener('click', this.downloadClient, false);
        } else {
            clientSvg['attachEvent']('onclick', this.downloadClient, false);
        }
        let clientPrint = document.getElementById('downloadprint');
        if (clientPrint.addEventListener) {
            clientPrint.addEventListener('click', this.downloadPrint, false);
        } else {
            clientPrint['attachEvent']('onclick', this.downloadPrint, false);
        }
    }

    label(sender) {
        if (sender.data.axis.orientation == 'Vertical') {
            let label = sender.data.label.Text / 1000;
            sender.data.label.Text = '$' + label + 'K';
        }
    }

    onchange2(sender) {
        window['selected'] = sender.isChecked;
        let chart = $('#export').ejChart('instance');
        let mode = (window['type'] == undefined) ? 'client' : window['type'];
        if (window['selected']) {
            chart.model.enableCanvasRendering = true;
            if (mode == 'server') {
                $('#svg').attr('src', 'app/content/images/chart/export_disabled/svg.png').removeClass('active').addClass('disabled');
                $('#png').attr('src', 'app/content/images/chart/export_active/png.png').removeClass('disabled').addClass('active');
                $('#pdf').attr('src', 'app/content/images/chart/export_active/pdf.png').removeClass('disabled').addClass('active');
                $('#jpg').attr('src', 'app/content/images/chart/export_active/jpg.png').removeClass('disabled').addClass('active');
                $('#xlsx').attr('src', 'app/content/images/chart/export_active/xlsx.png').removeClass('disabled').addClass('active');
                $('#docx').attr('src', 'app/content/images/chart/export_active/docx.png').removeClass('disabled').addClass('active');

                $('#svg').attr('onerror', "this.src='app/content/images/chart/export_disabled/svg.png'").removeClass('active').addClass('disabled');
                $('#png').attr('onerror', "this.src='app/content/images/chart/export_active/png.png'").removeClass('disabled').addClass('active');
                $('#pdf').attr('onerror', "this.src='app/content/images/chart/export_active/pdf.png'").removeClass('disabled').addClass('active');
                $('#jpg').attr('onerror', "this.src='app/content/images/chart/export_active/jpg.png'").removeClass('disabled').addClass('active');
                $('#xlsx').attr('onerror', "this.src='app/content/images/chart/export_active/xlsx.png'").removeClass('disabled').addClass('active');
                $('#docx').attr('onerror', "this.src='app/content/images/chart/export_active/docx.png'").removeClass('disabled').addClass('active');
            } else {
                $('#svg').attr('src', 'app/content/images/chart/export_disabled/svg.png').removeClass('active').addClass('disabled');
                $('#pdf').attr('src', 'app/content/images/chart/export_disabled/pdf.png').removeClass('active').addClass('disabled');
                $('#xlsx').attr('src', 'app/content/images/chart/export_disabled/xlsx.png').removeClass('active').addClass('disabled');
                $('#docx').attr('src', 'app/content/images/chart/export_disabled/docx.png').removeClass('active').addClass('disabled');
                $('#jpg').attr('src', 'app/content/images/chart/export_active/jpg.png').removeClass('disabled').addClass('active');
                $('#png').attr('src', 'app/content/images/chart/export_active/png.png').removeClass('disabled').addClass('active');

                $('#svg').attr('onerror', "this.src='app/content/images/chart/export_disabled/svg.png'").removeClass('active').addClass('disabled');
                $('#pdf').attr('onerror', "this.src='app/content/images/chart/export_disabled/pdf.png'").removeClass('active').addClass('disabled');
                $('#xlsx').attr('onerror', "this.src='app/content/images/chart/export_disabled/xlsx.png'").removeClass('active').addClass('disabled');
                $('#docx').attr('onerror', "this.src='app/content/images/chart/export_disabled/docx.png'").removeClass('active').addClass('disabled');
                $('#jpg').attr('onerror', "this.src='app/content/images/chart/export_active/jpg.png'").removeClass('disabled').addClass('active');
                $('#png').attr('onerror', "this.src='app/content/images/chart/export_active/png.png'").removeClass('disabled').addClass('active');
            }
        } else {
            chart.model.enableCanvasRendering = false;
            if (mode == 'server') {
                $('#svg').attr('src', 'app/content/images/chart/export_active/svg.png').removeClass('disabled').addClass('active');
                $('#pdf').attr('src', 'app/content/images/chart/export_disabled/pdf.png').removeClass('active').addClass('disabled');
                $('#xlsx').attr('src', 'app/content/images/chart/export_active/xlsx.png').removeClass('disabled').addClass('active');
                $('#docx').attr('src', 'app/content/images/chart/export_disabled/docx.png').removeClass('active').addClass('disabled');
                $('#jpg').attr('src', 'app/content/images/chart/export_disabled/jpg.png').removeClass('active').addClass('disabled');
                $('#png').attr('src', 'app/content/images/chart/export_disabled/png.png').removeClass('active').addClass('disabled');

                $('#svg').attr('onerror', "this.src='app/content/images/chart/export_active/svg.png'").removeClass('disabled').addClass('active');
                $('#pdf').attr('onerror', "this.src='app/content/images/chart/export_disabled/pdf.png'").removeClass('active').addClass('disabled');
                $('#xlsx').attr('onerror', "this.src='app/content/images/chart/export_active/xlsx.png'").removeClass('disabled').addClass('active');
                $('#docx').attr('onerror', "this.src='app/content/images/chart/export_disabled/docx.png'").removeClass('active').addClass('disabled');
                $('#jpg').attr('onerror', "this.src='app/content/images/chart/export_disabled/jpg.png'").removeClass('active').addClass('disabled');
                $('#png').attr('onerror', "this.src='app/content/images/chart/export_disabled/png.png'").removeClass('active').addClass('disabled');
            } else {
                $('#svg').attr('src', 'app/content/images/chart/export_active/svg.png').removeClass('disabled').addClass('active');
                $('#pdf').attr('src', 'app/content/images/chart/export_disabled/pdf.png').removeClass('active').addClass('disabled');
                $('#xlsx').attr('src', 'app/content/images/chart/export_disabled/xlsx.png').removeClass('active').addClass('disabled');
                $('#docx').attr('src', 'app/content/images/chart/export_disabled/docx.png').removeClass('active').addClass('disabled');
                $('#jpg').attr('src', 'app/content/images/chart/export_disabled/jpg.png').removeClass('active').addClass('disabled');
                $('#png').attr('src', 'app/content/images/chart/export_disabled/png.png').removeClass('active').addClass('disabled');

                $('#svg').attr('onerror', "this.src='app/content/images/chart/export_active/svg.png'").removeClass('disabled').addClass('active');
                $('#pdf').attr('onerror', "this.src='app/content/images/chart/export_disabled/pdf.png'").removeClass('active').addClass('disabled');
                $('#xlsx').attr('onerror', "this.src='app/content/images/chart/export_disabled/xlsx.png'").removeClass('active').addClass('disabled');
                $('#docx').attr('onerror', "this.src='app/content/images/chart/export_disabled/docx.png'").removeClass('active').addClass('disabled');
                $('#jpg').attr('onerror', "this.src='app/content/images/chart/export_disabled/jpg.png'").removeClass('active').addClass('disabled');
                $('#png').attr('onerror', "this.src='app/content/images/chart/export_disabled/png.png'").removeClass('active').addClass('disabled');
            }
        }
        chart.redraw();
    }

    onChange1(sender) {
        let chart = $('#export').ejChart('instance');
        let mode = sender.selectedText;
        window['type'] = mode;
        if (window['selected'] || chart.model.enableCanvasRendering) {
            chart.model.enableCanvasRendering = true;
            if (mode == 'server') {
                $('#svg').attr('src', 'app/content/images/chart/export_disabled/svg.png').removeClass('active').addClass('disabled');
                $('#png').attr('src', 'app/content/images/chart/export_active/png.png').removeClass('disabled').addClass('active');
                $('#pdf').attr('src', 'app/content/images/chart/export_active/pdf.png').removeClass('disabled').addClass('active');
                $('#jpg').attr('src', 'app/content/images/chart/export_active/jpg.png').removeClass('disabled').addClass('active');
                $('#xlsx').attr('src', 'app/content/images/chart/export_active/xlsx.png').removeClass('disabled').addClass('active');
                $('#docx').attr('src', 'app/content/images/chart/export_active/docx.png').removeClass('disabled').addClass('active');

                $('#svg').attr('onerror', "this.src='app/content/images/chart/export_disabled/svg.png'").removeClass('active').addClass('disabled');
                $('#png').attr('onerror', "this.src='app/content/images/chart/export_active/png.png'").removeClass('disabled').addClass('active');
                $('#pdf').attr('onerror', "this.src='app/content/images/chart/export_active/pdf.png'").removeClass('disabled').addClass('active');
                $('#jpg').attr('onerror', "this.src='app/content/images/chart/export_active/jpg.png'").removeClass('disabled').addClass('active');
                $('#xlsx').attr('onerror', "this.src='app/content/images/chart/export_active/xlsx.png'").removeClass('disabled').addClass('active');
                $('#docx').attr('onerror', "this.src='app/content/images/chart/export_active/docx.png'").removeClass('disabled').addClass('active');
            } else {
                $('#svg').attr('src', 'app/content/images/chart/export_disabled/svg.png').removeClass('active').addClass('disabled');
                $('#pdf').attr('src', 'app/content/images/chart/export_disabled/pdf.png').removeClass('active').addClass('disabled');
                $('#xlsx').attr('src', 'app/content/images/chart/export_disabled/xlsx.png').removeClass('active').addClass('disabled');
                $('#docx').attr('src', 'app/content/images/chart/export_disabled/docx.png').removeClass('active').addClass('disabled');
                $('#jpg').attr('src', 'app/content/images/chart/export_active/jpg.png').removeClass('disabled').addClass('active');
                $('#png').attr('src', 'app/content/images/chart/export_active/png.png').removeClass('disabled').addClass('active');

                $('#svg').attr('onerror', "this.src='app/content/images/chart/export_disabled/svg.png'").removeClass('active').addClass('disabled');
                $('#pdf').attr('onerror', "this.src='app/content/images/chart/export_disabled/pdf.png'").removeClass('active').addClass('disabled');
                $('#xlsx').attr('onerror', "this.src='app/content/images/chart/export_disabled/xlsx.png'").removeClass('active').addClass('disabled');
                $('#docx').attr('onerror', "this.src='app/content/images/chart/export_disabled/docx.png'").removeClass('active').addClass('disabled');
                $('#jpg').attr('onerror', "this.src='app/content/images/chart/export_active/jpg.png'").removeClass('disabled').addClass('active');
                $('#png').attr('onerror', "this.src='app/content/images/chart/export_active/png.png'").removeClass('disabled').addClass('active');
            }
        } else {
            chart.model.enableCanvasRendering = false;
            if (mode == 'server') {
                $('#svg').attr('src', 'app/content/images/chart/export_active/svg.png').removeClass('disabled').addClass('active');
                $('#pdf').attr('src', 'app/content/images/chart/export_disabled/pdf.png').removeClass('active').addClass('disabled');
                $('#xlsx').attr('src', 'app/content/images/chart/export_active/xlsx.png').removeClass('disabled').addClass('active');
                $('#docx').attr('src', 'app/content/images/chart/export_disabled/docx.png').removeClass('active').addClass('disabled');
                $('#jpg').attr('src', 'app/content/images/chart/export_disabled/jpg.png').removeClass('active').addClass('disabled');
                $('#png').attr('src', 'app/content/images/chart/export_disabled/png.png').removeClass('active').addClass('disabled');

                $('#svg').attr('onerror', "this.src='app/content/images/chart/export_active/svg.png'").removeClass('disabled').addClass('active');
                $('#pdf').attr('onerror', "this.src='app/content/images/chart/export_disabled/pdf.png'").removeClass('active').addClass('disabled');
                $('#xlsx').attr('onerror', "this.src='app/content/images/chart/export_active/xlsx.png'").removeClass('disabled').addClass('active');
                $('#docx').attr('onerror', "this.src='app/content/images/chart/export_disabled/docx.png'").removeClass('active').addClass('disabled');
                $('#jpg').attr('onerror', "this.src='app/content/images/chart/export_disabled/jpg.png'").removeClass('active').addClass('disabled');
                $('#png').attr('onerror', "this.src='app/content/images/chart/export_disabled/png.png'").removeClass('active').addClass('disabled');
            } else {
                $('#svg').attr('src', 'app/content/images/chart/export_active/svg.png').removeClass('disabled').addClass('active');
                $('#pdf').attr('src', 'app/content/images/chart/export_disabled/pdf.png').removeClass('active').addClass('disabled');
                $('#xlsx').attr('src', 'app/content/images/chart/export_disabled/xlsx.png').removeClass('active').addClass('disabled');
                $('#docx').attr('src', 'app/content/images/chart/export_disabled/docx.png').removeClass('active').addClass('disabled');
                $('#jpg').attr('src', 'app/content/images/chart/export_disabled/jpg.png').removeClass('active').addClass('disabled');
                $('#png').attr('src', 'app/content/images/chart/export_disabled/png.png').removeClass('active').addClass('disabled');

                $('#svg').attr('onerror', "this.src='app/content/images/chart/export_active/svg.png'").removeClass('disabled').addClass('active');
                $('#pdf').attr('onerror', "this.src='app/content/images/chart/export_disabled/pdf.png'").removeClass('active').addClass('disabled');
                $('#xlsx').attr('onerror', "this.src='app/content/images/chart/export_disabled/xlsx.png'").removeClass('active').addClass('disabled');
                $('#docx').attr('onerror', "this.src='app/content/images/chart/export_disabled/docx.png'").removeClass('active').addClass('disabled');
                $('#jpg').attr('onerror', "this.src='app/content/images/chart/export_disabled/jpg.png'").removeClass('active').addClass('disabled');
                $('#png').attr('onerror', "this.src='app/content/images/chart/export_disabled/png.png'").removeClass('active').addClass('disabled');
            }
        }
        chart.redraw();
    }
    downloadClient() {
        let a: any = this;
        let format: any = a.id;
        window['index'] = (format.substr(8, format.length - 1));
        let downFormat: any = window['index'];
        let currentEle: any = $('#' + a.id)[0];
        if (currentEle.firstElementChild.className ==  'active') {
            if ($('#mode')[0]['value'] == 'client') {
                let chart = $('#export').ejChart('instance');
                let exporting = chart.model.exportSettings, data;
                exporting.type = window['index'];
                exporting.fileName = $('#filename').val();
                exporting.angle = $('#angle')[0]['value'];
                exporting.mode = $('#mode')[0]['value'];
                data = chart.export();
                //  let nVer = navigator.appVersion;
                let nAgt = navigator.userAgent;
                let browserName = navigator.appName;
                let fullVersion = '' + parseFloat(navigator.appVersion);
                // let majorVersion = parseInt(navigator.appVersion, 10);
                let verOffset;

                if ((verOffset = nAgt.indexOf('Opera')) != -1) {
                    browserName = 'Opera';
                    fullVersion = nAgt.substring(verOffset + 6);
                    if ((verOffset = nAgt.indexOf('Version')) != -1) {
                        fullVersion = nAgt.substring(verOffset + 8);
                    }
                } else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
                    browserName = 'Microsoft Internet Explorer';
                    fullVersion = nAgt.substring(verOffset + 5);
                } else {
                    browserName = 'Chrome';
                    fullVersion = nAgt.substring(verOffset + 7);
                }
                if (browserName == 'Microsoft Internet Explorer') {     // for IE
                    let blob;
                    if (window['index'] == 'png') {
                        blob = data.msToBlob();
                    } else if (window['index'] == 'jpg') {
                        blob = data.msToBlob(null, 'image/jpeg');
                    } else if (window['index'] == 'svg') {
                        data = decodeURIComponent(data);
                        blob = new Blob([data], { type: 'image/svg-xml' });
                    }
                    window.navigator.msSaveOrOpenBlob(blob, exporting.fileName + '.' + window['index']);
                } else {
                    this['download'] = exporting.fileName + '.' + downFormat;
                    if (downFormat == 'png') {
                        this['href'] = data.toDataURL();
                    } else if (downFormat == 'jpg') {
                        this['href'] = data.toDataURL('image/jpeg');
                    } else {
                        this['href'] = 'data:text/plain;charset=utf-8,' + data;
                    }
                }
            } else {
                window['obj'].down(downFormat);
            }
        }
    }
    downloadPrint() {
    let chart = $('#export').ejChart('instance');
    chart.print('export');
    }

    down(args: any) {
        if ($('#' + args).hasClass('active')) {
            let mode = $('#mode')[0]['value'],
                chart = $('#export').ejChart('instance'),
                exporting = chart.model.exportSettings;
            exporting.fileName = $('#filename').val();
            exporting.mode = mode;
            exporting.orientation = $('#orientation1')[0]['value'];
            exporting.angle = $('#angle')[0]['value'];
            exporting.type = window['index'];
            if (window['index'] == 'png' || window['index'] == 'jpg') {
                exporting.action = '//js.syncfusion.com/ejServices/api/Chart/ImageExport';
            } else if (window['index'] == 'xlsx') {
                exporting.action = '//js.syncfusion.com/ejServices/api/Chart/ExcelExport';
            } else if (window['index'] == 'docx') {
                exporting.action = '//js.syncfusion.com/ejServices/api/Chart/WordExport';
            } else if (window['index'] == 'pdf') {
                exporting.action = '//js.syncfusion.com/ejServices/api/Chart/PdfExport';
            } else {
                exporting.action = '//js.syncfusion.com/ejServices/api/Chart/SvgExport';
            }
            if (mode == 'server') {
                chart.export();
            }
        }
    }
}
