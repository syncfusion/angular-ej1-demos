import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EJ_SCHEDULE_COMPONENTS } from 'ej-angular2/src/ej/schedule.component';

import { DefaultComponent } from './default.component';
import { HorizontalComponent } from './horizontal.component';
import { MultipleResourceComponent } from './multipleresource.component';
import { ResourceGroupComponent } from './resourcegrouping.component';
import { TimeScaleComponent } from './timescale.component';
import { CategorizeComponent } from './categorize.component';

export const scheduleAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/schedule/default.component' } },
    { path: 'horizontal', component: HorizontalComponent, data: { name: 'Timeline View', location: 'app/components/schedule/horizontal.component' } },
    { path: 'multipleresource', component: MultipleResourceComponent, data: { name: 'Multiple Resources', location: 'app/components/schedule/multipleresource.component' } },
    { path: 'resourcegrouping', component: ResourceGroupComponent, data: { name: 'Resource Grouping', location: 'app/components/schedule/resourcegrouping.component' } },
    { path: 'timescale', component: TimeScaleComponent, data: { name: 'Time Scale', location: 'app/components/schedule/timescale.component' } },
    { path: 'categorize', component: CategorizeComponent, data: { name: 'Categorize', location: 'app/components/schedule/categorize.component' } },
    { path: '', redirectTo : 'default' }
];

export const ScheduleRouting = RouterModule.forChild(scheduleAppRoutes);

@NgModule({
    imports: [ScheduleRouting],
    declarations: [DefaultComponent, EJ_SCHEDULE_COMPONENTS, HorizontalComponent, MultipleResourceComponent, ResourceGroupComponent, TimeScaleComponent, CategorizeComponent
    ]
})
export class ScheduleModule {
}
