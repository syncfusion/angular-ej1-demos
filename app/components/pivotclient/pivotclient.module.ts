import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EJ_PIVOTCLIENT_COMPONENTS } from 'ej-angular2/src/ej/pivotclient.component';

import { SharedModule } from './../../shared.module';
import { RelationalComponent } from './relational.component';
import { ExportingComponent } from './exporting.component';
import { AdvancedFilteringComponent } from './advancedFiltering.component';
import { OlapComponent } from './olap.component';
import { RTLComponent } from './rtl.component';

export const pivotclientAppRoutes: Routes = [
    { path: 'relational', component: RelationalComponent, data: { name: 'Relational', location: 'app/components/pivotclient/relational.component' } },
    { path: 'olap', component: OlapComponent, data: { name: 'OLAP', location: 'app/components/pivotclient/olap.component' } },
    { path: 'advancedFiltering', component: AdvancedFilteringComponent, data: { name: 'Advanced Filtering', location: 'app/components/pivotclient/advancedFiltering.component' } },
    { path: 'exporting', component: ExportingComponent, data: { name: 'Exporting', location: 'app/components/pivotclient/exporting.component' } },
    { path: 'rtl', component: RTLComponent, data: { name: 'RTL', location: 'app/components/pivotclient/rtl.component' } },
    { path: '', redirectTo: 'relational' }
];

export const PivotClientRouting = RouterModule.forChild(pivotclientAppRoutes);

@NgModule({
    imports: [PivotClientRouting, FormsModule, SharedModule],
    declarations: [RelationalComponent, OlapComponent, ExportingComponent, AdvancedFilteringComponent, RTLComponent, EJ_PIVOTCLIENT_COMPONENTS]
})
export class PivotClientModule {
}
