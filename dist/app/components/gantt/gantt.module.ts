import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EJ_GANTT_COMPONENTS } from 'ej-angular2/src/ej/gantt.component';

import { DefaultComponent } from './default.component';
import { EditingComponent } from './editing.component';
import { ResourceComponent } from './resource.component';
import { BaselineComponent } from './baseline.component';
import { HolidaysComponent } from './holidays.component';

export const ganttAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/gantt/default.component' } },
    { path: 'editing', component: EditingComponent, data: { name: 'Editing', location: 'app/components/gantt/editing.component' } },
    { path: 'resource', component: ResourceComponent, data: { name: 'Resources Allocation', location: 'app/components/gantt/resource.component' } },
    { path: 'baseline', component: BaselineComponent, data: { name: 'Baseline', location: 'app/components/gantt/baseline.component' } },
    { path: 'holidays', component: HolidaysComponent, data: { name: 'Holidays', location: 'app/components/gantt/holidays.component' } },
    { path: '', redirectTo : 'default' }
];

export const GanttRouting = RouterModule.forChild(ganttAppRoutes);

@NgModule({
    imports: [GanttRouting],
    declarations: [DefaultComponent, EJ_GANTT_COMPONENTS, EditingComponent, ResourceComponent, BaselineComponent, HolidaysComponent
    ]
})
export class GanttModule {
}
