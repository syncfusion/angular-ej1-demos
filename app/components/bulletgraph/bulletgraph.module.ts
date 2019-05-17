import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../../shared.module';
import { EJ_BULLETGRAPH_COMPONENTS } from 'ej-angular2/src/ej/bulletgraph.component';
import { DefaultComponent } from './default.component';
import { LocalDataComponent } from './localdata.component';
import { RemoteDataComponent } from './remotedata.component';
import { ApiComponent } from './api.component';
import { IndicatorComponent } from './indicator.component';
import { LabelComponent } from './label.component';
import { TitleComponent } from './title.component';

export const bulletgraphAppRoutes: Routes = [
{ path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/bulletgraph/default.component' } },
{ path: 'localdata', component: LocalDataComponent, data: { name: 'LocalData', location: 'app/components/bulletgraph/localdata.component' } },
{ path: 'remotedata', component: RemoteDataComponent, data: { name: 'RemoteData', location: 'app/components/bulletgraph/remotedata.component' } },
{ path: 'api', component: ApiComponent, data: { name: 'Api', location: 'app/components/bulletgraph/api.component' } },
{ path: 'indicator', component: IndicatorComponent, data: { name: 'Indicator', location: 'app/components/bulletgraph/indicator.component' } },
{ path: 'label', component: LabelComponent, data: { name: 'Label and Tick Positioning', location: 'app/components/bulletgraph/label.component' } },
{ path: 'title', component: TitleComponent, data: { name: 'Title Positioning', location: 'app/components/bulletgraph/title.component' } },
{ path: '', redirectTo : 'default' }
];

export const BulletGraphRouting = RouterModule.forChild(bulletgraphAppRoutes);

@NgModule({
imports: [BulletGraphRouting, SharedModule],
declarations: [DefaultComponent,
EJ_BULLETGRAPH_COMPONENTS,
LocalDataComponent,
RemoteDataComponent,
ApiComponent,
IndicatorComponent,
LabelComponent,
TitleComponent
]
})
export class BulletGraphModule {
}
