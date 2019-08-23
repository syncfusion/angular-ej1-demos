import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EJ_PIVOTTREEMAP_COMPONENTS } from 'ej-angular2/src/ej/pivottreemap.component';

import { DefaultComponent } from './default.component';
import { ColorMappingComponent } from './colormapping.component';

export const pivottreemapAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/pivottreemap/default.component' } },
    { path: 'colormapping', component: ColorMappingComponent, data: { name: 'Color Mapping', location: 'app/components/pivottreemap/colormapping.component' } },
    { path: '', redirectTo : 'default' }
];

export const PivotTreeMapRouting = RouterModule.forChild(pivottreemapAppRoutes);

@NgModule({
    imports: [PivotTreeMapRouting, FormsModule],
    declarations: [DefaultComponent, ColorMappingComponent, EJ_PIVOTTREEMAP_COMPONENTS]
})
export class PivotTreeMapModule {
}
