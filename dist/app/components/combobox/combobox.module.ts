import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../../shared.module';

import { DefaultComponent } from './default.component';
import { GroupingComponent } from './grouping.component';
import { IconsComponent } from './icons.component';
import { RemoteComponent } from './remote.component';
import { TemplateComponent } from './template.component';
import { SearchingComponent } from './filtering.component';
import { CascadingComponent } from './cascading.component';

export const comboboxAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/combobox/default.component' } },
    { path: 'grouping', component: GroupingComponent, data: { name: 'Grouping', location: 'app/components/combobox/grouping.component' } },
    { path: 'icons', component: IconsComponent, data: { name: 'Icon CSS', location: 'app/components/combobox/icons.component' } },
    { path: 'remote', component: RemoteComponent, data: { name: 'Remote Data', location: 'app/components/combobox/remote.component' } },
    { path: 'template', component: TemplateComponent, data: { name: 'Template', location: 'app/components/combobox/template.component' } },
    { path: 'filtering', component: SearchingComponent, data: { name: 'Filtering', location: 'app/components/combobox/filtering.component' } },
    { path: 'cascading', component: CascadingComponent, data: { name: 'Cascading', location: 'app/components/combobox/cascading.component' } },
    { path: '', redirectTo : 'default' }
];
export const ComboBoxRouting = RouterModule.forChild(comboboxAppRoutes);

@NgModule({
    imports: [ComboBoxRouting, SharedModule],
    declarations: [DefaultComponent, RemoteComponent, SearchingComponent, GroupingComponent,
                   CascadingComponent, IconsComponent,  TemplateComponent]
})
export class ComboBoxModule {
}
