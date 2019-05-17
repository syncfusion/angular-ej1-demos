import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SharedModule } from './../../shared.module';
import { DefaultComponent } from './default.component';
import { LocalDataComponent } from './localdata.component';
import { CenterMenuComponent } from './centermenu.component';
import { VerticalMenuComponent } from './verticalmenu.component';
import { TemplateComponent } from './template.component';

export const menuAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/menu/default.component' } },
    { path: 'localdata', component: LocalDataComponent, data: { name: 'LocalData', location: 'app/components/menu/localdata.component' } },
    { path: 'centermenu', component: CenterMenuComponent, data: { name: 'Center Menu', location: 'app/components/menu/centermenu.component' } },
    { path: 'verticalmenu', component: VerticalMenuComponent, data: { name: 'Vertical Menu', location: 'app/components/menu/verticalmenu.component' } },
    { path: 'template', component: TemplateComponent, data: { name: 'Template', location: 'app/components/menu/template.component' } },
    { path: '', redirectTo : 'default' }
];

export const MenuRouting = RouterModule.forChild(menuAppRoutes);

@NgModule({
    imports: [MenuRouting, SharedModule],
    declarations: [DefaultComponent, LocalDataComponent, CenterMenuComponent, VerticalMenuComponent, TemplateComponent// EJ_MENU_COMPONENTS
    ]
})
export class MenuModule {
}
