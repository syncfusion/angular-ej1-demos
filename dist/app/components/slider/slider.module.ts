import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SharedModule } from './../../shared.module';

import { DefaultComponent } from './default.component';
import { RangeSliderComponent } from './rangeslider.component';
import { RTLComponent } from './rtl.component';
import { VerticalSliderComponent } from './vertical.component';
import { ButtonSupportComponent } from './buttonsupport.component';

export const sliderAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/slider/default.component' } },
    { path: 'rangeslider', component: RangeSliderComponent, data: { name: 'RangeSlider', location: 'app/components/slider/rangeslider.component' } },
    { path: 'vertical', component: VerticalSliderComponent, data: { name: 'Vertical', location: 'app/components/slider/vertical.component' } },
    { path: 'rtl', component: RTLComponent, data: { name: 'RTL', location: 'app/components/slider/rtl.component' } },
    { path: 'buttonsupport', component: ButtonSupportComponent, data: { name: 'ButtonSupport', location: 'app/components/slider/buttonsupport.component' } },
    { path: '', redirectTo : 'default' }
];

export const SliderRouting = RouterModule.forChild(sliderAppRoutes);

@NgModule({
    imports: [SliderRouting, SharedModule],
    declarations: [DefaultComponent, RangeSliderComponent, RTLComponent, VerticalSliderComponent, ButtonSupportComponent
    ]
})
export class SliderModule {
}
