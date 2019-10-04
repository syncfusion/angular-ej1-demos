import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EJ_SPARKLINE_COMPONENTS } from 'ej-angular2/src/ej/sparkline.component';

import { DefaultComponent } from './default.component';

export const sparklineAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/sparkline/default.component' } },
    { path: '', redirectTo : 'default' }
];

export const SparklineRouting = RouterModule.forChild(sparklineAppRoutes);

@NgModule({
    imports: [SparklineRouting],
    declarations: [DefaultComponent, EJ_SPARKLINE_COMPONENTS
    ]
})
export class SparklineModule {
}
