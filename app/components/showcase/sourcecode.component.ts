import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';

@Component({
  selector: 'my-sourcetab',
  templateUrl: './sourcecode.component.html',
  styleUrls: ['./sourcecode.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class SourcecodeComponent {

  htmlEditor: Array<any> = [];
  sourceCodePath: Array<any> = [];
  location: any;
  url: any;
  htmlSourceResult: any;
  tsSourceResult: any;
  private CodeMirror: any = window['CodeMirror'];
  private _tsCM: any;
  private _htCM: any;
  private cmOptions: Object = {
    readOnly: true,
    mode: 'xml',
    htmlMode: true
  };
  filename: any;
  popup: boolean;
  constructor(private _router: Router, private http: Http) {
    this.sourceCodePath = [
      { 'name': 'healthtracker', 'file': 'HealthTracker' },
      { 'name': 'expenseanalysis', 'file': 'ExpenseAnalysis' },
      { 'name': 'stockanalysis', 'file': 'StockAnalysis' }
    ];
    this.popup = true;
    this._router.events.subscribe((events) => {
      if (events instanceof NavigationEnd) {
        this.location = this._router.url;
        for (let i = 0; i < this.sourceCodePath.length; i++) {
          if (this.location.indexOf(this.sourceCodePath[i].name) > -1) {
            this.url = 'app/components/showcase/' + this.sourceCodePath[i].name + '.component';
            this.filename = this.sourceCodePath[i].file;
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
                  this.popup = false;
                });
              });
          }
        }
      }
    });
  }
  onTabItemChange(e) {
    if (e['activeIndex'] != e['prevActiveIndex']) {
      this._tsCM.getDoc().setValue(this.tsSourceResult);
      this._htCM.getDoc().setValue(this.htmlSourceResult);
    }
  }
}
