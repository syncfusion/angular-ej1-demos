import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EJ_RIBBON_COMPONENTS } from 'ej-angular2/src/ej/ribbon.component';

import { DefaultComponent } from './default.component';
import { CustomTooltipComponent } from './customtooltip.component';
import { QuickAccessToolbarComponent } from './quickaccesstoolbar.component';

export const ribbonAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/ribbon/default.component' } },
    { path: 'customtooltip', component: CustomTooltipComponent, data: { name: 'CustomTooltip', location: 'app/components/ribbon/customtooltip.component' } },
    { path: 'quickaccesstoolbar', component: QuickAccessToolbarComponent, data: { name: 'QuickAccessToolbar', location: 'app/components/ribbon/quickaccesstoolbar.component' } },
    { path: '', redirectTo : 'default' }
];

export const RibbonRouting = RouterModule.forChild(ribbonAppRoutes);

@NgModule({
    imports: [RibbonRouting],
    declarations: [DefaultComponent, EJ_RIBBON_COMPONENTS, CustomTooltipComponent, QuickAccessToolbarComponent
    ]
})
export class RibbonModule {
}
