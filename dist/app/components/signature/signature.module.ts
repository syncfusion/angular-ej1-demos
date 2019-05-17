import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EJ_SIGNATURE_COMPONENTS } from 'ej-angular2/src/ej/signature.component';

import { SignatureComponent } from './signature.component';

export const signatureAppRoutes: Routes = [
    { path: 'default', component: SignatureComponent, data: { name: 'Default', location: 'app/components/signature/signature.component' } },
    { path: '', redirectTo : 'default' }
];

export const signatureRouting = RouterModule.forChild(signatureAppRoutes);

@NgModule({
    imports: [signatureRouting],
    declarations: [SignatureComponent, EJ_SIGNATURE_COMPONENTS
    ]
})
export class SignatureModule {
}
