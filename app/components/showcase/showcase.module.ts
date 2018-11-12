import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../../shared.module';

import { ShowcaseComponent } from './showcase.component';
import { ExpenseAnalysisComponent } from './expenseanalysis.component';
import { HealthtrackerComponent } from './healthtracker.component';
import { StockAnalysisComponent } from './stockanalysis.component';
import { ReportDesignerComponent } from './reportdesigner.component';
import { SmartScroller } from './smartscroller';

import { SourcecodeComponent } from './sourcecode.component';

export const showcaseAppRoutes: Routes = [
    { path: 'expenseanalysis', component: ExpenseAnalysisComponent, data: { name: 'Expenseanalysis', location: 'app/components/showcase/expenseanalysis.component' } },
    { path: 'healthtracker', component: HealthtrackerComponent, data: { name: 'Healthtracker', location: 'app/components/showcase/healthtracker.component' } },
    { path: 'stockanalysis', component: StockAnalysisComponent, data: { name: 'Stockanalysis', location: 'app/components/showcase/stockanalysis.component' } },
    { path: 'reportdesigner', component: ReportDesignerComponent, data: { name: 'ReportDesigner', location: 'app/components/showcase/reportdesigner.component' } },
    { path: 'reportdesigner-sourcecode', component: SourcecodeComponent, data: { name: 'Sourcecode', location: 'app/components/showcase/sourcecode.component' } },
    { path: 'stockanalysis-sourcecode', component: SourcecodeComponent, data: { name: 'Sourcecode', location: 'app/components/showcase/sourcecode.component' } },
    { path: 'healthtracker-sourcecode', component: SourcecodeComponent, data: { name: 'Sourcecode', location: 'app/components/showcase/sourcecode.component' } },
    { path: 'expenseanalysis-sourcecode', component: SourcecodeComponent, data: { name: 'Sourcecode', location: 'app/components/showcase/sourcecode.component' } },
    { path: '', component: ShowcaseComponent }
];
export const showcaseRouting = RouterModule.forChild(showcaseAppRoutes);

@NgModule({
    imports: [showcaseRouting, CommonModule, SharedModule],
    declarations: [ShowcaseComponent, ExpenseAnalysisComponent, StockAnalysisComponent, ReportDesignerComponent, HealthtrackerComponent, SmartScroller, SourcecodeComponent]
})
export class ShowcaseModule {
}
