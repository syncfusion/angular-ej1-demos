import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SharedModule } from './../../shared.module';

import { DefaultComponent } from './default.component';
import { CascadeComponent } from './cascade.component';
import { CheckboxComponent } from './checkbox.component';
import { DataBindingLocalComponent } from './databindinglocal.component';
import { DataBindingRemoteComponent } from './databindingremote.component';
import { DragAndDropComponent } from './draganddrop.component';
import { IconsComponent } from './icons.component';
import { GroupingComponent } from './grouping.component';
import { MultiSelectComponent } from './multiselect.component';
import { RTLComponent } from './rtl.component';
import { TemplateComponent } from './template.component';
import { TooltipComponent } from './tooltip.component';
import { VirtualScrollingComponent } from './virtualscrolling.component';



export const listboxAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/listbox/default.component' } },
    { path: 'icons', component: IconsComponent, data: { name: 'Icons', location: 'app/components/listbox/icons.component' } },
    { path: 'checkbox', component: CheckboxComponent, data: { name: 'Checkbox', location: 'app/components/listbox/checkbox.component' } },
    { path: 'cascade', component: CascadeComponent, data: { name: 'Cascading', location: 'app/components/listbox/cascade.component' } },
    { path: 'databindinglocal', component: DataBindingLocalComponent, data: { name: 'Data Binding Local', location: 'app/components/listbox/databindinglocal.component' } },
    { path: 'databindingremote', component: DataBindingRemoteComponent, data: { name: 'Data Binding Remote', location: 'app/components/listbox/databindingremote.component' } },
    { path: 'draganddrop', component: DragAndDropComponent, data: { name: 'Drag and Drop', location: 'app/components/listbox/draganddrop.component' } },
    { path: 'grouping', component: GroupingComponent, data: { name: 'Grouping', location: 'app/components/listbox/grouping.component' } },
    { path: 'multiselect', component: MultiSelectComponent, data: { name: 'Multi Select', location: 'app/components/listbox/multiselect.component' } },
    { path: 'rtl', component: RTLComponent, data: { name: 'RTL', location: 'app/components/listbox/rtl.component' } },
    { path: 'template', component: TemplateComponent, data: { name: 'Templates', location: 'app/components/listbox/template.component' } },
    { path: 'tooltip', component: TooltipComponent, data: { name: 'Tooltip', location: 'app/components/listbox/tooltip.component' } },
    { path: 'virtualscrolling', component: VirtualScrollingComponent, data: { name: 'Virtual Scrolling', location: 'app/components/listbox/virtualscrolling.component' } },
    { path: '', redirectTo : 'default' }
];

export const ListBoxRouting = RouterModule.forChild(listboxAppRoutes);

@NgModule({
    imports: [ListBoxRouting, SharedModule],
    declarations: [DefaultComponent, IconsComponent, CheckboxComponent, CascadeComponent, DataBindingLocalComponent,
        DataBindingRemoteComponent, DragAndDropComponent, GroupingComponent, MultiSelectComponent, RTLComponent, TemplateComponent, TooltipComponent,
        VirtualScrollingComponent
    ]
})
export class ListBoxModule {
}
