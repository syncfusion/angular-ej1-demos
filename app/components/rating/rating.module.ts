import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SharedModule } from './../../shared.module';

import { DefaultComponent } from './default.component';
import { PrecisionComponent } from './precision.component';
import { OrientationComponent } from './orientation.component';

export const ratingAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/rating/default.component' } },
    { path: 'precision', component: PrecisionComponent, data: { name: 'Precision', location: 'app/components/rating/precision.component' } },
    { path: 'orientation', component: OrientationComponent, data: { name: 'Orientation', location: 'app/components/rating/orientation.component' } },
    { path: '', redirectTo : 'default' }
];

export const RatingRouting = RouterModule.forChild(ratingAppRoutes);

@NgModule({
    imports: [RatingRouting, SharedModule],
    declarations: [DefaultComponent, PrecisionComponent, OrientationComponent]
})
export class RatingModule {
}
