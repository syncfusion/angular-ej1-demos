import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EJ_MAP_COMPONENTS } from 'ej-angular2/src/ej/map.component';
import { SharedModule } from './../../shared.module';
import { DefaultComponent } from './default.component';
import { MarkerComponent } from './marker.component';
import { LabelComponent } from './label.component';
import { SelectionComponent } from './selection.component';
import { ZoomingComponent } from './zooming.component';
import { HeatComponent } from './heat.component';
import { FlightComponent } from './flight.component';

export const mapAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/map/default.component' } },
    { path: 'marker', component: MarkerComponent, data: { name: 'Data Markers', location: 'app/components/map/marker.component' } },
    { path: 'label', component: LabelComponent, data: { name: 'Labels', location: 'app/components/map/label.component' } },
    { path: 'selection', component: SelectionComponent, data: { name: 'Selection', location: 'app/components/map/selection.component' } },
    { path: 'zooming', component: ZoomingComponent, data: { name: 'Zooming', location: 'app/components/map/zooming.component' } },
    { path: 'heat', component: HeatComponent, data: { name: 'Heat Map', location: 'app/components/map/heat.component' } },
    { path: 'flight', component: FlightComponent, data: { name: 'Flight Routes', location: 'app/components/map/flight.component' } },
    { path: '', redirectTo : 'default' }
];

export const MapRouting = RouterModule.forChild(mapAppRoutes);

@NgModule({
    imports: [MapRouting, SharedModule],
    declarations: [DefaultComponent, MarkerComponent, LabelComponent, SelectionComponent, FlightComponent, ZoomingComponent, HeatComponent,
        EJ_MAP_COMPONENTS
    ]
})
export class MapModule {
}
