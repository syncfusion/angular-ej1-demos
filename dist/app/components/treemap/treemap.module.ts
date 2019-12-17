import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../../shared.module';
import { EJ_TREEMAP_COMPONENTS } from 'ej-angular2/src/ej/treemap.component';

import { DefaultComponent } from './default.component';

import { DrillDownComponent } from './drilldown.component';

import { FlatComponent } from './flat.component';

import { CustomizationComponent } from './customization.component';

export const treemapAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/treemap/default.component' } },
    { path: 'drilldown', component: DrillDownComponent, data: { name: 'Drilldown', location: 'app/components/treemap/drilldown.component' } },
    { path: 'flat', component: FlatComponent, data: { name: 'Flat Collection', location: 'app/components/treemap/flat.component' } },
    { path: 'customization', component: CustomizationComponent, data: { name: 'Customization', location: 'app/components/treemap/customization.component' } },
    { path: '', redirectTo : 'default' }
];

export const TreemapRouting = RouterModule.forChild(treemapAppRoutes);

@NgModule({
    imports: [TreemapRouting, SharedModule],
    declarations: [DefaultComponent, EJ_TREEMAP_COMPONENTS, FlatComponent, CustomizationComponent,
        DrillDownComponent
    ]
})
export class TreeMapModule {
}
