import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { EJ_DATEPICKER_COMPONENTS } from 'ej-angular2/src/ej/datepicker.component';

import { DefaultComponent } from './default.component';

import { DisplayInlineComponent } from './display-inline.component';

import { DateRangeComponent } from './date-range.component';

import { BlackoutDatesComponent } from './blackout-dates.component';

import { SpecialDatesComponent } from './special-dates.component';

import { RTLComponent } from './rtl.component';

export const datepickerAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/datepicker/default.component' } },
    { path: 'display-inline', component: DisplayInlineComponent, data: { name: 'DisplayInline', location: 'app/components/datepicker/display-inline.component' } },
    { path: 'date-range', component: DateRangeComponent, data: { name: 'DateRange', location: 'app/components/datepicker/date-Range.component' } },
    { path: 'blackout-dates', component: BlackoutDatesComponent, data: { name: 'BlackoutDates', location: 'app/components/datepicker/blackout-dates.component' } },
    { path: 'special-dates', component: SpecialDatesComponent, data: { name: 'SpecialDates', location: 'app/components/datepicker/special-dates.component' } },
    { path: 'rtl', component: RTLComponent, data: { name: 'RTL', location: 'app/components/datepicker/rtl.component' } },
    { path: '', redirectTo : 'default' }
];

export const DatePickerRouting = RouterModule.forChild(datepickerAppRoutes);

@NgModule({
    imports: [DatePickerRouting, FormsModule],
    declarations: [DefaultComponent, EJ_DATEPICKER_COMPONENTS,
    RTLComponent ,
    BlackoutDatesComponent ,
    SpecialDatesComponent ,
    DisplayInlineComponent ,
    DateRangeComponent
    ]
})
export class DatePickerModule {
}
