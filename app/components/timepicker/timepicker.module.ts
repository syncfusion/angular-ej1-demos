import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { EJ_TIMEPICKER_COMPONENTS } from 'ej-angular2/src/ej/timepicker.component';

import { DefaultComponent } from './default.component';

import { RTLComponent } from './rtl.component';

import { DisableTimeComponent } from './disabletimeranges.component';

export const timepickerAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/timepicker/default.component' } },
    { path: 'disabletimeranges', component: DisableTimeComponent, data: { name: 'DisableTimeRanges', location: 'app/components/timepicker/disabletimeranges.component' } },
    { path: 'rtl', component: RTLComponent, data: { name: 'RTL', location: 'app/components/timepicker/rtl.component' } },
    { path: '', redirectTo : 'default' }
];

export const TimePickerRouting = RouterModule.forChild(timepickerAppRoutes);

@NgModule({
    imports: [FormsModule, TimePickerRouting],
    declarations: [DefaultComponent, EJ_TIMEPICKER_COMPONENTS,
    RTLComponent ,
    DisableTimeComponent
    ]
})
export class TimePickerModule {
}
