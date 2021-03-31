import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EJ_RADIALMENU_COMPONENTS } from 'ej-angular2/src/ej/radialmenu.component';
import { SharedModule } from './../../shared.module';

import { DefaultComponent } from './default.component';
import { SliderMenuComponent } from './slidermenu.component';

export const radialmenuAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/radialmenu/default.component' } },
    { path: 'slidermenu', component: SliderMenuComponent , data: { name: 'Radial Slider - Menu', location: 'app/components/radialmenu/slidermenu.component' } },
    { path: '', redirectTo : 'default' }
];

export const RadialMenuRouting = RouterModule.forChild(radialmenuAppRoutes);

@NgModule({
    imports: [RadialMenuRouting, SharedModule],
    declarations: [DefaultComponent, EJ_RADIALMENU_COMPONENTS, SliderMenuComponent
    ]
})
export class RadialMenuModule {
}
