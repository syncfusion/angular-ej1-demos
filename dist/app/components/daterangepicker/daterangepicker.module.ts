import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { EJ_DATERANGEPICKER_COMPONENTS } from 'ej-angular2/src/ej/daterangepicker.component';

import { DateTimeRangeComponent } from './datetimerange.component';
import { DefaultComponent } from './default.component';
import { PresetsComponent } from './presetranges.component';



export const daterangepickerAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/daterangepicker/default.component' } },
    { path: 'presetranges', component: PresetsComponent, data: { name: 'Preset Ranges', location: 'app/components/daterangepicker/presetranges.component' } },
    { path: 'datetimerange', component: DateTimeRangeComponent, data: { name: 'DateTimeRange', location: 'app/components/daterangepicker/datetimerange.component' } },
    { path: '', redirectTo : 'default' }
];

export const DateRangePickerRouting = RouterModule.forChild(daterangepickerAppRoutes);

@NgModule({
    imports: [DateRangePickerRouting, FormsModule],
    declarations: [DefaultComponent, EJ_DATERANGEPICKER_COMPONENTS, PresetsComponent, DateTimeRangeComponent
    ]
})
export class DateRangePickerModule {
}
