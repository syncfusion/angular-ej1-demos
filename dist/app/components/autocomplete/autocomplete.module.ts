import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EJ_AUTOCOMPLETE_COMPONENTS } from 'ej-angular2/src/ej/autocomplete.component';
import { DefaultComponent } from './default.component';
import { DataBindingRemoteComponent } from './databindingremote.component';
import { DataBindingLocalComponent } from './databindinglocal.component';
import { GroupingComponent } from './grouping.component';
import { MultiColumnComponent } from './multicolumn.component';
import { MultipleValueComponent } from './multiplevalue.component';
import { RTLComponent } from './rtl.component';
import { TemplateComponent } from './template.component';
import { AutofillComponent } from './autofill.component';



export const autocompleteAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/autocomplete/default.component' } },
    { path: 'multiplevalue', component: MultipleValueComponent, data: { name: 'Multiple Value', location: 'app/components/autocomplete/multiplevalue.component' } },
    { path: 'grouping', component: GroupingComponent, data: { name: 'Grouping', location: 'app/components/autocomplete/grouping.component' } },
    { path: 'template', component: TemplateComponent, data: { name: 'Templates', location: 'app/components/autocomplete/template.component' } },
    { path: 'databindinglocal', component: DataBindingLocalComponent, data: { name: 'Data Binding-local', location: 'app/components/autocomplete/databindinglocal.component' } },
    { path: 'databindingremote', component: DataBindingRemoteComponent, data: { name: 'Data Binding-Remote', location: 'app/components/autocomplete/databindingremote.component' } },
    { path: 'autofill', component: AutofillComponent, data: { name: 'Auto Fill', location: 'app/components/autocomplete/autofill.component' } },
    { path: 'rtl', component: RTLComponent, data: { name: 'RTL', location: 'app/components/autocomplete/rtl.component' } },
    { path: 'multicolumn', component: MultiColumnComponent, data: { name: 'Multi column', location: 'app/components/autocomplete/multicolumn.component' }},
    { path: '', redirectTo : 'default' }

];

export const AutocompleteRouting = RouterModule.forChild(autocompleteAppRoutes);

@NgModule({
    imports: [AutocompleteRouting, FormsModule],
    declarations: [DefaultComponent, EJ_AUTOCOMPLETE_COMPONENTS, DataBindingRemoteComponent, DataBindingLocalComponent, MultipleValueComponent, GroupingComponent,
        TemplateComponent, AutofillComponent, RTLComponent, MultiColumnComponent
    ]
})
export class AutocompleteModule {
}
