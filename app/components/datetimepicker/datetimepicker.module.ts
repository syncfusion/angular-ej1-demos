import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { EJ_DATETIMEPICKER_COMPONENTS } from 'ej-angular2/src/ej/datetimepicker.component';

import { DefaultComponent } from './default.component';

import { DrilldownComponent } from './drilldown.component';

import { RTLComponent } from './rtl.component';

export const datetimepickerAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/datetimepicker/default.component' } },
    { path: 'drilldown', component: DrilldownComponent, data: { name: 'Drilldown', location: 'app/components/datetimepicker/drilldown.component' } },
    { path: 'rtl', component: RTLComponent, data: { name: 'RTL', location: 'app/components/datetimepicker/rtl.component' } },
    { path: '', redirectTo : 'default' }
];

export const DateTimePickerRouting = RouterModule.forChild(datetimepickerAppRoutes);

@NgModule({
    imports: [DateTimePickerRouting, FormsModule],
    declarations: [DefaultComponent, EJ_DATETIMEPICKER_COMPONENTS,
    DrilldownComponent ,
    RTLComponent ,
    ]
})
export class DateTimePickerModule {
}
