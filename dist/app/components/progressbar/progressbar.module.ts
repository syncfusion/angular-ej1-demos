import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EJ_PROGRESSBAR_COMPONENTS } from 'ej-angular2/src/ej/progressbar.component';

import { DefaultComponent } from './default.component';
import { RTLComponent } from './rtl.component';

export const progressbarAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/progressbar/default.component' } },
    { path: 'rtl', component: RTLComponent, data: { name: 'RTL', location: 'app/components/progressbar/rtl.component' } },
    { path: '', redirectTo : 'default' }
];

export const ProgressbarRouting = RouterModule.forChild(progressbarAppRoutes);

@NgModule({
    imports: [ProgressbarRouting],
    declarations: [DefaultComponent, RTLComponent, EJ_PROGRESSBAR_COMPONENTS
    ]
})
export class ProgressbarModule {
}
