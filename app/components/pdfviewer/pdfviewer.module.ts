import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EJ_PDFVIEWER_COMPONENTS } from 'ej-angular2/src/ej/pdfviewer.component';

import { DefaultComponent } from './default.component';
import { LocalizationComponent } from './localization.component';

export const pdfviewerAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/pdfviewer/default.component' } },
    { path: 'localization', component: LocalizationComponent, data: { name: 'Localization', location: 'app/components/pdfviewer/localization.component' } },
    { path: '', redirectTo : 'default' }
];

export const PdfViewerRouting = RouterModule.forChild(pdfviewerAppRoutes);

@NgModule({
    imports: [PdfViewerRouting, FormsModule],
    declarations: [DefaultComponent, EJ_PDFVIEWER_COMPONENTS, LocalizationComponent ]
})
export class PdfViewerModule {
}
