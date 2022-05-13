import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../../shared.module';
import { DefaultComponent } from './default.component';
import { CloseButtonComponent } from './closebutton.component';
import { ImageComponent } from './image.component';
import { HeaderOrientationComponent } from './headerorientation.component';
import { RTLComponent } from './rtl.component';
import { ScrollTabComponent } from './scrolltab.component';

export const tabAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/tab/default.component' } },
    { path: 'closebutton', component: CloseButtonComponent, data: { name: 'CloseButton', location: 'app/components/tab/closebutton.component' } },
    { path: 'image', component: ImageComponent, data: { name: 'Image', location: 'app/components/tab/image.component' } },
    { path: 'headerorientation', component: HeaderOrientationComponent, data: { name: 'Header Orientation', location: 'app/components/tab/headerorientation.component' } },
    { path: 'rtl', component: RTLComponent, data: { name: 'RTL', location: 'app/components/tab/rtl.component' } },
    { path: 'scrolltab', component: ScrollTabComponent, data: { name: 'Scrollabe Tab', location: 'app/components/tab/scrolltab.component' } },
    { path: '', redirectTo : 'default' }
];

export const TabRouting = RouterModule.forChild(tabAppRoutes);

@NgModule({
    imports: [SharedModule, TabRouting],
    declarations: [DefaultComponent, CloseButtonComponent, ImageComponent, HeaderOrientationComponent, RTLComponent, ScrollTabComponent]
})
export class TabModule {
}
