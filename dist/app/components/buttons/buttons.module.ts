import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../../shared.module';

import { EJ_TOGGLEBUTTON_COMPONENTS } from 'ej-angular2/src/ej/togglebutton.component';

import { EJ_SPLITBUTTON_COMPONENTS } from 'ej-angular2/src/ej/splitbutton.component';

import { DefaultComponent } from './default.component';

import { ToggleButtonComponent } from './togglebutton.component';


export const buttonsAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/buttons/default.component' } },
    { path: 'togglebutton', component: ToggleButtonComponent, data: { name: 'Togglebutton', location: 'app/components/buttons/togglebutton.component' } },
    { path: '', redirectTo: 'default' }
];

export const ButtonsRouting = RouterModule.forChild(buttonsAppRoutes);

@NgModule({
    imports: [ButtonsRouting, SharedModule],

    declarations: [DefaultComponent, EJ_TOGGLEBUTTON_COMPONENTS, ToggleButtonComponent, EJ_SPLITBUTTON_COMPONENTS]
})
export class ButtonsModule {
}
