import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../../shared.module';

import { EJ_SPELLCHECK_COMPONENTS } from 'ej-angular2/src/ej/spellcheck.component';

import { SpellCheckComponent } from './spellcheck.component';
import { ContextMenuComponent } from './contextmenu.component';
import { MultipleTargetsComponent } from './multipletarget.component';
import { ApiComponent } from './api.component';

export const spellcheckAppRoutes: Routes = [
    { path: 'default', component: SpellCheckComponent, data: { name: 'Default', location: 'app/components/spellcheck/spellcheck.component' } },
    { path: 'contextmenu', component: ContextMenuComponent, data: { name: 'Context Menu', location: 'app/components/spellcheck/contextmenu.component' } },
    { path: 'api', component: ApiComponent, data: { name: 'API', location: 'app/components/spellcheck/api.component' } },
    { path: 'multipletarget', component: MultipleTargetsComponent, data: { name: 'Multiple Targets', location: 'app/components/spellcheck/multipletarget.component' } },
    { path: '', redirectTo : 'default' }
];

export const spellcheckRouting = RouterModule.forChild(spellcheckAppRoutes);

@NgModule({
    imports: [spellcheckRouting, SharedModule],
    declarations: [SpellCheckComponent, EJ_SPELLCHECK_COMPONENTS, ContextMenuComponent, MultipleTargetsComponent, ApiComponent]
})
export class SpellCheckModule {
}

