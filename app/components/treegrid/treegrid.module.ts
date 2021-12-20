import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EJ_TREEGRID_COMPONENTS } from 'ej-angular2/src/ej/treegrid.component';
import { DefaultComponent } from './default.component';
import { EditingComponent } from './editing.component';
import { PagingComponent } from './paging.component';
import { ColumnReorderComponent } from './columnreorder.component';
import { CheckboxSelectionComponent } from './checkboxselection.component';


export const treegridAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/treegrid/default.component' } },
    { path: 'editing', component: EditingComponent, data: { name: 'Editing', location: 'app/components/treegrid/editing.component' } },
    { path: 'paging', component: PagingComponent, data: { name: 'Paging', location: 'app/components/treegrid/paging.component' } },
    { path: 'columnreorder', component: ColumnReorderComponent, data: { name: 'Column Reorder', location: 'app/components/treegrid/columnreorder.component' } },
    { path: 'checkboxselection', component: CheckboxSelectionComponent, data: { name: 'Checkbox Selection', location: 'app/components/treegrid/checkboxselection.component' } },
    { path: '', redirectTo : 'default' }
];

export const TreeGridRouting = RouterModule.forChild(treegridAppRoutes);

@NgModule({
    imports: [TreeGridRouting],
    declarations: [DefaultComponent, EJ_TREEGRID_COMPONENTS, EditingComponent, PagingComponent, ColumnReorderComponent, CheckboxSelectionComponent]
})
export class TreeGridModule {
}
