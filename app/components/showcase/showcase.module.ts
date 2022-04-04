import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../../shared.module';

import { ShowcaseComponent } from './showcase.component';
import { ExpenseAnalysisComponent } from './expenseanalysis.component';
import { HealthtrackerComponent } from './healthtracker.component';
import { StockAnalysisComponent } from './stockanalysis.component';
import { SmartScroller } from './smartscroller';

import { SourcecodeComponent } from './sourcecode.component';

export const showcaseAppRoutes: Routes = [
    { path: 'expenseanalysis', component: ExpenseAnalysisComponent, data: { name: 'Expenseanalysis', location: 'app/components/showcase/expenseanalysis.component' } },
    { path: 'healthtracker', component: HealthtrackerComponent, data: { name: 'Healthtracker', location: 'app/components/showcase/healthtracker.component' } },
    { path: 'stockanalysis', component: StockAnalysisComponent, data: { name: 'Stockanalysis', location: 'app/components/showcase/stockanalysis.component' } },
    { path: 'stockanalysis-sourcecode', component: SourcecodeComponent, data: { name: 'Sourcecode', location: 'app/components/showcase/sourcecode.component' } },
    { path: 'healthtracker-sourcecode', component: SourcecodeComponent, data: { name: 'Sourcecode', location: 'app/components/showcase/sourcecode.component' } },
    { path: 'expenseanalysis-sourcecode', component: SourcecodeComponent, data: { name: 'Sourcecode', location: 'app/components/showcase/sourcecode.component' } },
    { path: '', component: ShowcaseComponent }
];
export const showcaseRouting = RouterModule.forChild(showcaseAppRoutes);

@NgModule({
    imports: [showcaseRouting, CommonModule, SharedModule],
    declarations: [ShowcaseComponent, ExpenseAnalysisComponent, StockAnalysisComponent, HealthtrackerComponent, SmartScroller, SourcecodeComponent]
})
export class ShowcaseModule {
}
