import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../../shared.module';

import { DefaultComponent } from './default.component';
import { CheckboxComponent } from './checkbox.component';
import { FilteringComponent } from './filtering.component';
import { GroupingComponent } from './grouping.component';
import { MultiSelectComponent } from './multiselect.component';
import { VirtualScrollingComponent } from './virtualscrolling.component';
import { IconsComponent } from './icons.component';
import { TemplateComponent } from './template.component';
import { LocalDataComponent } from './localdata.component';
import { RTLComponent } from './rtl.component';

export const dropdownlistAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/dropdownlist/default.component' } },
    { path: 'checkbox', component: CheckboxComponent, data: { name: 'Checkbox', location: 'app/components/dropdownlist/checkbox.component' } },
    { path: 'filtering', component: FilteringComponent, data: { name: 'Filtering', location: 'app/components/dropdownlist/filtering.component' } },
    { path: 'grouping', component: GroupingComponent, data: { name: 'Grouping', location: 'app/components/dropdownlist/grouping.component' } },
    { path: 'multiselect', component: MultiSelectComponent, data: { name: 'MultiSelect', location: 'app/components/dropdownlist/multiselect.component' } },
    { path: 'virtualscrolling', component: VirtualScrollingComponent, data: { name: 'VirtualScrolling', location: 'app/components/dropdownlist/virtualscrolling.component' } },
    { path: 'icons', component: IconsComponent, data: { name: 'Icons', location: 'app/components/dropdownlist/icons.component' } },
    { path: 'template', component: TemplateComponent, data: { name: 'Template', location: 'app/components/dropdownlist/template.component' } },
    { path: 'localdata', component: LocalDataComponent, data: { name: 'LocalData', location: 'app/components/dropdownlist/localdata.component' } },
    { path: 'rtl', component: RTLComponent, data: { name: 'RTL', location: 'app/components/dropdownlist/rtl.component' } },
    { path: '', redirectTo : 'default' }
];
export const DropDownListRouting = RouterModule.forChild(dropdownlistAppRoutes);

@NgModule({
    imports: [DropDownListRouting, SharedModule],
    declarations: [DefaultComponent, CheckboxComponent, FilteringComponent, LocalDataComponent, GroupingComponent, MultiSelectComponent,
                   VirtualScrollingComponent, IconsComponent, RTLComponent, TemplateComponent]
})
export class DropDownListModule {
}
