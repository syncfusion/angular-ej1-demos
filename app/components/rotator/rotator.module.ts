import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EJ_ROTATOR_COMPONENTS } from 'ej-angular2/src/ej/rotator.component';

import { DefaultComponent } from './default.component';
import { DatabindingComponent } from './databinding.component';
import { ImageWithContentComponent } from './imagewithcontent.component';
import { ThumbnailComponent } from './thumbnail.component';

export const rotatorAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/rotator/default.component' } },
    { path: 'databinding', component: DatabindingComponent, data: { name: 'Data Binding', location: 'app/components/rotator/databinding.component' } },
    { path: 'imagewithcontent', component: ImageWithContentComponent, data: { name: 'Image with Content', location: 'app/components/rotator/imagewithcontent.component' } },
    { path: 'thumbnail', component: ThumbnailComponent, data: { name: 'Thumbnail', location: 'app/components/rotator/thumbnail.component' } },
    { path: '', redirectTo : 'default' }
];

export const RotatorRouting = RouterModule.forChild(rotatorAppRoutes);

@NgModule({
    imports: [RotatorRouting],
    declarations: [DefaultComponent, EJ_ROTATOR_COMPONENTS, DatabindingComponent, ImageWithContentComponent, ThumbnailComponent
    ]
})
export class RotatorModule {
}
