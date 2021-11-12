import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { SharedModule } from './../../shared.module';
import { DefaultComponent } from './default.component';
import { ActionButtonsComponent } from './actionbuttons.component';
import { ModelDialogComponent } from './modeldialog.component';
import { MultipleDialogComponent } from './multipledialog.component';
import { RTLComponent } from './rtl.component';


export const dialogAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/dialog/default.component' } },
    { path: 'model-dialog', component: ModelDialogComponent, data: { name: 'Modal Dialog', location: 'app/components/dialog/modeldialog.component' } },
    { path: 'multipledialog', component: MultipleDialogComponent, data: { name: 'Multiple Dialog', location: 'app/components/dialog/multipledialog.component' } },
    { path: 'actionbuttons', component: ActionButtonsComponent, data: { name: 'Action Buttons', location: 'app/components/dialog/actionbuttons.component' } },
    { path: 'rtl', component: RTLComponent, data: { name: 'RTL', location: 'app/components/dialog/rtl.component' } },
    { path: '', redirectTo : 'default' }
];

export const DialogRouting = RouterModule.forChild(dialogAppRoutes);

@NgModule({
    imports: [DialogRouting, SharedModule],
    declarations: [DefaultComponent, ActionButtonsComponent, ModelDialogComponent, MultipleDialogComponent, RTLComponent
    ]
})
export class DialogModule {
}
