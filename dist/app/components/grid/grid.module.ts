import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../../shared.module';

import { DefaultComponent } from './default.component';
import { GroupingComponent } from './grouping.component';
import { ColumntemplateComponent } from './columntemplate.component';
import { EditingComponent } from './editing.component';
import { SummaryComponent } from './summary.component';
import { StateMaintenanceComponent } from './state.component';
import { ResponsiveComponent } from './responsive.component';

export const gridAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/grid/default.component' } },
    { path: 'grouping', component: GroupingComponent, data: { name: 'Grouping', location: 'app/components/grid/grouping.component' } },
    { path: 'columntemplate', component: ColumntemplateComponent, data: { name: 'Column Template', location: 'app/components/grid/columntemplate.component' } },
    { path: 'editing', component: EditingComponent, data: { name: 'Editing', location: 'app/components/grid/editing.component' } },
    { path: 'Summary', component: SummaryComponent, data: { name: 'Summary', location: 'app/components/grid/summary.component' } },
    { path: 'StateMaintenance', component: StateMaintenanceComponent, data: { name: 'StateMaintenance', location: 'app/components/grid/state.component' } },
    { path: 'Responsive', component: ResponsiveComponent, data: { name: 'Responsive', location: 'app/components/grid/responsive.component' } },
    { path: '', redirectTo : 'default' }
];

export const GridRouting = RouterModule.forChild(gridAppRoutes);

@NgModule({
    imports: [GridRouting, CommonModule, SharedModule],
    declarations: [DefaultComponent, GroupingComponent, ColumntemplateComponent, EditingComponent, SummaryComponent, StateMaintenanceComponent, ResponsiveComponent
    ]
})
export class GridModule {
}
