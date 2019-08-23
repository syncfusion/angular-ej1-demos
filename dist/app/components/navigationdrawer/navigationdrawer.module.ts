import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EJ_NAVIGATIONDRAWER_COMPONENTS } from 'ej-angular2/src/ej/navigationdrawer.component';

import { DefaultComponent } from './default.component';

export const navigationdrawerAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/navigationdrawer/default.component' } },
    { path: '', redirectTo : 'default' }
];

export const NavigationDrawerRouting = RouterModule.forChild(navigationdrawerAppRoutes);

@NgModule({
    imports: [NavigationDrawerRouting],
    declarations: [DefaultComponent, EJ_NAVIGATIONDRAWER_COMPONENTS
    ]
})
export class NavigationDrawerModule {
}
