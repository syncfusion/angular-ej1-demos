import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SharedModule } from './../../shared.module';

import { DefaultComponent } from './default.component';
import { AllToolsComponent } from './alltools.component';
import { LocalizationComponent } from './localization.component';
import { RTLComponent } from './rtl.component';
import { FileImageBrowserComponent } from './fileimagebrowser.component';

export const rteAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/rte/default.component' } },
    { path: 'alltools', component: AllToolsComponent, data: { name: 'AllTools', location: 'app/components/rte/alltools.component' } },
    { path: 'fileimagebrowser', component: FileImageBrowserComponent, data: { name: 'File And Image Browser', location: 'app/components/rte/fileimagebrowser.component' } },
    { path: 'localization', component: LocalizationComponent, data: { name: 'Localization', location: 'app/components/rte/localization.component' } },
    { path: 'rtl', component: RTLComponent, data: { name: 'RTL', location: 'app/components/rte/rtl.component' } },
    { path: '', redirectTo : 'default' }
];

export const RTERouting = RouterModule.forChild(rteAppRoutes);

@NgModule({
    imports: [RTERouting, SharedModule],
    declarations: [DefaultComponent, AllToolsComponent, LocalizationComponent, RTLComponent, FileImageBrowserComponent]
})
export class RTEModule {
}
