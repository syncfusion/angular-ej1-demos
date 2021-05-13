import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared.module';

import { DefaultComponent } from './default.component';
import { TemplateComponent } from './template.component';

export const waitingpopupAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/waitingpopup/default.component' } },
    { path: 'template', component: TemplateComponent, data: { name: 'Template', location: 'app/components/waitingpopup/template.component' } },
    { path: '', redirectTo : 'default' }
];

export const WaitingPopupRouting = RouterModule.forChild(waitingpopupAppRoutes);

@NgModule({
    imports: [WaitingPopupRouting, FormsModule, SharedModule],
    declarations: [DefaultComponent, TemplateComponent
    ]
})
export class WaitingPopupModule {
}
