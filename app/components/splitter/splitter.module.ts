import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EJ_SPLITTER_COMPONENTS } from 'ej-angular2/src/ej/splitter.component';
import { DefaultComponent } from './default.component';
import { NestedSplitterComponent } from './nestedsplitter.component';

export const splitterAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/splitter/default.component' } },
    { path: 'nestedsplitter', component: NestedSplitterComponent, data: { name: 'Nested Splitter', location: 'app/components/splitter/nestedsplitter.component' } },
    { path: '', redirectTo : 'default' }
];

export const SplitterRouting = RouterModule.forChild(splitterAppRoutes);

@NgModule({
    imports: [SplitterRouting],
    declarations: [DefaultComponent, EJ_SPLITTER_COMPONENTS, NestedSplitterComponent
    ]
})
export class SplitterModule {
}
