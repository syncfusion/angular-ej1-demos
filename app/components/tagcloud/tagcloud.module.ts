import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EJ_TAGCLOUD_COMPONENTS } from 'ej-angular2/src/ej/tagcloud.component';

import { DefaultComponent } from './default.component';
import { RTLComponent } from './rtl.component';

export const tagcloudAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/tagcloud/default.component' } },
    { path: 'rtl', component: RTLComponent, data: { name: 'RTL', location: 'app/components/tagcloud/rtl.component' } },
    { path: '', redirectTo : 'default' }
];

export const TagCloudRouting = RouterModule.forChild(tagcloudAppRoutes);

@NgModule({
    imports: [TagCloudRouting],
    declarations: [DefaultComponent, RTLComponent, EJ_TAGCLOUD_COMPONENTS
    ]
})
export class TagCloudModule {
}
