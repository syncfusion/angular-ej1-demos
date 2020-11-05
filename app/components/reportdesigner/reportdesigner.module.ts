import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../../shared.module';
import { DefaultComponent } from './default.component';
import { ToolBarCustomizationComponent } from './toolbarCustomization.component';

export const reportdesignerAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/reportdesigner/default.component' } },
    { path: 'toolbarCustomization', component: ToolBarCustomizationComponent, data: { name: 'Toolbar Customization', location: 'app/components/reportdesigner/toolbarCustomization.component' } },
    { path: '', redirectTo: 'default' }
];

export const ReportDesignerRouting = RouterModule.forChild(reportdesignerAppRoutes);

@NgModule({
    imports: [ReportDesignerRouting, SharedModule],
    declarations: [DefaultComponent, ToolBarCustomizationComponent]
})
export class ReportDesignerModule {
}
