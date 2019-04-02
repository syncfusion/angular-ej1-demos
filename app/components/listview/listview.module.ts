import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EJ_LISTVIEW_COMPONENTS } from 'ej-angular2/src/ej/listview.component';

import { DefaultComponent } from './default.component';
import { CheckListComponent } from './checklist.component';
import { DatabindingComponent } from './databindinglocal.component';
import { GroupingComponent } from './grouping.component';

export const listviewAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/listview/default.component' } },
    { path: 'checklist', component: CheckListComponent, data: { name: 'Check List', location: 'app/components/listview/checklist.component' } },
    { path: 'databinding', component: DatabindingComponent, data: { name: 'DataBinding', location: 'app/components/listview/databindinglocal.component' } },
    { path: 'grouping', component: GroupingComponent, data: { name: 'Grouping', location: 'app/components/listview/grouping.component' } },
    { path: '', redirectTo : 'default' }
];

export const ListViewRouting = RouterModule.forChild(listviewAppRoutes);

@NgModule({
    imports: [ListViewRouting],
    declarations: [DefaultComponent, EJ_LISTVIEW_COMPONENTS, CheckListComponent, DatabindingComponent, GroupingComponent]
})
export class ListViewModule {
}
