import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EJ_COLORPICKER_COMPONENTS } from 'ej-angular2/src/ej/colorpicker.component';

import { DefaultComponent } from './default.component';

import { PaletteComponent } from './colorpalette.component';

import { CustomPaletteComponent } from './custompalette.component';

export const colorpickerAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/colorpicker/default.component' } },
    { path: 'colorpalette', component: PaletteComponent, data: { name: 'ColorPalette', location: 'app/components/colorpicker/colorpalette.component' } },
    { path: 'custompalette', component: CustomPaletteComponent, data: { name: 'CustomPalette', location: 'app/components/colorpicker/custompalette.component' } },
    { path: '', redirectTo : 'default' }
];

export const ColorPickerRouting = RouterModule.forChild(colorpickerAppRoutes);

@NgModule({
    imports: [ColorPickerRouting, FormsModule],
    declarations: [DefaultComponent, EJ_COLORPICKER_COMPONENTS,
        PaletteComponent ,
        CustomPaletteComponent
    ]
})
export class ColorPickerModule {
}
