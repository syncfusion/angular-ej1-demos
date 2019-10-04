import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EJ_PIVOTGRID_COMPONENTS } from 'ej-angular2/src/ej/pivotgrid.component';

import { SharedModule } from './../../shared.module';
import { RelationalComponent } from './relational.component';
import { OlapComponent } from './olap.component';
import { SummaryTypeComponent } from './summaryType.component';
import { NumberFormatComponent } from './numberFormat.component';
import { CellEdiitngComponent } from './cellEditing.component';
import { KPIComponent } from './kpi.component';
import { NamedSetsComponent } from './namedSets.component';
import { UIComponent } from './ui.component';
import { HyperLinkComponent } from './hyperlink.component';
import { ConditionalFormattingComponent } from './conditionalFormatting.component';
import { ExcelLikeComponent } from './excellayout.component';
import { ExportingComponent } from './exporting.component';
import { SummaryCustomizatioComponent } from './summaryCustomization.component';

export const pivotgridAppRoutes: Routes = [
    { path: 'relational', component: RelationalComponent, data: { name: 'Relational', location: 'app/components/pivotgrid/relational.component' } },
    { path: 'summaryType', component: SummaryTypeComponent, data: { name: 'Summary Types', location: 'app/components/pivotgrid/summaryType.component' } },
    { path: 'numberFormat', component: NumberFormatComponent, data: { name: 'Number Format', location: 'app/components/pivotgrid/numberFormat.component' } },
    { path: 'cellEditing', component: CellEdiitngComponent, data: { name: 'Cell Editing', location: 'app/components/pivotgrid/cellEditing.component' } },
    { path: 'olap', component: OlapComponent, data: { name: 'OLAP', location: 'app/components/pivotgrid/olap.component' } },
    { path: 'kpi', component: KPIComponent, data: { name: 'KPI', location: 'app/components/pivotgrid/kpi.component' } },
    { path: 'namedSets', component: NamedSetsComponent, data: { name: 'Named Sets', location: 'app/components/pivotgrid/namedSets.component' } },
    { path: 'ui', component: UIComponent, data: { name: 'User Interaction', location: 'app/components/pivotgrid/ui.component' } },
    { path: 'hyperlink', component: HyperLinkComponent, data: { name: 'Hyperlink', location: 'app/components/pivotgrid/hyperlink.component' } },
    { path: 'conditionalFormatting', component: ConditionalFormattingComponent, data: { name: 'Conditional Formatting',
    location: 'app/components/pivotgrid/conditionalFormatting.component' } },
    { path: 'summaryCustomization', component: SummaryCustomizatioComponent, data: { name: 'Summary Customization', location: 'app/components/pivotgrid/summaryCustomization.component' } },
    { path: 'exporting', component: ExportingComponent, data: { name: 'Exporting', location: 'app/components/pivotgrid/exporting.component' } },
    { path: 'excellayout', component: ExcelLikeComponent, data: { name: 'Excel-like Layout', location: 'app/components/pivotgrid/excellayout.component' } },
    { path: '', redirectTo : 'relational' }
];

export const PivotGridRouting = RouterModule.forChild(pivotgridAppRoutes);

@NgModule({
    imports: [PivotGridRouting, FormsModule, SharedModule],
    declarations: [RelationalComponent, OlapComponent, SummaryTypeComponent, NumberFormatComponent, CellEdiitngComponent,
    KPIComponent, NamedSetsComponent, UIComponent, HyperLinkComponent, ConditionalFormattingComponent,
    SummaryCustomizatioComponent, ExportingComponent, ExcelLikeComponent, EJ_PIVOTGRID_COMPONENTS]
})
export class PivotGridModule {
}
