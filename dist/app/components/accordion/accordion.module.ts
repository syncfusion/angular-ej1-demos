import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EJ_ACCORDION_COMPONENTS } from 'ej-angular2/src/ej/accordion.component';
import { DefaultComponent } from './default.component';
import { MultipleOpenComponent } from './multipleopen.component';
import { IconsComponent } from './icons.component';
import { NestedAccordionComponent } from './nestedaccordion.component';
import { OpenOnHoverComponent } from './openonhover.component';
import { RTLComponent } from './rtl.component';

export const accordionAppRoutes: Routes = [
   { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/accordion/default.component' } },
   { path: 'multipleopen', component: MultipleOpenComponent, data: { name: 'MultipleOpen', location: 'app/components/accordion/multipleopen.component' } },
   { path: 'icons', component: IconsComponent, data: { name: 'Icons', location: 'app/components/accordion/icons.component' } },
   { path: 'nestedaccordion', component: NestedAccordionComponent, data: { name: 'NestedAccordion', location: 'app/components/accordion/nestedaccordion.component' } },
   { path: 'openonhover', component: OpenOnHoverComponent, data: { name: 'OpenOnHover', location: 'app/components/accordion/openonhover.component' } },
   { path: 'rtl', component: RTLComponent, data: { name: 'RTL', location: 'app/components/accordion/rtl.component' } },
   { path: '', redirectTo : 'default' }
];

export const AccordionRouting = RouterModule.forChild(accordionAppRoutes);

@NgModule({
    imports: [AccordionRouting],
    declarations: [DefaultComponent, MultipleOpenComponent, IconsComponent, NestedAccordionComponent, OpenOnHoverComponent, RTLComponent, EJ_ACCORDION_COMPONENTS]
})
export class AccordionModule {
}
