import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EJ_SPREADSHEET_COMPONENTS } from 'ej-angular2/src/ej/spreadsheet.component';

import { DefaultComponent } from './default.component';
import { CellDataBindingComponent } from './celldatabinding.component';
import { ConditionalFormattingComponent } from './conditionalformatting.component';

export const spreadsheetAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/spreadsheet/default.component' } },
    { path: 'celldatabinding', component: CellDataBindingComponent, data: { name: 'CellDataBinding', location: 'app/components/spreadsheet/celldatabinding.component' } },
    {
        path: 'conditionalformatting',
        component: ConditionalFormattingComponent, data: { name: 'ConditionalFormatting', location: 'app/components/spreadsheet/conditionalformatting.component' }
    },
    { path: '', redirectTo : 'default' }
];

export const SpreadsheetRouting = RouterModule.forChild(spreadsheetAppRoutes);

@NgModule({
    imports: [SpreadsheetRouting],
    declarations: [DefaultComponent, EJ_SPREADSHEET_COMPONENTS, CellDataBindingComponent, ConditionalFormattingComponent,
    ]
})
export class SpreadsheetModule {
}
