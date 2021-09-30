import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EJ_TREEVIEW_COMPONENTS } from 'ej-angular2/src/ej/treeview.component';
import { DefaultComponent } from './default.component';
import { CheckboxComponent } from './checkbox.component';
import { IconsComponent } from './icons.component';
import { NodeeditingComponent } from './nodeediting.component';
import { DragdropComponent } from './dragdrop.component';
import { RemotedataComponent } from './remotedata.component';
import { MultiselectionComponent } from './multiselection.component';
import { LoadondemandComponent } from './loadondemand.component';
import { RTLComponent } from './rtl.component';


export const treeviewAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/treeview/default.component' } },
    { path: 'icons', component: IconsComponent, data: { name: 'Icons', location: 'app/components/treeview/icons.component' } },
    { path: 'checkbox', component: CheckboxComponent, data: { name: 'Checkboxes', location: 'app/components/treeview/checkbox.component' } },
    { path: 'nodeediting', component: NodeeditingComponent, data: { name: 'Node Editing-Cut-Paste', location: 'app/components/treeview/nodeediting.component' } },
    { path: 'dragdrop', component: DragdropComponent, data: { name: 'Drag & Drop', location: 'app/components/treeview/dragdrop.component' } },
    { path: 'remotedata', component: RemotedataComponent, data: { name: 'Remote Data', location: 'app/components/treeview/remotedata.component' } },
    { path: 'multiselection', component: MultiselectionComponent, data: { name: 'Multi Selection', location: 'app/components/treeview/multiselection.component' } },
    { path: 'loadondemand', component: LoadondemandComponent, data: { name: 'Load on Demand', location: 'app/components/treeview/loadondemand.component' } },
    { path: 'rtl', component: RTLComponent, data: { name: 'RTL', location: 'app/components/treeview/rtl.component' } },
    { path: '', redirectTo : 'default' }
];

export const TreeviewRouting = RouterModule.forChild(treeviewAppRoutes);

@NgModule({
    imports: [TreeviewRouting ],
    declarations: [DefaultComponent, CheckboxComponent, EJ_TREEVIEW_COMPONENTS, IconsComponent, NodeeditingComponent, DragdropComponent, RemotedataComponent,
     MultiselectionComponent, LoadondemandComponent, RTLComponent
     ]
})
export class TreeViewModule {
}
