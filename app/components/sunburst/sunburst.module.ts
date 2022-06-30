import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../../shared.module';

import { EJ_SUNBURSTCHART_COMPONENTS } from 'ej-angular2/src/ej/sunburstchart.component';

import { DefaultComponent } from './default.component';

import { AnimationComponent } from './animation.component';

import { SelectionComponent } from './selection.component';

import { ZoomingComponent } from './zooming.component';

export const sunburstAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/sunburst/default.component' } },
    { path: 'animation', component: AnimationComponent, data: { name: 'Animation', location: 'app/components/sunburst/animation.component' } },
    { path: 'selection', component: SelectionComponent, data: { name: 'Selection', location: 'app/components/sunburst/selection.component' } },
    { path: 'zooming', component: ZoomingComponent, data: { name: 'Zooming', location: 'app/components/sunburst/zooming.component' } },
    { path: '', redirectTo : 'default' }
];

export const SunburstRouting = RouterModule.forChild(sunburstAppRoutes);

@NgModule({
    imports: [SunburstRouting, SharedModule],
    declarations: [DefaultComponent, EJ_SUNBURSTCHART_COMPONENTS,
        AnimationComponent,
        SelectionComponent,
        ZoomingComponent
    ]
})
export class SunburstModule {
}
