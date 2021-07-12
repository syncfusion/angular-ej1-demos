import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EJ_HEATMAP_COMPONENTS } from 'ej-angular2/src/ej/heatmap.component';
import { EJ_HEATMAPLEGEND_COMPONENTS } from 'ej-angular2/src/ej/heatmaplegend.component';

import { DefaultComponent } from './celldatabinding.component';

import { LegendComponent } from './legend.component';

import { TabelComponent } from './tabeldatabinding.component';


export const heatmapAppRoutes: Routes = [
    { path: 'celldatabinding', component: DefaultComponent, data: { name: 'Cell Data Binding', location: 'app/components/heatmap/celldatabinding.component' } },
    { path: 'tabeldatabinding', component: TabelComponent, data: { name: 'Table Data Binding', location: 'app/components/heatmap/tabeldatabinding.component' } },
    { path: 'legend', component: LegendComponent, data: { name: 'Legend', location: 'app/components/heatmap/legend.component' } },
    { path: '', redirectTo : 'celldatabinding' }
];

export const HeatMapRouting = RouterModule.forChild(heatmapAppRoutes);

@NgModule({
    imports: [HeatMapRouting],
    declarations: [DefaultComponent, EJ_HEATMAP_COMPONENTS, EJ_HEATMAPLEGEND_COMPONENTS,
    LegendComponent,
    TabelComponent,
      ]
})
export class HeatMapModule {
}
