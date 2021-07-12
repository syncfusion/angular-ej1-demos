import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SharedModule } from './../../shared.module';

import { EJ_LINEARGAUGE_COMPONENTS } from 'ej-angular2/src/ej/lineargauge.component';

import { DefaultComponent } from './default.component';

import { ScaleComponent } from './scale.component';

import { PointerComponent } from './pointer.component';

import { RangeComponent } from './range.component';

import { ThermometerComponent } from './thermometer.component';

import { UIComponent } from './ui.component';

import { UnitComponent } from './unit.component';

import { ExportComponent } from './export.component';

import { TooltipComponent } from './tooltip.component';

import { CustomComponent } from './custom.component';

import { IndicatorComponent } from './indicator.component';


export const lineargaugeAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/lineargauge/default.component' } },
    { path: 'scale', component: ScaleComponent, data: { name: 'Scale', location: 'app/components/lineargauge/scale.component' } },
    { path: 'pointer', component: PointerComponent, data: { name: 'Pointer', location: 'app/components/lineargauge/pointer.component' } },
    { path: 'range', component: RangeComponent, data: { name: 'Range', location: 'app/components/lineargauge/range.component' } },
    { path: 'thermometer', component: ThermometerComponent, data: { name: 'Thermometer', location: 'app/components/lineargauge/thermometer.component' } },
    { path: 'ui', component: UIComponent, data: { name: 'User Interaction', location: 'app/components/lineargauge/ui.component' } },
    { path: 'unit', component: UnitComponent, data: { name: 'Unit Label', location: 'app/components/lineargauge/unit.component' } },
    { path: 'export', component: ExportComponent, data: { name: 'Export', location: 'app/components/lineargauge/export.component' } },
    { path: 'tooltip', component: TooltipComponent, data: { name: 'Tooltip', location: 'app/components/lineargauge/tooltip.component' } },
    { path: 'custom', component: CustomComponent, data: { name: 'Custom Labels', location: 'app/components/lineargauge/custom.component' } },
    { path: 'indicator', component: IndicatorComponent, data: { name: 'Indicators', location: 'app/components/lineargauge/indicator.component' } },
    { path: '', redirectTo : 'default' }
];

export const LinearGaugeRouting = RouterModule.forChild(lineargaugeAppRoutes);

@NgModule({
    imports: [LinearGaugeRouting, SharedModule],
    declarations: [DefaultComponent, EJ_LINEARGAUGE_COMPONENTS, TooltipComponent, IndicatorComponent, CustomComponent, UIComponent, ExportComponent, UnitComponent, ScaleComponent,
    ThermometerComponent, PointerComponent, RangeComponent
    ]
})
export class LinearGaugeModule {
}
