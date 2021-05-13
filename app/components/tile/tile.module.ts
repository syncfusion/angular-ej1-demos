import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EJ_TILE_COMPONENTS } from 'ej-angular2/src/ej/tile.component';

import { DefaultComponent } from './default.component';
import { LiveTileComponent } from './livetile.component';

export const tileAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/tile/default.component' } },
    { path: 'livetile', component: LiveTileComponent, data: { name: 'Live Tile', location: 'app/components/tile/livetile.component' } },
    { path: '', redirectTo : 'default' }
];

export const TileRouting = RouterModule.forChild(tileAppRoutes);

@NgModule({
    imports: [TileRouting],
    declarations: [DefaultComponent, EJ_TILE_COMPONENTS, LiveTileComponent
    ]
})
export class TileModule {
}
