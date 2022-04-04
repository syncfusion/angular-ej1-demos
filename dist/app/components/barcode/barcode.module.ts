import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EJ_BARCODE_COMPONENTS } from 'ej-angular2/src/ej/barcode.component';

import { DefaultComponent } from './default.component';
import { CodabarComponent } from './codabar.component';
import { Code11Component } from './code11.component';
import { Code32Component } from './code32.component';
import { Code39Component } from './code39.component';
import { Code128AComponent } from './code128a.component';
import { Code128BComponent } from './code128b.component';
import { Code128CComponent } from './code128c.component';
import { Code93Component } from './code93.component';
import { Code39ExtendedComponent } from './code39extended.component';
import { Code93ExtendedComponent } from './code93extended.component';
import { UpcBarcodeComponent } from './upcbarcode.component';
import { DatamatrixComponent } from './datamatrix.component';

export const barcodeAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/barcode/default.component' } },
    { path: 'codabar', component: CodabarComponent, data: { name: 'Codabar', location: 'app/components/barcode/codabar.component' } },
    { path: 'code11', component: Code11Component, data: { name: 'Code11', location: 'app/components/barcode/code11.component' } },
    { path: 'code32', component: Code32Component, data: { name: 'Code32', location: 'app/components/barcode/code32.component' } },
    { path: 'code39', component: Code39Component, data: { name: 'Code39', location: 'app/components/barcode/code39.component' } },
    { path: 'code128a', component: Code128AComponent, data: { name: 'Code128A', location: 'app/components/barcode/code128a.component' } },
    { path: 'code128b', component: Code128BComponent, data: { name: 'Code128B', location: 'app/components/barcode/code128b.component' } },
    { path: 'code128c', component: Code128CComponent, data: { name: 'Code128C', location: 'app/components/barcode/code128c.component' } },
    { path: 'code93', component: Code93Component, data: { name: 'Code93', location: 'app/components/barcode/code93.component' } },
    { path: 'code39extended', component: Code39ExtendedComponent, data: { name: 'Code39Extended', location: 'app/components/barcode/code39extended.component' } },
    { path: 'code93extended', component: Code93ExtendedComponent, data: { name: 'Code93Extended', location: 'app/components/barcode/code93extended.component' } },
    { path: 'upcbarcode', component: UpcBarcodeComponent, data: { name: 'UpcBarcode', location: 'app/components/barcode/upcbarcode.component' } },
    { path: 'datamatrix', component: DatamatrixComponent, data: { name: 'Datamatrix', location: 'app/components/barcode/datamatrix.component' } },
    { path: '', redirectTo : 'default' }
];

export const BarcodeRouting = RouterModule.forChild(barcodeAppRoutes);

@NgModule({
    imports: [BarcodeRouting],
    declarations: [DefaultComponent, EJ_BARCODE_COMPONENTS, CodabarComponent, Code11Component, Code32Component, Code39Component, Code128AComponent, Code128BComponent, Code128CComponent,
        Code93Component, Code39ExtendedComponent, Code93ExtendedComponent, UpcBarcodeComponent, DatamatrixComponent
    ]
})
export class BarcodeModule {
}
