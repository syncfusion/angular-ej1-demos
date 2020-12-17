import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EJ_KANBAN_COMPONENTS } from 'ej-angular2/src/ej/kanban.component';

import { DefaultComponent } from './default.component';
import { SwimlaneComponent } from './swimlane.component';
import { CustomizationComponent } from './customization.component';
import { ConstraintsComponent } from './constraints.component';
import { ContextMenuComponent } from './contextmenu.component';
import { DialogEditingComponent } from './dialogEditing.component';
import { FilteringComponent } from './filtering.component';

export const kanbanAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/kanban/default.component' } },
    { path: 'swimlane', component: SwimlaneComponent, data: { name: 'Swimlane', location: 'app/components/kanban/swimlane.component' } },
    { path: 'customization', component: CustomizationComponent, data: { name: 'Customization', location: 'app/components/kanban/customization.component' } },
    { path: 'constraints', component: ConstraintsComponent, data: { name: 'Constraints', location: 'app/components/kanban/constraints.component' } },
    { path: 'contextMenu', component: ContextMenuComponent, data: { name: 'ContextMenu', location: 'app/components/kanban/contextMenu.component' } },
    { path: 'dialogEditing', component: DialogEditingComponent, data: { name: 'DialogEditing', location: 'app/components/kanban/dialogEditing.component' } },
    { path: 'filtering', component: FilteringComponent, data: { name: 'Filtering', location: 'app/components/kanban/filtering.component' } },
    { path: '', redirectTo : 'default' }
];

export const KanbanRouting = RouterModule.forChild(kanbanAppRoutes);

@NgModule({
    imports: [KanbanRouting],
    declarations: [DefaultComponent, EJ_KANBAN_COMPONENTS, ContextMenuComponent, ConstraintsComponent, CustomizationComponent, DialogEditingComponent, FilteringComponent, SwimlaneComponent
    ]
})
export class KanbanModule {
}
