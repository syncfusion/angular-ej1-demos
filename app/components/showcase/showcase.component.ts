import { Component, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
    selector: 'my-showcase',
    templateUrl: './showcase.component.html',
    styleUrls: ['./showcase.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ShowcaseComponent {
    public details: Array<any> = [
        {
            image: 'expense_thumb.png', darkimage: 'dark-theme-expense-thumb.png', route: '/showcase/expenseanalysis', sample: 'expenseanalysis', text: 'Expense Analysis',
            qrimage: 'expense-angular.png', description: 'Categorize and analyze expenses to understand how money was spent', sourcecode: '/showcase/expenseanalysis-sourcecode',
        },
        {
            image: 'health_thumb.png', route: '/showcase/healthtracker', sample: 'healthtracker', text: 'Health Tracker', sourcecode: '/showcase/healthtracker-sourcecode',
            qrimage: 'health-angular.png', description: 'Visualize food intake and calories burnt using gauges, charts and grids.', darkimage: 'dark-theme-health-thumb.png'
        },
        {
            image: 'stock_thumb.png', route: '/showcase/stockanalysis', sample: 'stockanalysis', text: 'Stock Analysis', sourcecode: '/showcase/stockanalysis-sourcecode',
            qrimage: 'stock.png', description: 'Analyze historical stock price and volume data using charts', darkimage: 'dark-theme-stack-thumb.png'
        }
    ];
    dark: boolean;
    showcasetheme: boolean;
    constructor(private appComp: AppComponent) { }
    ngAfterViewInit() {
        if (this.appComp.browsername == 'msie' && this.appComp.browserversion <= 11.0) {
            jQuery('a.routerclass').removeAttr('target');
        }
    }
    ngDoCheck() {
        this.showcasetheme = jQuery('body').hasClass('darktheme');
        if (this.showcasetheme == true) {
            this.dark = true;
        } else {
            this.dark = false;
        }
    }
}
