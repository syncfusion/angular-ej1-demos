import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../../shared.module';

import { DefaultComponent } from './default.component';
import { LocalizationComponent } from './localization.component';
import { RTLComponent } from './rtl.component';
import { CustomizationComponent } from './customization.component';
import { ScrollbarComponent } from './scrollbar.component';
import { HighlightComponent } from './highlight.component';

import { NumericComponent } from './numeric.component';



export const rangenavigatorAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/rangenavigator/default.component' } },
    { path: 'numeric', component: NumericComponent, data: { name: 'Numeric', location: 'app/components/rangenavigator/numeric.component' } },
    { path: 'localization', component: LocalizationComponent, data: { name: 'Localization', location: 'app/components/rangenavigator/localization.component' } },
    { path: 'rtl', component: RTLComponent, data: { name: 'RTL', location: 'app/components/rangenavigator/rtl.component' } },
    { path: 'customization', component: CustomizationComponent, data: { name: 'Customization', location: 'app/components/rangenavigator/customization.component' } },
    { path: 'highlight', component: HighlightComponent, data: { name: 'Highlight', location: 'app/components/rangenavigator/highlight.component' } },
    { path: 'scrollbar', component: ScrollbarComponent, data: { name: 'Scrollbar', location: 'app/components/rangenavigator/scrollbar.component' } },
    { path: '', redirectTo : 'default' }
];

export const RangeNavigatorRouting = RouterModule.forChild(rangenavigatorAppRoutes);

@NgModule({
    imports: [RangeNavigatorRouting, SharedModule],
    declarations: [DefaultComponent, LocalizationComponent, RTLComponent, CustomizationComponent, ScrollbarComponent, HighlightComponent,
        NumericComponent
    ]
})
export class RangeNavigatorModule {
}
