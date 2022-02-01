import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SharedModule } from './../../shared.module';

import { DefaultComponent } from './default.component';
import { FormComponent } from './form.component';

export const tooltipAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/tooltip/default.component' } },
    { path: 'form', component: FormComponent, data: { name: 'Forms', location: 'app/components/tooltip/form.component' } },
    { path: '', redirectTo : 'default' }
];

export const TooltipRouting = RouterModule.forChild(tooltipAppRoutes);

@NgModule({
    imports: [TooltipRouting, SharedModule],
    declarations: [DefaultComponent, FormComponent]
})
export class TooltipModule {
}
