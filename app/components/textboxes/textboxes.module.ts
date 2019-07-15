import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared.module';
import { EJ_CURRENCYTEXTBOX_COMPONENTS } from 'ej-angular2/src/ej/currencytextbox.component';
import { EJ_PERCENTAGETEXTBOX_COMPONENTS } from 'ej-angular2/src/ej/percentagetextbox.component';
import { EJ_MASKEDIT_COMPONENTS } from 'ej-angular2/src/ej/maskedit.component';

import { DefaultComponent } from './default.component';
import { RTLComponent } from './rtl.component';

export const textboxesAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/textboxes/default.component' } },
    { path: 'rtl', component: RTLComponent, data: { name: 'RTL', location: 'app/components/textboxes/rtl.component' } },
    { path: '', redirectTo : 'default' }
];

export const TextboxesRouting = RouterModule.forChild(textboxesAppRoutes);

@NgModule({
    imports: [TextboxesRouting, SharedModule],
    declarations: [DefaultComponent, RTLComponent, EJ_CURRENCYTEXTBOX_COMPONENTS, EJ_PERCENTAGETEXTBOX_COMPONENTS, EJ_MASKEDIT_COMPONENTS
    ]
})
export class TextboxesModule {
}

