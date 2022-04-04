import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EJ_RADIALSLIDER_COMPONENTS } from 'ej-angular2/src/ej/radialslider.component';

import { DefaultComponent } from './default.component';

export const radialsliderAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/radialslider/default.component' } },
    { path: '', redirectTo : 'default' }
];

export const RadialSliderRouting = RouterModule.forChild(radialsliderAppRoutes);

@NgModule({
    imports: [RadialSliderRouting],
    declarations: [DefaultComponent, EJ_RADIALSLIDER_COMPONENTS
    ]
})
export class RadialSliderModule {
}
