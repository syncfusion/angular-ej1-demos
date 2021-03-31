import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './customcontextmenu.component.html',
  styleUrls: ['./customcontextmenu.component.css'], encapsulation: ViewEncapsulation.None,
})
export class CustomcontextmenuComponent {
    contextMenuSettings: Object;
    constructor() {
        this.contextMenuSettings = {
                    // define the ContextMenu items
                    items: {
                        // removed the 'NewFolder' item from NavigationPane ContextMenu
                        navbar: ['Upload', '|', 'Delete', 'Rename', '|', 'Cut', 'Copy', 'Paste', '|', 'Getinfo'],
                        // added the custom ContextMenu item (View) to Current working directory ContextMenu
                        cwd: ['Refresh', 'Paste', '|', 'SortBy', 'View', '|', 'NewFolder', 'Upload', '|', 'Getinfo'],
                        // removed 'Upload' item from Selected files/ folder's ContextMenu
                        files: ['Open', 'Download', '|', 'Delete', 'Rename', '|', 'Cut', 'Copy', 'Paste', '|',
                            'OpenFolderLocation', 'Getinfo']
                    },
                    // added the custom ContextMenu item's (View) functionality
                    customMenuFields: [
                    {
                        id: 'View',
                        text: 'View by',
                        spriteCssClass: 'custom-grid',
                        child: [
                        {
                            id: 'tile',
                            text: 'Tile view',
                            action: function (event) {
                                 let feObj = $('#fileExplorer4').data('ejFileExplorer');
                                 feObj.option('layout', event.ID);
                            }
                        },
                        {
                            id: 'grid',
                            text: 'Grid view',
                           action: function (event) {
                                 let feObj = $('#fileExplorer4').data('ejFileExplorer');
                                 feObj.option('layout', event.ID);
                            }
                        },
                        {
                            id: 'largeicons',
                            text: 'Large icons view',
                           action: function (event) {
                                 let feObj = $('#fileExplorer4').data('ejFileExplorer');
                                 feObj.option('layout', event.ID);
                            }
                        }, ]
                    }, ]
                };
    }
    onLayoutChange() {
         let feObj = $('#fileExplorer4').data('ejFileExplorer');
         $('.fe-context-menu .View').removeClass('custom-grid custom-tile custom-largeicons');
         $('.fe-context-menu .View').addClass('custom-' + feObj.model.layout);
    }
    onMenuOpen(event) {
        if (event.contextMenu == 'cwd') {
                let feObj = $('#fileExplorer4').data('ejFileExplorer');
                $('.fe-context-menu').find('.e-fe-activeicon').removeClass('e-fe-activeicon');
                $('.fe-context-menu').find('.' + feObj.model.layout).addClass('e-fe-activeicon');
            }
    }
}
