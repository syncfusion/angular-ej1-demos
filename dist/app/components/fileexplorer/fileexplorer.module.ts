import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SharedModule } from './../../shared.module';
import { EJ_FILEEXPLORER_COMPONENTS } from 'ej-angular2/src/ej/fileexplorer.component';

import { DefaultComponent } from './default.component';
import { CustomtoolComponent } from './customtool.component';
import { ThumbnailcompressComponent } from './thumbnailcompress.component';
import { EnablertlComponent } from './enablertl.component';
import { CustomcontextmenuComponent } from './customcontextmenu.component';
import { LocalizationComponent } from './localization.component';

export const fileexplorerAppRoutes: Routes = [
    { path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/fileexplorer/default.component' } },
    { path: 'customtool', component: CustomtoolComponent, data: { name: 'Custom Tool', location: 'app/components/fileexplorer/customtool.component' } },
    { path: 'customcontextmenu', component: CustomcontextmenuComponent, data: { name: 'Custom Context Menu', location: 'app/components/fileexplorer/customcontextmenu.component' } },
    { path: 'thumbnailcompress', component: ThumbnailcompressComponent, data: { name: 'Thumbnail Compress', location: 'app/components/fileexplorer/thumbnailcompress.component' } },
    { path: 'localization', component: LocalizationComponent, data: { name: 'Localization', location: 'app/components/fileexplorer/localization.component' } },
    { path: 'enablertl', component: EnablertlComponent, data: { name: 'RTL', location: 'app/components/fileexplorer/enablertl.component' } },
    { path: '', redirectTo : 'default' }
];

export const FileExplorerRouting = RouterModule.forChild(fileexplorerAppRoutes);

@NgModule({
    imports: [FileExplorerRouting, SharedModule],
    declarations: [DefaultComponent, CustomtoolComponent, ThumbnailcompressComponent, EnablertlComponent, CustomcontextmenuComponent, LocalizationComponent, EJ_FILEEXPLORER_COMPONENTS
    ]
})
export class FileExplorerModule {
}
