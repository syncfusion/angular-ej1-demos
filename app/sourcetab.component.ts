import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { AppComponent } from './app.component';
import { Route } from './app.module';
import { Title } from '@angular/platform-browser';
import { Analytics } from './analytics';

@Component({
  selector: 'source-tab',
  templateUrl: './sourcetab.component.html',
  providers: [Analytics],
})
export class SourceTabComponent {
  url: any;
  htmlSourceResult: any;
  tsSourceResult: any;
  selectedindex: number;
  private CodeMirror: any = window['CodeMirror'];
  private _tsCM: any;
  private _htCM: any;
  private cmOptions: Object = {
    readOnly: true,
    mode: 'xml',
    htmlMode: true
  };
  location: any;
  routeLevArray: Array<string>;
  appModule: any;
  routeIns: Route;
  documenttitle: string;
  analyticsLogmodel: any;
  constructor(private _router: Router, private http: Http, private activeroute: ActivatedRoute, private appComp: AppComponent, private titleService: Title, private analyticsComp: Analytics) {
    this.documenttitle = 'Essential JS 1 for Angular';
    this._router.events.subscribe((events) => {
      if (events instanceof NavigationEnd) {
        this.location = this._router.url;
        if (appComp.themeswitcher) {
          if (window.location.hash.indexOf('expenseanalysis') == -1 && window.location.hash.indexOf('stockanalysis') == -1 && window.location.hash.indexOf('healthtracker') == -1
            && window.location.hash.indexOf('reportdesigner') == -1) {
            if (window.location.hash.indexOf('theme=') == -1) {
              window.location.href = window.location.hash + ';theme=' + this.appComp.themename;
            }
          }
        }
        for (let i = 0; i < appComp.showcaseUrl.length; i++) {
          if (window.location.hash.indexOf(appComp.showcaseUrl[i].url) > -1) {
            window.location.href = window.location.hash.split(';')[0];
            this.titleService.setTitle('Showcase | ' + ' ' + appComp.showcaseUrl[i].name + ' ' + '|' + ' ' + this.documenttitle);
          }
        }
        if (this.location == '/showcase') {
          this.titleService.setTitle('Showcase | ' + this.documenttitle);
        }
        if (this.location.indexOf('showcase') == -1) {
          this.routeLevArray = this._router.url.split('/');
          this.setChildRoutes(this.routeLevArray[1]);
          this.url = this.activeroute.snapshot.root.children[0].children[0]['data']['location'];
          this.appComp.samplename = this.activeroute.snapshot.root.children[0].children[0]['data']['name'];
          let title = this.activeroute.snapshot.root.children[0].data.name;
          let newtitle = this.appComp.samplename + ' ' + '|' + ' ' + title + ' ' + '|' + ' ' + this.documenttitle;
          this.titleService.setTitle(newtitle);
          Observable.forkJoin(this.http.get(this.url + '.html'), this.http.get(this.url + '.ts'))
            .subscribe(e => {
              this.htmlSourceResult = e[0].text();
              this.tsSourceResult = e[1].text();
              setTimeout(() => {
                if (this._htCM == null || this._tsCM == null) {
                  this._tsCM = this.CodeMirror.fromTextArea(document.getElementById('tssourcecache'), { mode: 'text/typescript', readOnly: true });
                  this._htCM = this.CodeMirror.fromTextArea(document.getElementById('htmlsourcecache'), this.cmOptions);
                }
                this._tsCM.getDoc().setValue(this.tsSourceResult);
                this._htCM.getDoc().setValue(this.htmlSourceResult);
              });
            });
        }
        analyticsComp.analyticsLogmodel['PageUrl'] = window.location.href;
        analyticsComp.postRequest(analyticsComp.analyticsLogmodel);
      }
    });
  }
  onTabItemChange(e) {
    if (e['activeIndex'] != e['prevActiveIndex']) {
      this._tsCM.getDoc().setValue(this.tsSourceResult);
      this._htCM.getDoc().setValue(this.htmlSourceResult);
    }
  }
  setChildRoutes(pRoute: string) {
    import('./components/' + pRoute + '/' + pRoute + '.module').then((module: any) => {
      this.appModule = module[pRoute + 'AppRoutes'];
      this.appComp.childRoutes = [];
      for (let index in this.appModule) {
        if (+index != this.appModule.length - 1) {
          this.routeIns = new Route();
          this.routeIns.name = this.appModule[index]['data']['name'];
          this.routeIns.path = pRoute + '/' + this.appModule[index]['path'];
          this.routeIns.type = this.appModule[index]['data']['type'];
          let sampletype = this.routeIns.type;
          if (sampletype == null) {
            this.routeIns.type = '';
          }
          this.appComp.template = '${name}<span class="childsample ${type}"></span>';
          this.appComp.childRoutes.push(this.routeIns);
        }
      }
      this.appComp.fieldList = { dataSource: this.appComp.childRoutes, text: 'name', value: 'path' };
      if (this.appComp.themeswitcher) {
        this.selectedindex = this.appComp.childRoutes.findIndex(val => val.path == this._router.url.split(';')[0].substring(1));
      } else {
        this.selectedindex = this.appComp.childRoutes.findIndex(val => val.path == this._router.url.substring(1));
      }
      this.appComp.selectedIndex = this.selectedindex > 0 ? this.selectedindex : 0;
    });
  }
}
