import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../../shared.module';

import { EJ_DIGITALGAUGE_COMPONENTS } from 'ej-angular2/src/ej/digitalgauge.component';

import { DefaultComponent } from './default.component';

import { ClockComponent } from './clock.component';

import { ExportComponent } from './export.component';

export const digitalgaugeAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/digitalgauge/default.component' } },
    { path: 'clock', component: ClockComponent, data: { name: 'Digital Clock', location: 'app/components/digitalgauge/clock.component' } },
    { path: 'export', component: ExportComponent, data: { name: 'Export', location: 'app/components/digitalgauge/export.component' } },
    { path: '', redirectTo : 'default' }
];

export const DigitalGaugeRouting = RouterModule.forChild(digitalgaugeAppRoutes);

@NgModule({
    imports: [DigitalGaugeRouting, SharedModule],
    declarations: [DefaultComponent, EJ_DIGITALGAUGE_COMPONENTS, ClockComponent, ExportComponent
    ]
})
export class DigitalGaugeModule {
}
