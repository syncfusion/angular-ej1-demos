import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../../shared.module';

import { DefaultComponent } from './default.component';

import { ScaleComponent } from './scale.component';

import { NeedleComponent } from './needle.component';

import { MarkerComponent } from './marker.component';

import { PointerComponent } from './pointer.component';

import { RangeComponent } from './range.component';

import { UIComponent } from './ui.component';

import { UnitComponent } from './unit.component';

import { ExportComponent } from './export.component';

import { CustomComponent } from './custom.component';

import { TooltipComponent } from './tooltip.component';

import { HalfComponent } from './half.component';

import { FramesComponent } from './frames.component';

import { ClockComponent } from './clock.component';

import { SpeedComponent } from './speed.component';

import { LegendComponent } from './legend.component';

export const circulargaugeAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/circulargauge/default.component' } },
    { path: 'scale', component: ScaleComponent, data: { name: 'Scale', location: 'app/components/circulargauge/scale.component' } },
    { path: 'needle', component: NeedleComponent, data: { name: 'Needle Pointer', location: 'app/components/circulargauge/needle.component' } },
    { path: 'marker', component: MarkerComponent, data: { name: 'Marker Pointer', location: 'app/components/circulargauge/marker.component' } },
    { path: 'pointer', component: PointerComponent, data: { name: 'Pointer Image', location: 'app/components/circulargauge/pointer.component' } },
    { path: 'range', component: RangeComponent, data: { name: 'Range', location: 'app/components/circulargauge/range.component' } },
    { path: 'ui', component: UIComponent, data: { name: 'User Interaction', location: 'app/components/circulargauge/ui.component' } },
    { path: 'unit', component: UnitComponent, data: { name: 'Unit Label', location: 'app/components/circulargauge/unit.component' } },
    { path: 'export', component: ExportComponent, data: { name: 'Export Image', location: 'app/components/circulargauge/export.component' } },
    { path: 'custom', component: CustomComponent, data: { name: 'Custom Label', location: 'app/components/circulargauge/custom.component' } },
    { path: 'tooltip', component: TooltipComponent, data: { name: 'Tooltip', location: 'app/components/circulargauge/tooltip.component' } },
    { path: 'half', component: HalfComponent, data: { name: 'Half Circle', location: 'app/components/circulargauge/half.component' } },
    { path: 'frames', component: FramesComponent, data: { name: 'Frame and Angle', location: 'app/components/circulargauge/frames.component' } },
    { path: 'legend', component: LegendComponent, data: { name: 'Legend', location: 'app/components/circulargauge/legend.component' } },
    { path: 'clock', component: ClockComponent, data: { name: 'Clock', location: 'app/components/circulargauge/clock.component' } },
    { path: 'speed', component: SpeedComponent, data: { name: 'Speedometer', location: 'app/components/circulargauge/speed.component' } },
    { path: '', redirectTo : 'default' }
];

export const CircularGaugeRouting = RouterModule.forChild(circulargaugeAppRoutes);

@NgModule({
    imports: [CircularGaugeRouting, SharedModule],
    declarations: [DefaultComponent, CustomComponent, HalfComponent, SpeedComponent, LegendComponent, FramesComponent, ClockComponent,
         PointerComponent, ScaleComponent, NeedleComponent, MarkerComponent, ExportComponent, TooltipComponent, RangeComponent, UIComponent, UnitComponent
    ]
})
export class CircularGaugeModule {
}
