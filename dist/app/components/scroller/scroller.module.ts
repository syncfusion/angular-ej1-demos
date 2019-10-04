import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EJ_SCROLLER_COMPONENTS } from 'ej-angular2/src/ej/scroller.component';

import { DefaultComponent } from './default.component';

export const scrollerAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/scroller/default.component' } },
    { path: '', redirectTo : 'default' }
];

export const ScrollerRouting = RouterModule.forChild(scrollerAppRoutes);

@NgModule({
    imports: [ScrollerRouting],
    declarations: [DefaultComponent, EJ_SCROLLER_COMPONENTS
    ]
})
export class ScrollerModule {
}
