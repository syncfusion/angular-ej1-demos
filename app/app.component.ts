import { Component, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { appRoutes, Route } from './app.module';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { EJComponents } from 'ej-angular2/src/ej/core';

@Component({
    selector: 'ej-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    childRoutes: Array<any>;
    fieldList: any;
    selectedIndex: number;

    parentRoutesArray: Array<any> = [];

    divdisplay: string;
    samplename: string;

    showRoundedCorner: boolean;
    isCategoryFound: boolean;

    categoryList: Array<Category> = [];
    routeIns: Route;

    showcaseHref: boolean;
    showcaseSubcat: boolean;
    location: any;
    showcaseUrl: Array<any> = [];
    codeareaDisplay: string;
    classVisible: boolean;
    outletSectionVisible: boolean;
    sampleCol: any;
    sampleAreaBorder: string;
    samplenamedisplay: string;

    menuData: Array<any> = [];
    themevarient: string;
    themecolor: string;
    themestyle: string;
    theme: string;
    links: any;
    menuobj: any;
    themes: any;
    reportthemes: any;
    dark: string;
    darkcolor: string;
    sampleborder: string;
    sampleradius: string;
    darkimage: boolean;
    bgtheme: any;
    corefile: any;
    btnelement: any;
    themename: string;
    hreftheme: any;
    optionalparam: string;
    themeswitcher: boolean;
    urltheme: string;
    browsername: string;
    browserversion: any;
    template: any;
    @ViewChild('menuelement') menuelement: EJComponents<any, any>;
    @ViewChild('sample') sample: ElementRef;
    constructor(private http: Http, public router: Router, private route: ActivatedRoute) {
        this.browsername = ej.browserInfo().name;
        this.browserversion = ej.browserInfo().version;
        this.themeswitcher = false;
        this.optionalparam = 'theme';
        this.themename = 'bootstrap';
        if (this.themeswitcher) {
            if (window.location.hash.indexOf('theme=') > -1) {
                this.themename = window.location.hash.split('theme=')[1];
                this.hreftheme = this.themename;
                setTimeout(() => {
                    this.updateDataVisualizationTheme(this.hreftheme);
                    this.darkthemecolor();
                    this.updatethemebyurl(this.themename);
                }, 10);
            }
        }
        this.getCategoryList();
        this.divdisplay = 'none';
        this.isCategoryFound = false;
        this.showRoundedCorner = true;
        this.showcaseSubcat = true;
        this.showcaseUrl = [{ 'url': '/showcase/stockanalysis', 'name': 'StockAnalysis' }, { 'url': '/showcase/healthtracker', 'name': 'HealthTracker' },
        { 'url': '/showcase/expenseanalysis', 'name': 'ExpenseAnalysis' }, { 'url': '/showcase/reportdesigner', 'name': 'ReportDesigner' }];
        this.router.events.subscribe((events) => {
            this.location = router.url;
            if (this.location.indexOf('theme=') > -1) {
                this.location = this.location.split(';')[0];
            }
            if (this.themeswitcher) {
                setTimeout(() => {
                    this.updateDataVisualizationTheme(this.hreftheme);
                }, 10);
            }
            if (events instanceof NavigationStart) {
                for (let i = 0; i < this.showcaseUrl.length; i++) {
                    if (events.url == this.showcaseUrl[i].url || events.url.indexOf('sourcecode') > -1) {
                        this.showcaseHref = true;
                        this.sampleCol = 'col-md-12';
                        this.classVisible = true;
                        this.sampleAreaBorder = '0px';
                        this.outletSectionVisible = true;
                        break;
                    } else {
                        this.showcaseHref = false;
                        this.outletSectionVisible = false;

                    }
                }
                if (events.url) {
                    window['urlString'] = events.url;
                }
            }
            if (this.location == '/showcase' || this.location == '/') {
                this.showcaseSubcat = false;
                this.codeareaDisplay = 'none';
                this.sampleCol = 'col-md-12';
                this.classVisible = true;
                this.sampleAreaBorder = '0px';
                this.samplename = ' ';
                this.samplenamedisplay = 'none';
            }
            if (this.location.indexOf('showcase') == -1 && this.location !== '/') {
                this.showcaseSubcat = true;
                this.sampleCol = 'col-md-10';
                this.classVisible = false;
                this.sampleAreaBorder = ' ';
                this.codeareaDisplay = 'block';
                this.samplenamedisplay = 'block';
            }
            if (window.location.href.indexOf('spreadsheet') > -1 || window['urlString'].indexOf('spreadsheet') > -1) {
                this.sampleCol = 'col-md-10';
                this.classVisible = false;
                this.sampleAreaBorder = ' ';
            }
        });
        this.menuData = [{ id: 1, text: '', parentId: null, spriteCssClass: 'e-icon' },
        { id: 'flatazure', text: 'Flat-Azure', parentId: 1, spriteCssClass: 'SB-theme SB-flat-azure' },
        { id: 'flatazuredark', text: 'Flat-Azure-Dark', parentId: 1, spriteCssClass: 'SB-theme SB-flat-azure-dark' },
        { id: 'flatlime', text: 'Flat-Lime', parentId: 1, spriteCssClass: 'SB-theme SB-flat-lime' },
        { id: 'flatlimedark', text: 'Flat-Lime-Dark', parentId: 1, spriteCssClass: 'SB-theme SB-flat-lime-dark' },
        { id: 'flatsaffron', text: 'Flat-Saffron', parentId: 1, spriteCssClass: 'SB-theme SB-flat-saffron' },
        { id: 'flatsaffrondark', text: 'Flat-Saffron-Dark', parentId: 1, spriteCssClass: 'SB-theme SB-flat-saffron-dark' },
        { id: 'gradientazure', text: 'Gradient-Azure', parentId: 1, spriteCssClass: 'SB-theme SB-gradient-azure' },
        { id: 'gradientazuredark', text: 'Gradient-Azure-Dark', parentId: 1, spriteCssClass: 'SB-theme SB-gradient-azure-dark' },
        { id: 'gradientlime', text: 'Gradient-Lime', parentId: 1, spriteCssClass: 'SB-theme SB-gradient-lime' },
        { id: 'gradientlimedark', text: 'Gradient-Lime-Dark', parentId: 1, spriteCssClass: 'SB-theme SB-gradient-lime-dark' },
        { id: 'gradientsaffron', text: 'Gradient-Saffron', parentId: 1, spriteCssClass: 'SB-theme SB-gradient-saffron' },
        { id: 'gradientsaffrondark', text: 'Gradient-Saffron-Dark', parentId: 1, spriteCssClass: 'SB-theme SB-gradient-saffron-dark' },
        { id: 'flatbootstrap', text: 'Bootstrap', parentId: 1, spriteCssClass: 'SB-theme SB-bootstrap' },
        { id: 'highcontrast01', text: 'High-Contrast-01', parentId: 1, spriteCssClass: 'SB-theme SB-high-contrast-01' },
        { id: 'highcontrast02', text: 'High-Contrast-02', parentId: 1, spriteCssClass: 'SB-theme SB-high-contrast-02' },
        { id: 'material', text: 'Material', parentId: 1, spriteCssClass: 'SB-theme SB-material' },
        { id: 'office365', text: 'Office-365', parentId: 1, spriteCssClass: 'SB-theme SB-office365' }
        ];
        this.themes = {
            'flat': 'deps/css/ej/default-theme/ej.web.all.min.css',
            'flatdark': 'deps/css/ej/flat-azure-dark/ej.web.all.min.css',
            'azure': 'deps/css/ej/default-theme/ej.web.all.min.css',
            'azuredark': 'deps/css/ej/flat-azure-dark/ej.web.all.min.css',
            'lime': 'deps/css/ej/flat-lime/ej.web.all.min.css',
            'limedark': 'deps/css/ej/flat-lime-dark/ej.web.all.min.css',
            'saffron': 'deps/css/ej/flat-saffron/ej.web.all.min.css',
            'saffrondark': 'deps/css/ej/flat-saffron-dark/ej.web.all.min.css',
            'gradient': 'deps/css/ej/gradient-azure/ej.web.all.min.css',
            'gradientdark': 'deps/css/ej/gradient-azure-dark/ej.web.all.min.css',
            'gradientazure': 'deps/css/ej/gradient-azure/ej.web.all.min.css',
            'gradientazuredark': 'deps/css/ej/gradient-azure-dark/ej.web.all.min.css',
            'gradientlime': 'deps/css/ej/gradient-lime/ej.web.all.min.css',
            'gradientlimedark': 'deps/css/ej/gradient-lime-dark/ej.web.all.min.css',
            'gradientsaffron': 'deps/css/ej/gradient-saffron/ej.web.all.min.css',
            'gradientsaffrondark': 'deps/css/ej/gradient-saffron-dark/ej.web.all.min.css',
            'bootstrap': 'deps/css/ej/bootstrap-theme/ej.web.all.min.css',
            'high-contrast-01': 'deps/css/ej/high-contrast-01/ej.web.all.min.css',
            'high-contrast-02': 'deps/css/ej/high-contrast-02/ej.web.all.min.css',
            'material': 'deps/css/ej/material/ej.web.all.min.css',
            'office-365': 'deps/css/ej/office-365/ej.web.all.min.css'
        };
        this.reportthemes = {
            'flat': 'deps/css/ej/default-theme/ej.reportdesigner.min.css',
            'flatdark': 'deps/css/ej/flat-azure-dark/ej.reportdesigner.min.css',
            'azure': 'deps/css/ej/default-theme/ej.reportdesigner.min.css',
            'azuredark': 'deps/css/ej/flat-azure-dark/ej.reportdesigner.min.css',
            'lime': 'deps/css/ej/flat-lime/ej.reportdesigner.min.css',
            'limedark': 'deps/css/ej/flat-lime-dark/ej.reportdesigner.min.css',
            'saffron': 'deps/css/ej/flat-saffron/ej.reportdesigner.min.css',
            'saffrondark': 'deps/css/ej/flat-saffron-dark/ej.reportdesigner.min.css',
            'gradient': 'deps/css/ej/gradient-azure/ej.reportdesigner.min.css',
            'gradientdark': 'deps/css/ej/gradient-azure-dark/ej.reportdesigner.min.css',
            'gradientazure': 'deps/css/ej/gradient-azure/ej.reportdesigner.min.css',
            'gradientazuredark': 'deps/css/ej/gradient-azure-dark/ej.reportdesigner.min.css',
            'gradientlime': 'deps/css/ej/gradient-lime/ej.reportdesigner.min.css',
            'gradientlimedark': 'deps/css/ej/gradient-lime-dark/ej.reportdesigner.min.css',
            'gradientsaffron': 'deps/css/ej/gradient-saffron/ej.reportdesigner.min.css',
            'gradientsaffrondark': 'deps/css/ej/gradient-saffron-dark/ej.reportdesigner.min.css',
            'bootstrap': 'deps/css/ej/bootstrap-theme/ej.reportdesigner.min.css',
            'high-contrast-01': 'deps/css/ej/high-contrast-01/ej.reportdesigner.min.css',
            'high-contrast-02': 'deps/css/ej/high-contrast-02/ej.reportdesigner.min.css',
            'material': 'deps/css/ej/material/ej.reportdesigner.min.css',
            'office-365': 'deps/css/ej/office-365/ej.reportdesigner.min.css'
        };
    }
    showParentRoutes(catItems) {
        this.divdisplay = 'block';
        this.parentRoutesArray = catItems;
    }

    getCategoryList() {
        appRoutes.forEach((appRoute, index) => {
            this.categoryList.forEach((cType, index) => {
                if (appRoute.data != undefined && appRoute.data['category'] == cType.name) {
                    cType.cItems.push(this.getRoute(appRoute));
                    this.isCategoryFound = true;
                }
            });
            if (!this.isCategoryFound && appRoute.data != undefined && appRoute.data['category'] != '') {
                this.createCategory(appRoute);
            }
            this.isCategoryFound = false;
            if (this.categoryList.length == 0) {
                this.createCategory(appRoute);
            }
        });
    }
    createCategory(appRoute) {
        let newCategory = new Category();
        newCategory.name = appRoute.data['category'];
        newCategory.cItems = [];
        newCategory.cItems.push(this.getRoute(appRoute));
        this.categoryList.push(newCategory);
    }
    getRoute(item) {
        this.routeIns = new Route();
        this.routeIns.name = item.data['name'];
        this.routeIns.path = item.path;
        this.routeIns.type = item.data['type'];
        return this.routeIns;
    }
    onChildListSelect(event) {
        if (event.value != '') {
            if (this.themeswitcher) {
                this.router.navigate(['/' + event.data.path, { theme: this.themename }]);
            } else {
                this.router.navigate(['/' + event.data.path]);
            }
            this.samplename = event.text;
        }
    }

    ngAfterViewInit() {
        if (this.themeswitcher) {
            this.menuobj = this.menuelement.widget;
            jQuery('#themebutton >li >a > .e-icon:first').addClass('bootstrap');
            this.resizeMenu();
            jQuery('body').addClass(this.theme);
            jQuery('.ej2option').css('margin-right', '67px');
        }
    }
    resizeMenu() {
        let menu;
        if (window.innerWidth > 1) {
            menu = jQuery('#themebutton ul');
            menu.css('overflow-y', 'scroll');
            let height = window.innerHeight - jQuery('.toolbar').outerHeight();
            if (height < 560) {
                menu.height(height - 10);
            }
            this.menuobj._closeAll();
        }
    }
    themebtnClick(args) {
        if (args.event) { args.event.stopPropagation(); }
        let color;
        if (args.ID == 1) {
            if (jQuery(window).width() > 1) {
                this.btnelement = this.menuelement.widget.element;
            }
            let left = this.btnelement.width() - jQuery('.e-custom-theme .e-horizontal .e-list>ul').width();
            jQuery('.e-custom-theme .e-horizontal .e-list>ul').css('left', left);
        } else {
            this.themename = (args.text).toLowerCase();
            if (this.themename.indexOf('gradient') !== -1) {
                this.themestyle = 'gradient';
            } else { this.themestyle = 'flat'; }
            if (this.themename.indexOf('dark') !== -1) {
                this.themevarient = 'dark';
            } else { this.themevarient = 'light'; }
            if (this.themename.indexOf('azure') !== -1) {
                this.themecolor = this.theme = 'azure';
            } else if (this.themename.indexOf('lime') !== -1) {
                this.themecolor = this.theme = 'lime';
            } else if (this.themename.indexOf('saffron') !== -1) {
                this.themecolor = this.theme = 'saffron';
            } else if (this.themename.indexOf('office-365') !== -1) {
                this.themecolor = this.theme = 'office-365';
            } else if (this.themename.indexOf('material') !== -1) {
                this.themecolor = this.theme = 'material';
            } else if (this.themename.indexOf('high-contrast-02') !== -1) {
                this.themecolor = this.theme = 'high-contrast-02';
            } else if (this.themename.indexOf('high-contrast-01') !== -1) {
                this.themecolor = this.theme = 'high-contrast-01';
            } else if (this.themename.indexOf('bootstrap') !== -1) { this.themecolor = this.theme = 'bootstrap'; }
            color = this.themecolor;
            this.updateTheme(color);
            if (this.theme.indexOf('dark') != -1 || this.theme.indexOf('high-contrast') != -1) {
                jQuery(document.body).addClass('darktheme');
                this.theme = this.theme.replace('dark', '').replace('gradient', '');
            }
            this.setGetParameter(this.optionalparam, this.themename);
        }
    }
    updateTheme(selcolor) {
        this.preparetheme();
        this.replacebg(this.themevarient == 'dark');
        this.replaceTheme();
    }
    preparetheme() {
        let themename = '';
        if (window.location.hash.indexOf('dark') != -1 && this.themevarient != 'light') {
            this.themevarient = 'dark';
        }
        if (window.location.hash.indexOf('gradient') != -1 && this.themestyle != 'flat') {
            this.themestyle = 'gradient';
        }
        if (this.themevarient == 'dark') {
            if (this.themestyle == 'gradient') {
                themename = this.themestyle + this.themecolor + this.themevarient;
            } else {
                themename = (this.themecolor != '') ? this.themecolor + this.themevarient : this.themestyle + this.themevarient;
            }
        } else {
            if (this.themestyle == 'gradient') {
                themename = this.themestyle + this.themecolor;
            } else {
                themename = (this.themecolor != '') ? this.themecolor : this.themestyle;
            }
        }
        if (this.theme.indexOf('bootstrap') != -1 || this.theme.indexOf('material') != -1 || this.theme.indexOf('office-365') != -1) {
            themename = this.theme;
            this.themestyle = 'flat';
            this.themevarient = 'light';
        }
        if (this.theme.indexOf('high-contrast-01') != -1 || this.theme.indexOf('high-contrast-02') != -1) {
            themename = this.theme;
            this.themestyle = 'flat';
            this.themevarient = 'dark';
        }
        this.theme = themename;
    }
    replacebg(enable) {
        if (enable) {
            this.bgtheme = this.sample.nativeElement.parentElement.parentElement;
            jQuery(this.bgtheme).addClass('darktheme');
            this.dark = 'rgb(41,36,42)';
            this.darkcolor = '#ddd';
            this.sampleborder = '#777';
            this.sampleradius = '3px';
        } else {
            jQuery(this.bgtheme).removeClass('darktheme');
            this.dark = ' ';
            this.darkcolor = ' ';
            this.sampleborder = ' ';
            this.darkimage = true;
        }
    }
    replaceTheme() {
        if ((this.theme.indexOf('lime') != -1) && this.themecolor != 'azure' && this.themecolor != 'saffron') {
            this.themecolor = 'lime';
        } else if ((this.theme.indexOf('saffron') != -1) && this.themecolor != 'azure' && this.themecolor != 'lime') {
            this.themecolor = 'saffron';
        } else if ((this.theme.indexOf('high-contrast-01') != -1)) {
            this.themecolor = 'high-contrast-01';
        } else if ((this.theme.indexOf('high-contrast-02') != -1)) {
            this.themecolor = 'high-contrast-02';
        } else if ((this.theme.indexOf('material') != -1)) {
            this.themecolor = 'material';
        } else if ((this.theme.indexOf('office-365') != -1)) {
            this.themecolor = 'office-365';
        } else if (this.theme.indexOf('azure') != -1) {
            this.themecolor = 'azure';
        } else if (this.theme.indexOf('bootstrap') != -1) {
            this.themecolor = 'bootstrap';
        }
        let selcolor = (this.themecolor == '') ? 'bootstrap' : this.themecolor;
        jQuery('body').attr('class', selcolor);
        this.updateLinkTag();
    }
    updateLinkTag() {
        jQuery('body').fadeOut(0);
        this.links = jQuery(document.head || document.getElementsByTagName('head')[0]).find('link');
        for (let i = 0; i < this.links.length; i++) {
            if (this.links[i].href.indexOf('ej.web.all.min.css') != -1) {
                this.links[i].href = this.themes[this.theme];
            }
            if (this.links[i].href.indexOf('ej.reportdesigner.min.css') != -1) {
                this.links[i].href = this.reportthemes[this.theme];
            }
        }
        jQuery('body').fadeIn(2000);
    }
    updatethemebyurl(theme) {
        this.links = jQuery(document.head || document.getElementsByTagName('head')[0]).find('link');
        for (let i = 0; i < this.links.length; i++) {
            if (this.links[i].href.indexOf('ej.web.all.min.css') != -1) {
                if (theme == 'bootstrap') {
                    this.links[i].href = 'deps/css/ej/bootstrap-theme/ej.web.all.min.css';
                } else if (theme == 'flat-azure') {
                    this.links[i].href = 'deps/css/ej/default-theme/ej.web.all.min.css';
                } else {
                    this.links[i].href = 'deps/css/ej/' + theme + '/ej.web.all.min.css';
                }
                if (theme.indexOf('dark') > -1 || theme.indexOf('high-contrast') > -1) {
                    jQuery('body').addClass('darktheme');
                    this.dark = 'rgb(41,36,42)';
                    this.darkcolor = '#ddd';
                    this.sampleborder = '#777';
                    this.sampleradius = '3px';
                } else {
                    jQuery('body').removeClass('darktheme');
                    this.dark = ' ';
                    this.darkcolor = ' ';
                    this.sampleborder = ' ';
                    this.darkimage = true;
                }
            }
            if (this.links[i].href.indexOf('ej.reportdesigner.min.css') != -1) {
                if (theme == 'bootstrap') {
                    this.links[i].href = 'deps/css/ej/bootstrap-theme/ej.reportdesigner.min.css';
                } else if (theme == 'flat-azure') {
                    this.links[i].href = 'deps/css/ej/default-theme/ej.reportdesigner.min.css';
                } else {
                    this.links[i].href = 'deps/css/ej/' + theme + '/ej.reportdesigner.min.css';
                }
            }
        }
    }
    darkthemecolor() {
        if (this.themename.indexOf('gradient') !== -1) {
            this.themestyle = 'gradient';
        } else { this.themestyle = 'flat'; }
        if (this.themename.indexOf('dark') !== -1) {
            this.themevarient = 'dark';
        } else { this.themevarient = 'light'; }
        if (this.themename.indexOf('azure') !== -1) {
            this.themecolor = this.theme = 'azure';
        } else if (this.themename.indexOf('lime') !== -1) {
            this.themecolor = this.theme = 'lime';
        } else if (this.themename.indexOf('saffron') !== -1) {
            this.themecolor = this.theme = 'saffron';
        } else if (this.themename.indexOf('office-365') !== -1) {
            this.themecolor = this.theme = 'office-365';
        } else if (this.themename.indexOf('material') !== -1) {
            this.themecolor = this.theme = 'material';
        } else if (this.themename.indexOf('high-contrast-02') !== -1) {
            this.themecolor = this.theme = 'high-contrast-02';
        } else if (this.themename.indexOf('high-contrast-01') !== -1) {
            this.themecolor = this.theme = 'high-contrast-01';
        } else if (this.themename.indexOf('bootstrap') !== -1) { this.themecolor = this.theme = 'bootstrap'; }
        let color = this.themecolor;
        this.updateTheme(color);
    }
    setGetParameter(paramName, paramValue) {
        let hash = location.hash;
        let url = hash.split('theme=')[0];
        if (paramName.indexOf('theme=') > -1) {
            paramValue = this.themename;
        }
        window.location.href = url + paramName + '=' + paramValue;
    }
    updateSBTheme() { // for themebutton icon change
        jQuery('body').removeClass('azure saffron high-contrast-01 high-contrast-02 material office-365 bootstrap azuredark gradientlime lime limedark saffrondark bootstrap').addClass(this.theme);
    }
    updateDataVisualizationTheme(theme) {
        if (this.location.indexOf('chart') > -1) {
            this.onchartload(theme);
        } else if (this.location.indexOf('sunburst') > -1) {
            this.loadSunBurstTheme(theme);
        } else if (this.location.indexOf('bulletgraph') > -1) {
            this.loadBulletTheme(theme);
        } else if (this.location.indexOf('gauge') > -1) {
            this.loadGaugeTheme(theme);
        } else if (this.location.indexOf('rangenavigator') > -1) {
            this.loadRangeNavigatorTheme(theme);
            this.onchartload(theme);
        }
    }
    onchartload(text) {
        if (text != undefined) {
            this.urltheme = text.replace(/-/g, '');
        }
        let theme = this.themestyle + this.themecolor + this.themevarient || this.urltheme;
        if (theme) {
            switch (theme) {
                case 'flatdark':
                case 'flatazuredark':
                case 'flatlimedark':
                case 'flatsaffrondark':
                    theme = 'flatdark';
                    break;
                case 'gradientlight':
                case 'gradientazurelight':
                case 'gradientlimelight':
                case 'gradientsaffronlight':
                    theme = 'gradientlight';
                    break;
                case 'gradientdark':
                case 'gradientazuredark':
                case 'gradientlimedark':
                case 'gradientsaffrondark':
                    theme = 'gradientdark';
                    break;
                case 'flatbootstraplight':
                    theme = 'bootstrap';
                    break;
                case 'flathigh-contrast-01dark':
                case 'flathigh-contrast-02dark':
                    theme = 'high-contrast-01';
                    break;
                case 'flatmateriallight':
                case 'flatoffice-365light':
                    theme = 'material';
                    break;

                default:
                    theme = 'flatlight';
                    break;
            }
            jQuery('ej-chart').ejChart('option', 'theme', theme);
        }

    }
    loadBulletTheme(text) {
        if (text != undefined) {
            this.urltheme = text.replace(/-/g, '');
        }
        let bulletTheme = this.themestyle + this.themecolor + this.themevarient || this.urltheme;
        if (bulletTheme) {
            switch (bulletTheme) {
                case 'flatdark':
                case 'flatazuredark':
                case 'flatlimedark':
                case 'flatsaffrondark':
                case 'gradientdark':
                case 'gradientazuredark':
                case 'gradientlimedark':
                case 'gradientsaffrondark':
                case 'flathigh-contrast-01dark':
                case 'flathigh-contrast-02dark':
                    this.theme = 'flatdark';
                    break;
                case 'flatoffice-365light':
                case 'flatmateriallight':
                    this.theme = 'material';
                    break;
                default:
                    this.theme = 'flatlight';
                    break;
            }
            jQuery('ej-bulletgraph').ejBulletGraph('option', 'theme', this.theme);
        }
    }

    loadSunBurstTheme(sender) {
        let SunBurstTheme = this.themestyle + this.themecolor + this.themevarient;
        SunBurstTheme = SunBurstTheme.toString();
        if (SunBurstTheme.indexOf('dark') > -1 || SunBurstTheme.indexOf('contrast') > -1) {
            SunBurstTheme = 'flatdark';
        } else {
            SunBurstTheme = 'flatlight';
        }
        jQuery('ej-sunburstchart').ejSunburstChart('option', 'theme', SunBurstTheme);
    }

    loadRangeNavigatorTheme(sender) {
        let theme = this.themestyle + this.themecolor + this.themevarient;
        if (theme) {
            switch (theme) {
                case 'flatazurelight':
                    theme = 'azurelight';
                    break;
                case 'flatlimelight':
                    theme = 'limelight';
                    break;
                case 'flatsaffronlight':
                    theme = 'saffronlight';
                    break;
                case 'gradientazurelight':
                    theme = 'gradientazure';
                    break;
                case 'gradientlimelight':
                    theme = 'gradientlime';
                    break;
                case 'gradientsaffronlight':
                    theme = 'gradientsaffron';
                    break;
                case 'flatazuredark':
                    theme = 'azuredark';
                    break;
                case 'flatlimedark':
                    theme = 'limedark';
                    break;
                case 'flatsaffrondark':
                    theme = 'saffrondark';
                    break;
                case 'gradientazuredark':
                    theme = 'gradientazuredark';
                    break;
                case 'gradientlimedark':
                    theme = 'gradientlimedark';
                    break;
                case 'gradientsaffrondark':
                    theme = 'gradientsaffrondark';
                    break;
                case 'flathigh-contrast-01dark':
                    theme = 'highcontrast01';
                    break;
                case 'flathigh-contrast-02dark':
                    theme = 'highcontrast02';
                    break;
                case 'flatmateriallight':
                    theme = 'material';
                    break;
                case 'flatoffice-365light':
                    theme = 'office';
                    break;
                default:
                    theme = 'flatlight';
                    break;
            }
            jQuery('ej-rangenavigator').ejRangeNavigator('option', 'theme', theme);
        }
    }

    // Load Gauge Theme
    loadGaugeTheme(text) {
        if (text != undefined) {
            this.urltheme = text.replace(/-/g, '');
        }
        let theme1 = this.themestyle + this.themecolor + this.themevarient || this.urltheme;
        if (theme1) {
            switch (theme1) {
                case 'flatdark':
                case 'flatazuredark':
                case 'flatlimedark':
                case 'flatsaffrondark':
                case 'gradientdark':
                case 'gradientazuredark':
                case 'gradientlimedark':
                case 'gradientsaffrondark':
                    this.theme = 'flatdark';
                    break;
                default:
                    this.theme = 'flatlight';
                    break;
            }
            jQuery('ej-circulargauge').ejCircularGauge('option', 'theme', this.theme);
        }
    }

    showEJ2PopUp() {
        jQuery('#popupclose').hide();
        jQuery('#ej2popup').slideUp('slow', function () {
            jQuery('#ej2popup').hide();
        });
    }
}



export class Category {
    name: string;
    cItems: Array<any>;
}
