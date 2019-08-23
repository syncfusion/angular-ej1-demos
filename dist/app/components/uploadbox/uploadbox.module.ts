import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EJ_UPLOADBOX_COMPONENTS } from 'ej-angular2/src/ej/uploadbox.component';
import { DefaultComponent } from './default.component';
import { FileRestrictionComponent } from './filerestriction.component';
import { DragAndDropComponent } from './draganddrop.component';
import { RTLComponent } from './rtl.component';


export const uploadboxAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/uploadbox/default.component' } },
    { path: 'filerestriction', component: FileRestrictionComponent, data: { name: 'FileRestriction', location: 'app/components/uploadbox/filerestriction.component' } },
    { path: 'draganddrop', component: DragAndDropComponent, data: { name: 'Drag And Drop', location: 'app/components/uploadbox/draganddrop.component' } },
    { path: 'rtl', component: RTLComponent, data: { name: 'RTL', location: 'app/components/uploadbox/rtl.component' } },
    { path: '', redirectTo: 'default'}
];

export const uploadboxRouting = RouterModule.forChild(uploadboxAppRoutes);

@NgModule({
    imports: [uploadboxRouting],
    declarations: [DefaultComponent, FileRestrictionComponent, DragAndDropComponent, RTLComponent, EJ_UPLOADBOX_COMPONENTS]
})
export class UploadBoxModule {
}
