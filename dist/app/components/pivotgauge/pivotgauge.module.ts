import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EJ_PIVOTGAUGE_COMPONENTS } from 'ej-angular2/src/ej/pivotgauge.component';

import { SharedModule } from './../../shared.module';
import { RelationalComponent } from './relational.component';
import { OlapComponent } from './olap.component';
import { ScaleComponent } from './scale.component';
import { RangeComponent } from './range.component';
import { PointerComponent } from './pointer.component';
import { LayoutComponent } from './layout.component';

export const pivotgaugeAppRoutes: Routes = [
    { path: 'relational', component: RelationalComponent, data: { name: 'Relational', location: 'app/components/pivotgauge/relational.component' } },
    { path: 'olap', component: OlapComponent, data: { name: 'OLAP', location: 'app/components/pivotgauge/olap.component' } },
    { path: 'scale', component: ScaleComponent, data: { name: 'Scale Options', location: 'app/components/pivotgauge/scale.component' } },
    { path: 'range', component: RangeComponent, data: { name: 'Range Options', location: 'app/components/pivotgauge/range.component' } },
    { path: 'pointer', component: PointerComponent, data: { name: 'Pointer Options', location: 'app/components/pivotgauge/pointer.component' } },
    { path: 'layout', component: LayoutComponent, data: { name: 'Layout Options', location: 'app/components/pivotgauge/layout.component' } },
    { path: '', redirectTo : 'relational' }
];

export const PivotGaugeRouting = RouterModule.forChild(pivotgaugeAppRoutes);

@NgModule({
    imports: [PivotGaugeRouting, FormsModule, SharedModule],
    declarations: [RelationalComponent, OlapComponent, ScaleComponent, RangeComponent, PointerComponent, LayoutComponent, EJ_PIVOTGAUGE_COMPONENTS]
})
export class PivotGaugeModule {
}
