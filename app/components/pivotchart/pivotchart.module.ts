import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EJ_PIVOTCHART_COMPONENTS } from 'ej-angular2/src/ej/pivotchart.component';

import { SharedModule } from './../../shared.module';
import { RelationalComponent } from './relational.component';
import { OlapComponent } from './olap.component';
import { ChartTypesComponent } from './chartTypes.component';
import { MultipleAxesComponent } from './multipleAxes.component';
import { ExportingComponent } from './exporting.component';

export const pivotchartAppRoutes: Routes = [
    { path: 'relational', component: RelationalComponent, data: { name: 'Relational', location: 'app/components/pivotchart/relational.component' } },
    { path: 'olap', component: OlapComponent, data: { name: 'OLAP', location: 'app/components/pivotchart/olap.component' } },
    { path: 'chartTypes', component: ChartTypesComponent, data: { name: 'Chart Types', location: 'app/components/pivotchart/chartTypes.component' } },
    { path: 'multipleAxes', component: MultipleAxesComponent, data: { name: 'Multiple Axes', location: 'app/components/pivotchart/multipleAxes.component' } },
    { path: 'exporting', component: ExportingComponent, data: { name: 'Exporting', location: 'app/components/pivotchart/exporting.component' } },
    { path: '', redirectTo: 'relational' }
];

export const PivotChartRouting = RouterModule.forChild(pivotchartAppRoutes);

@NgModule({
    imports: [PivotChartRouting, FormsModule, SharedModule],
    declarations: [RelationalComponent, OlapComponent, ChartTypesComponent, MultipleAxesComponent, ExportingComponent, EJ_PIVOTCHART_COMPONENTS]
})
export class PivotChartModule {
}
