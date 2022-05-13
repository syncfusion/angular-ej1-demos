import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EJ_DIAGRAM_COMPONENTS } from 'ej-angular2/src/ej/diagram.component';
import { EJ_SYMBOLPALETTE_COMPONENTS } from 'ej-angular2/src/ej/symbolpalette.component';
import { EJ_OVERVIEW_COMPONENTS } from 'ej-angular2/src/ej/overview.component';
import { SharedModule } from './../../shared.module';


import { DefaultComponent } from './default.component';

import { SwimlaneComponent } from './swimlane.component';

import { HierarchicalLayoutComponent } from './hierarchicallayout.component';

import { OrganizationalChartComponent } from './organizationalchart.component';

import { RadialTreeComponent } from './radialtree.component';

import { LocalDataBindingComponent } from './localdatabinding.component';

import { PageSettingsComponent } from './pagesettings.component';

import { UMLDiagramComponent } from './umldiagram.component';

import { OverviewComponent } from './overview.component';


export const diagramAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default Functionalities', location: 'app/components/diagram/default.component' } },
    { path: 'swimlane', component: SwimlaneComponent, data: { name: 'Swimlane', location: 'app/components/diagram/swimlane.component' } },
    { path: 'hierarchicallayout', component: HierarchicalLayoutComponent, data: { name: 'Hierarchical Layout', location: 'app/components/diagram/hierarchicallayout.component' } },
    { path: 'organizationalchart', component: OrganizationalChartComponent, data: { name: 'Organizational Chart', location: 'app/components/diagram/organizationalchart.component' } },
    { path: 'radialtree', component: RadialTreeComponent, data: { name: 'Radial Tree', location: 'app/components/diagram/radialtree.component' } },
    { path: 'localdatabinding', component: LocalDataBindingComponent, data: { name: 'Local Data Binding', location: 'app/components/diagram/localdatabinding.component' } },
    { path: 'pagesettings', component: PageSettingsComponent, data: { name: 'Page Settings', location: 'app/components/diagram/pagesettings.component' } },
    { path: 'overview', component: OverviewComponent, data: { name: 'Overview', location: 'app/components/diagram/overview.component' } },
    { path: 'umldiagram', component: UMLDiagramComponent, data: { name: 'UML Diagram', location: 'app/components/diagram/umldiagram.component' } },
    { path: '', redirectTo : 'default' }
];

export const DiagramRouting = RouterModule.forChild(diagramAppRoutes);

@NgModule({
    imports: [DiagramRouting, SharedModule],
    declarations: [DefaultComponent, EJ_DIAGRAM_COMPONENTS, EJ_SYMBOLPALETTE_COMPONENTS, EJ_OVERVIEW_COMPONENTS,
    SwimlaneComponent,
    HierarchicalLayoutComponent,
    OrganizationalChartComponent,
    RadialTreeComponent,
    LocalDataBindingComponent,
    PageSettingsComponent,
    OverviewComponent,
    UMLDiagramComponent
    ]
})
export class DiagramModule {
}
