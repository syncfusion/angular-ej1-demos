import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SharedModule } from './../../shared.module';

import { DefaultComponent } from './default.component';
import { OrientationComponent } from './orientation.component';
import { LocalDataComponent } from './localdata.component';
import { RTLComponent } from './rtl.component';

export const toolbarAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/toolbar/default.component' } },
    { path: 'orientation', component: OrientationComponent, data: { name: 'Orientation', location: 'app/components/toolbar/orientation.component' } },
    { path: 'localdata', component: LocalDataComponent, data: { name: 'Local Data', location: 'app/components/toolbar/localdata.component' } },
    { path: 'rtl', component: RTLComponent, data: { name: 'RTL', location: 'app/components/toolbar/rtl.component' } },
    { path: '', redirectTo : 'default' }
];

export const ToolbarRouting = RouterModule.forChild(toolbarAppRoutes);

@NgModule({
    imports: [ToolbarRouting, SharedModule],
    declarations: [DefaultComponent, OrientationComponent, LocalDataComponent, RTLComponent]
})
export class ToolbarModule {
}
